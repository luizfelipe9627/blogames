import React from "react";
import { List } from "./NavStyles";

const Nav = ({ items, img, texts, ...props }) => {
  return (
    <nav>
      {img ? (
        <List style={{ ...props }}>
          {img.map((item, index) => (
            <li key={index} style={{ ...props }}>
              <a href={`#${item}`}>
                <img src={img[index]} alt={item} />
              </a>
            </li>
          ))}
        </List>
      ) : (
        <ul style={{ ...props }}>
          {items.map((text, index) => (
            <li key={index} style={{ ...props }}>
              <a href={`#${text}`}>{text}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
