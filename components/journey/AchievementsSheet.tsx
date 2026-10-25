"use client";

import { useEffect, useRef } from "react";
import { Icon } from "./icons";
import { useDragToClose, useSheet } from "./useSheet";

interface AchievementsSheetProps {
  open: boolean;
  items: { id: string; title: string }[];
  unlocked: string[];
  onClosed: () => void;
}

/** Folha de conquistas, aberta pelo troféu do topo no celular. */
export default function AchievementsSheet({ open, items, unlocked, onClosed }: AchievementsSheetProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const grabRef = useRef<HTMLDivElement>(null);
  const { show, close } = useSheet(dialogRef, onClosed);
  useDragToClose(grabRef, dialogRef, close);

  useEffect(() => {
    if (open) show();
  }, [open, show]);

  return (
    <dialog ref={dialogRef} className="sheet" id="conquistas" aria-labelledby="conquistas-title">
      <div className="sheet-grab" ref={grabRef}>
        <span />
      </div>
      <div className="sheet-body">
        <h2 id="conquistas-title">Conquistas</h2>
        <p className="sheet-sub">
          {unlocked.length} de {items.length} desbloqueadas. Continue a trilha para ver as outras.
        </p>
        <ul className="ach-list is-sheet">
          {items.map((item) => {
            const on = unlocked.includes(item.id);
            return (
              <li key={item.id} className={on ? "is-on" : undefined}>
                <Icon name={on ? "trophy" : "lock"} />
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
        <button className="pill pill-glass pill-wide" type="button" onClick={close}>
          Voltar para a trilha
        </button>
      </div>
    </dialog>
  );
}
