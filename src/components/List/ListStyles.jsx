import styled from "styled-components";

export const ListIcon = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  li {
    font-size: 18px;
    gap: 32px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export const ListText = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 48px;

  a {
    font-size: 18px;
    color: #100f0f;

    &:hover {
      text-decoration: underline;
    }
  }
`;
