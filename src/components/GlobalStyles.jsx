import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Nunito", sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,
  li {
    list-style: none;
  }

  img {
    display: block;
    width: 100%;
  }

  button,
  input {
    display: block;
  }

  a {
    text-decoration: none;
    color: #100f0f;
  }
`;
