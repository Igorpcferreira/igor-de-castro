import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { TransitionSeries } from "@remotion/transitions";
import { Brief } from "./scenes/Brief";
import { Proposal } from "./scenes/Proposal";
import { Build } from "./scenes/Build";
import { Invitation } from "./scenes/Invitation";

export function QuoteFilm({ locale }: { locale: "pt-BR" | "en" }) {
  const frame = useCurrentFrame();
  const pt = locale === "pt-BR";
  return <AbsoluteFill style={{ background: "radial-gradient(ellipse at 100% 0%, #123724 0%, #031008 60%)", color: "#f4fff8", fontFamily: "var(--font-space-grotesk, Arial), sans-serif", lineHeight: 1.5 }}>
    <AbsoluteFill style={{ backgroundImage: "linear-gradient(#52ff7d08 1px, transparent 1px), linear-gradient(90deg, #52ff7d08 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={180} name="Conversation"><Brief pt={pt} /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence durationInFrames={210} name="Proposal"><Proposal pt={pt} /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence durationInFrames={210} name="Development"><Build pt={pt} /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence durationInFrames={180} name="Invitation"><Invitation pt={pt} /></TransitionSeries.Sequence>
    </TransitionSeries>
    <div style={{ position: "absolute", left: 72, right: 72, bottom: 55, display: "flex", justifyContent: "space-between", fontSize: 25, letterSpacing: 2, color: "#8aae9b" }}><span>IGOR DE CASTRO</span><span>{pt ? "IDEIA → PROJETO" : "IDEA → PRODUCT"}</span></div>
    <div style={{ position: "absolute", bottom: 0, height: 5, background: "#52ff7d", width: `${interpolate(frame, [0, 779], [0, 100])}%` }} />
  </AbsoluteFill>;
}
