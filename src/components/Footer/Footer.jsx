import arrow from "../../assets/svg/arrow.svg";
import { ContainerFooter, ContainerLanguage, FooterTag } from "./FooterStyles";
import Nav from "../Nav/Nav";

const Footer = () => {
  return (
    <FooterTag>
      <ContainerFooter>
        <ContainerLanguage>
          <a href="#language">
            <p>PT-BR</p>
            <img src={arrow} alt="Arrow icon" />
          </a>
        </ContainerLanguage>

        <Nav
          items={["Sobre", "Termos de serviço", "Política de privacidade"]}
        />
      </ContainerFooter>
    </FooterTag>
  );
};

export default Footer;
