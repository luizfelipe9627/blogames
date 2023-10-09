import React from "react";

import Card from "../Card/Card";
import { ContainerCard } from "./SectionCardStyles";
import CarregarMais from "../CarregarMais/CarregarMais";

import xbox from "../../assets/img/xbox.webp";
import cyberpunk from "../../assets/img/cyberpunk.webp";
import multiversus from "../../assets/img/multiversus.webp";
import ea from "../../assets/img/ea.webp";

const SectionCard = () => {
  return (
    <section>
      <ContainerCard>
        <Card
          img={xbox}
          data="19 de outubro, 2023"
          title="Xbox: consoles ganham atualização com novos recursos"
        />
        <Card
          img={cyberpunk}
          data="4 de outubro, 2023"
          title="Cyberpunk vai ganhar novo jogo"
        />
        <Card
          img={multiversus}
          data="27 de setembro, 2023"
          title="Coringa pode aparecer em MultiVersus em breve"
        />
        <Card
          img={ea}
          data="30 de agosto, 2023"
          title="EA Games confirma novo jogo e janela de lançamento"
        />
      </ContainerCard>

      <CarregarMais />
    </section>
  );
};

export default SectionCard;
