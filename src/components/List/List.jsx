import React from "react";
import * as S from "./ListStyles";

const List = ({ items, img, texts, ...props }) => {
  return (
    <>
      {img ? (
        <S.ListIcon style={{ ...props }}>
          {items.map((item, index) => (
            <li key={index} style={{ ...props }}>
              <a href={`#${item}`}>
                <img src={img[index]} alt={item} />
              </a>
            </li>
          ))}
        </S.ListIcon>
      ) : (
        <S.ListText style={{ ...props }}>
          {items.map((text, index) => (
            <li key={index} style={{ ...props }}>
              <a href={`#${text}`}>{text}</a>
            </li>
          ))}
        </S.ListText>
      )}
    </>
  );
};

export default List;
