import { ContainerCarregarMais } from "./CarregarMaisStyles";
import arrow from "../../assets/svg/arrow.svg";

const CarregarMais = () => {
  return (
    <ContainerCarregarMais>
      <a href="#carregar-mais">
        <h1>Carregar mais</h1>
        <img src={arrow} alt="Seta para baixo" />
      </a>
    </ContainerCarregarMais>
  );
};

export default CarregarMais;
