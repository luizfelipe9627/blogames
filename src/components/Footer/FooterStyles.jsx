import styled from "styled-components";

export const FooterTag = styled.footer`
  border-top: 1px solid #e2e2e2;
  padding: 24px;
`;

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 60vw;
  margin: 0 auto;

  ul {
    display: flex;
    gap: 32px;
  }

  li {
    font-size: 18px;
  }

  li:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const ContainerLanguage = styled.div`
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
