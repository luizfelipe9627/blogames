import * as S from "./SectionCardStyles";
import Card from "../Card/Card";
import CarregarMais from "../CarregarMais/CarregarMais";
import xbox from "../../assets/img/xbox.webp";
import cyberpunk from "../../assets/img/cyberpunk.webp";
import multiversus from "../../assets/img/multiversus.webp";
import ea from "../../assets/img/ea.webp";

const SectionCard = () => {
  return (
    <section>
      <S.Container>
        <Card
          img={xbox}
          href="xbox"
          data="19 de outubro, 2023"
          title="Xbox: consoles ganham atualização com novos recursos"
        />
        <Card
          img={cyberpunk}
          href="cyberpunk"
          data="4 de outubro, 2023"
          title="Cyberpunk vai ganhar novo jogo"
        />
        <Card
          img={multiversus}
          href="multiversus"
          data="27 de setembro, 2023"
          title="Coringa pode aparecer em MultiVersus em breve"
        />
        <Card
          img={ea}
          href="ea"
          data="30 de agosto, 2023"
          title="EA Games confirma novo jogo e janela de lançamento"
        />
      </S.Container>

      <CarregarMais />
    </section>
  );
};

export default SectionCard;
