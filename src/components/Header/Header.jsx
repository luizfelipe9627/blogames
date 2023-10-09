import { ContainerHeaderTop, ContainerHeaderBottom } from "./HeaderStyles";
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";

import facebook from "../../assets/svg/facebook.svg";
import twitter from "../../assets/svg/twitter.svg";
import twitch from "../../assets/svg/twitch.svg";
import discord from "../../assets/svg/discord.svg";
import user from "../../assets/svg/user.svg";
import search from "../../assets/svg/search.svg";
import menu from "../../assets/svg/menu.svg";

const Header = () => {
  return (
    <>
      <header>
        <ContainerHeaderTop>
          <Nav
            items={["facebook", "twitter", "twitch", "discord"]}
            img={[facebook, twitter, twitch, discord]}
          />

          <Logo />

          <Nav items={["user", "search", "menu"]} img={[user, search, menu]} />
        </ContainerHeaderTop>

        <ContainerHeaderBottom>
          <Nav
            items={["inicio", "categorias", "sobre", "contato"]}
            gap="48px"
          />
        </ContainerHeaderBottom>
      </header>
    </>
  );
};

export default Header;
