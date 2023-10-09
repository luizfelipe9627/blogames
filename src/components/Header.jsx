import {
  HeaderContainerTop,
  HeaderContainerBottom,
  HeaderLogo,
} from "./HeaderStyles";

import facebook from "../assets/svg/facebook.svg";
import twitter from "../assets/svg/twitter.svg";
import twitch from "../assets/svg/twitch.svg";
import discord from "../assets/svg/discord.svg";
import user from "../assets/svg/user.svg";
import search from "../assets/svg/search.svg";
import menu from "../assets/svg/menu.svg";

const Header = () => {
  return (
    <header>
      <HeaderContainerTop>
        <nav>
          <ul>
            <li>
              <a href="#facebook">
                <img src={facebook} alt="Facebook icon" />
              </a>
            </li>
            <li>
              <a href="#twitter">
                <img src={twitter} alt="Twitter icon" />
              </a>
            </li>
            <li>
              <a href="#twitch">
                <img src={twitch} alt="Twitch icon" />
              </a>
            </li>
            <li>
              <a href="#discord">
                <img src={discord} alt="Discord icon" />
              </a>
            </li>
          </ul>

          <HeaderLogo>
            <a href="#">Blogames</a>
          </HeaderLogo>

          <ul>
            <li>
              <a href="#user">
                <img src={user} alt="User icon" />
              </a>
            </li>
            <li>
              <a href="#search">
                <img src={search} alt="Search icon" />
              </a>
            </li>

            <li>
              <a href="#menu">
                <img src={menu} alt="Menu icon" />
              </a>
            </li>
          </ul>
        </nav>
      </HeaderContainerTop>

      <HeaderContainerBottom>
        <nav>
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#categorias">Categorias</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </HeaderContainerBottom>
    </header>
  );
};

export default Header;
