import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import type { ReactNode } from "react";

export function Frame({ step, title, children }: { step: string; title: string; children: ReactNode }) {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ boxSizing: "border-box", padding: "80px 72px", opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" }), translate: `0 ${interpolate(frame, [0, 22], [24, 0], { extrapolateRight: "clamp" })}px` }}>
      <div style={{ color: "#52ff7d", fontSize: 28, letterSpacing: 5, fontWeight: 600 }}>{step}</div>
      <h2 style={{ margin: "26px 0 36px", fontSize: 72, lineHeight: 1.06, letterSpacing: -3, color: "#f4fff8", fontWeight: 700 }}>{title}</h2>
      {children}
    </AbsoluteFill>
  );
}
