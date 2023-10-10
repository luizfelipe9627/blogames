import * as S from "./CardStyles";
import Overlay from "../Overlay/Overlay";

const Card = ({ href, img, data, title }) => {
  return (
    <S.Card>
      <a href={`#${href}`}>
        <Overlay />
        <S.Image>
          <img src={img} alt="Xbox" />
        </S.Image>

        <S.Content>
          <span>{data}</span>
          <h1>{title}</h1>
        </S.Content>
      </a>
    </S.Card>
  );
};

export default Card;
