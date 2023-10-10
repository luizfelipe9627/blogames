import * as S from "./CarregarMaisStyles";
import arrow from "../../assets/svg/arrow.svg";

const CarregarMais = () => {
  return (
    <S.CarregarMais>
      <a href="#carregar-mais">
        <h1>Carregar mais</h1>
        <img src={arrow} alt="Seta para baixo" />
      </a>
    </S.CarregarMais>
  );
};

export default CarregarMais;
