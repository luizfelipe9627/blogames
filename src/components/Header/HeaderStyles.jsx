import styled from "styled-components";

export const ContainerHeaderTop = styled.div`
  display: flex;
  padding: 23px 0;
  max-width: 60vw;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerHeaderBottom = styled.div`
  padding: 40px 0 56px 0;
  border-top: 1px solid #e2e2e2;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    display: flex;
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
