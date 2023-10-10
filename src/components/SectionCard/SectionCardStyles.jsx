import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
  gap: 40px;

  :nth-child(4) {
    grid-column: 1 / -1;
  }

  @media (max-width: 1023px) {
    margin-top: 48px;
    grid-template-columns: repeat(2, 1fr);

    :nth-child(4) {
      grid-column: 2;
      grid-row: 2;
    }
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;

    :nth-child(4) {
      grid-column: 1;
      grid-row: 4;
    }
  }
`;
