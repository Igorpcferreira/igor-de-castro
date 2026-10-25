"use client";

import { useCallback, useEffect, useRef, type RefObject } from "react";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Folha em <dialog> modal: trava a rolagem, ganha uma entrada no histórico (o "voltar"
 * do celular fecha a folha em vez de sair da página), fecha com Esc e com toque fora,
 * e anima a saída antes de fechar. A limpeza roda direto ao fechar, porque o evento
 * "close" do dialog pode atrasar até o próximo quadro.
 */
export function useSheet(dialogRef: RefObject<HTMLDialogElement | null>, onClosed: () => void) {
  const inHistory = useRef(false);
  const closing = useRef(false);
  const opener = useRef<HTMLElement | null>(null);
  const onClosedRef = useRef(onClosed);

  useEffect(() => {
    onClosedRef.current = onClosed;
  }, [onClosed]);

  const finish = useCallback(() => {
    closing.current = false;
    document.documentElement.classList.remove("is-locked");
    if (inHistory.current) {
      inHistory.current = false;
      window.history.back();
    }
    onClosedRef.current();
    opener.current?.focus({ preventScroll: true });
  }, []);

  const close = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog?.open || closing.current) return;
    closing.current = true;
    const done = () => {
      dialog.classList.remove("is-closing");
      if (dialog.open) dialog.close();
      finish();
    };
    if (prefersReducedMotion()) return done();
    dialog.classList.add("is-closing");
    window.setTimeout(done, 230);
  }, [dialogRef, finish]);

  const show = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open || typeof dialog.showModal !== "function") return;
    opener.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    window.history.pushState({ sheet: dialog.id }, "");
    inHistory.current = true;
    document.documentElement.classList.add("is-locked");
    dialog.showModal();
  }, [dialogRef]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onPop = () => {
      if (!dialog.open) return;
      inHistory.current = false;
      close();
    };
    const onCancel = (event: Event) => {
      event.preventDefault();
      close();
    };
    const onClick = (event: MouseEvent) => {
      if (event.target !== dialog) return;
      const box = dialog.getBoundingClientRect();
      const outside = event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
      if (outside) close();
    };
    window.addEventListener("popstate", onPop);
    dialog.addEventListener("cancel", onCancel);
    dialog.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("popstate", onPop);
      dialog.removeEventListener("cancel", onCancel);
      dialog.removeEventListener("click", onClick);
    };
  }, [dialogRef, close]);

  return { show, close };
}

/** No celular, arrastar a alça da folha para baixo fecha. */
export function useDragToClose(
  handleRef: RefObject<HTMLElement | null>,
  sheetRef: RefObject<HTMLElement | null>,
  close: () => void,
) {
  useEffect(() => {
    const handle = handleRef.current;
    const sheet = sheetRef.current;
    if (!handle || !sheet) return;
    let start: number | null = null;
    let distance = 0;
    const down = (event: PointerEvent) => {
      if ((event.target as HTMLElement).closest("button, a, video, input")) return;
      start = event.clientY;
      distance = 0;
      sheet.style.transition = "none";
      handle.setPointerCapture(event.pointerId);
    };
    const move = (event: PointerEvent) => {
      if (start === null) return;
      distance = Math.max(0, event.clientY - start);
      sheet.style.transform = `translateY(${distance}px)`;
    };
    const end = () => {
      if (start === null) return;
      start = null;
      sheet.style.transition = "transform .25s cubic-bezier(.22,1,.36,1)";
      sheet.style.transform = "";
      if (distance > 90) close();
    };
    handle.addEventListener("pointerdown", down);
    handle.addEventListener("pointermove", move);
    handle.addEventListener("pointerup", end);
    handle.addEventListener("pointercancel", end);
    return () => {
      handle.removeEventListener("pointerdown", down);
      handle.removeEventListener("pointermove", move);
      handle.removeEventListener("pointerup", end);
      handle.removeEventListener("pointercancel", end);
    };
  }, [handleRef, sheetRef, close]);
}
