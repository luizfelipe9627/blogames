import arrow from "../../assets/svg/arrow.svg";
import * as S from "./FooterStyles";
import List from "../List/List";

const Footer = () => {
  return (
    <S.Footer>
      <S.Container>
        <S.Language>
          <a href="#language">
            <p>PT-BR</p>
            <img src={arrow} alt="Arrow icon" />
          </a>
        </S.Language>

        <List
          items={["sobre", "termos de serviço", "política de privacidade"]}
        />
      </S.Container>
    </S.Footer>
  );
};

export default Footer;
