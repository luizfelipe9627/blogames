import styled from "styled-components";

export const ContainerTop = styled.div`
  padding: 23px 0;
  max-width: 70vw;
  margin: 0 auto;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const ContainerBottom = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 40px 0 56px 0;
  border-top: 1px solid #e2e2e2;
  text-transform: uppercase;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const ContainerMobile = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #e2e2e2;

  nav {
    max-width: 90vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    width: 32px;
    height: 32px;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;
