import { ContainerCard, CardImage, CardContent } from "./CardStyles";
import Overlay from "../Overlay/Overlay";

const Card = ({ img, data, title }) => {
  return (
    <ContainerCard>
      <Overlay />
      <CardImage>
        <img src={img} alt="Xbox" />
      </CardImage>

      <CardContent>
        <span>{data}</span>
        <h1>{title}</h1>
      </CardContent>
    </ContainerCard>
  );
};

export default Card;
