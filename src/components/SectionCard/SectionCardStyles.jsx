import styled from "styled-components";

export const ContainerCard = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
  gap: 40px;

  :nth-child(4) {
    grid-column: 1 / -1;
  }
`;
