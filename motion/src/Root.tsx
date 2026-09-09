import { Composition } from "remotion";
import { QuoteFilm } from "./QuoteFilm";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition id="QuotePT" component={QuoteFilm} durationInFrames={780} fps={30} width={900} height={1000} defaultProps={{ locale: "pt-BR" }} />
      <Composition id="QuoteEN" component={QuoteFilm} durationInFrames={780} fps={30} width={900} height={1000} defaultProps={{ locale: "en" }} />
    </>
  );
};
