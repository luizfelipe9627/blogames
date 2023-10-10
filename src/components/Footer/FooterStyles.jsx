import styled from "styled-components";

export const Footer = styled.footer`
  border-top: 1px solid #e2e2e2;
  padding: 24px;

  @media (max-width: 800px) {
    padding: 24px 0 32px 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 70vw;
  margin: 0 auto;

  @media (max-width: 1023px) {
    max-width: 90vw;
  }

  @media (max-width: 800px) {
    justify-content: center;
  }

  ul {
    display: flex;
    gap: 32px;

    @media (max-width: 800px) {
      flex-direction: column;
    }
  }

  li {
    font-size: 18px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export const Language = styled.div`
  @media (max-width: 800px) {
    display: none;
  }

  a {
    display: flex;
  }

  p {
    font-size: 18px;
    color: #100f0f;
    margin-right: 16px;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;
