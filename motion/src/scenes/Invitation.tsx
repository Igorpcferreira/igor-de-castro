import { Frame } from "./Frame";

export function Invitation({ pt }: { pt: boolean }) {
  return <Frame step={pt ? "SEU PRÓXIMO PASSO" : "YOUR NEXT STEP"} title={pt ? "O que você quer tirar do papel?" : "What do you want to bring to life?"}>
    <p style={{ fontSize: 42, lineHeight: 1.4, color: "#a5c4b3", margin: "0 0 45px" }}>{pt ? "Site, sistema ou automação. Comece me contando o que seu negócio precisa." : "Website, software, or automation. Start by telling me what your business needs."}</p>
    <div style={{ borderLeft: "6px solid #52ff7d", paddingLeft: 30, fontSize: 45, lineHeight: 1.25, color: "#52ff7d", fontWeight: 600 }}>{pt ? "Vamos conversar no WhatsApp ↗" : "Let’s talk on WhatsApp ↗"}</div>
    <p style={{ fontSize: 28, color: "#a5c4b3", marginTop: 30 }}>{pt ? "Use o botão de orçamento desta página." : "Use the project button on this page."}</p>
  </Frame>;
}
