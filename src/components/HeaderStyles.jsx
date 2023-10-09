import styled from "styled-components";

export const HeaderContainerTop = styled.div`
  border-bottom: 1px solid #e2e2e2;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 23px 0;
    max-width: 90vw;
    margin: 0 auto;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    margin-left: 32px;
  }

  li:first-child {
    margin-left: 0;
  }
`;

export const HeaderContainerBottom = styled.div`
  padding: 40px 0 56px 0;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    display: flex;
  }

  li {
    margin-right: 48px;
  }

  li:last-child {
    margin-right: 0;
  }

  a {
    font-size: 18px;
    text-transform: uppercase;
    color: #100f0f;
    margin-left: 48px;

    &:first-child {
      margin-left: 0;
    }
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const HeaderContentBottom = styled.div`
  padding: 23px 0;
`;

export const HeaderLogo = styled.h1`
  font-family: "Caesar Dressing", cursive;
  font-size: 56px;

  a {
    color: #100f0f;
  }
`;
