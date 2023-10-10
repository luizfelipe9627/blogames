import * as S from "./HeaderStyles";
import List from "../List/List";
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
        <S.ContainerTop>
          <nav>
            <List
              items={["facebook", "twitter", "twitch", "discord"]}
              img={[facebook, twitter, twitch, discord]}
            />

            <Logo />

            <List
              items={["user", "search", "menu"]}
              img={[user, search, menu]}
            />
          </nav>
        </S.ContainerTop>

        <S.ContainerMobile>
          <nav>
            <List
              items={["user"]}
              img={[user]}
            />

            <Logo />

            <List
              items={["menu"]}
              img={[menu]}
            />
          </nav>
        </S.ContainerMobile>

        <S.ContainerBottom>
          <List
            items={["inicio", "categorias", "sobre", "contato"]}
          />
        </S.ContainerBottom>
      </header>
    </>
  );
};

export default Header;
