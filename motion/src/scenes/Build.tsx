import { interpolate, useCurrentFrame } from "remotion";
import { Frame } from "./Frame";

export function Build({ pt }: { pt: boolean }) {
  const frame = useCurrentFrame();
  return <Frame step={pt ? "03 / O PROJETO" : "03 / THE PROJECT"} title={pt ? "Da proposta para a prática." : "From proposal to product."}>
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      {(pt ? ["Desenvolver", "Validar com você", "Preparar a entrega"] : ["Build", "Review together", "Prepare the delivery"]).map((label, i) => <div key={label} style={{ border: "1px solid #28513b", background: "#0a1e14", padding: 30, borderRadius: 20, display: "flex", alignItems: "center", gap: 30, opacity: interpolate(frame, [i * 35, 18 + i * 35], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}><span style={{ fontSize: 32, color: "#35c8ff" }}>0{i + 1}</span><strong style={{ fontSize: 42 }}>{label}</strong></div>)}
    </div>
    <p style={{ fontSize: 35, color: "#a5c4b3", marginTop: 35, lineHeight: 1.4 }}>{pt ? "Contato direto comigo em cada etapa." : "Work directly with me at every stage."}</p>
  </Frame>;
}
