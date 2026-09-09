import { interpolate, useCurrentFrame } from "remotion";
import { Frame } from "./Frame";

export function Proposal({ pt }: { pt: boolean }) {
  const frame = useCurrentFrame();
  return <Frame step={pt ? "02 / A PROPOSTA" : "02 / THE PROPOSAL"} title={pt ? "Clareza antes de começar." : "Clarity before we start."}>
    <div style={{ border: "1px solid #28513b", borderRadius: 24, background: "#0a1e14", padding: "12px 36px" }}>
      {(pt ? [["Escopo", "O que será entregue"], ["Prazo", "As etapas do projeto"], ["Investimento", "O valor combinado"]] : [["Scope", "What gets delivered"], ["Timeline", "The project stages"], ["Investment", "The agreed price"]]).map(([title, subtitle], i) => (
        <div key={title} style={{ padding: "18px 0", borderBottom: i < 2 ? "1px solid #254333" : undefined, display: "flex", alignItems: "center", gap: 25, opacity: interpolate(frame, [15 + i * 25, 30 + i * 25], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
          <span style={{ color: "#52ff7d", fontSize: 40 }}>✓</span><div><strong style={{ fontSize: 44, lineHeight: 1.1 }}>{title}</strong><p style={{ margin: "8px 0 0", fontSize: 33, lineHeight: 1.2, color: "#a5c4b3" }}>{subtitle}</p></div>
        </div>
      ))}
    </div>
    <p style={{ color: "#a5c4b3", fontSize: 34, lineHeight: 1.3, marginTop: 24 }}>{pt ? "Você aprova a proposta. Depois, começamos." : "You approve the proposal. Then we begin."}</p>
  </Frame>;
}
