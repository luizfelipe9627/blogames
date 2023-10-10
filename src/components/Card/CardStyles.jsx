import styled from "styled-components";

export const Image = styled.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden; // Impede que a imagem ultrapasse o tamanho do container.

  img {
    max-width: 100vw;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }

  @media (max-width: 1023px) {
    img {
      max-height: 300px;
    }
  }
`;

export const Content = styled.div`
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

export const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    ${Image} img {
      transform: scale(1.1);
      background: rgba(0, 0, 0, 0);
    }
  }
`;
