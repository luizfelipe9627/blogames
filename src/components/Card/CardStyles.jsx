import styled from "styled-components";

export const ContainerCard = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const CardImage = styled.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden; // Impede que a imagem ultrapasse o tamanho do container.

  img {
    transition: transform 0.3s ease-in-out;
  }

  :hover {
    transform: scale(1.1);
    background: rgba(0, 0, 0, 0);
  }
`;

export const CardContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 20px;
  bottom: 0;

  span {
    font-size: 16px;
    color: #e2e2e2;
  }

  h1 {
    font-size: 24px;
    color: #f9f9f9;
    margin-top: 12px;
  }
`;
