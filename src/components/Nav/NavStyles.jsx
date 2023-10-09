import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  li {
    font-size: 18px;
    gap: 32px;
  }

  li:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
