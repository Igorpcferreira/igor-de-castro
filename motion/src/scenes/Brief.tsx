import { interpolate, useCurrentFrame } from "remotion";
import { Frame } from "./Frame";

export function Brief({ pt }: { pt: boolean }) {
  const frame = useCurrentFrame();
  return <Frame step={pt ? "01 / A CONVERSA" : "01 / THE CONVERSATION"} title={pt ? "Sua ideia começa aqui." : "Your idea starts here."}>
    <div style={{ border: "1px solid #28513b", borderRadius: 28, padding: 38, background: "#0a1e14", marginLeft: 48, fontSize: 43, lineHeight: 1.3 }}>
      {pt ? "Preciso de um site para o meu negócio." : "I need a website for my business."}
      <div style={{ color: "#8aae9b", fontSize: 24, marginTop: 20 }}>{pt ? "EXEMPLO DE CONVERSA" : "EXAMPLE CONVERSATION"}</div>
    </div>
    <div style={{ marginTop: 28, marginRight: 48, borderRadius: 28, padding: 38, background: "#52ff7d", color: "#031008", fontSize: 43, lineHeight: 1.3, opacity: interpolate(frame, [45, 65], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }), translate: `0 ${interpolate(frame, [45, 65], [20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}px` }}>
      {pt ? "Me conta o que você quer resolver." : "Tell me what you want to solve."}
    </div>
  </Frame>;
}
