import "./linkitem.css";
import React from "react";

const LinkItem = ({ link }) => {
  return (
    <li key={link.id} className="link-item">
      <div className="link-item__info">
        <h3 className="link-item__title">{link.name}</h3>
        <p className="link-item__description">{link.description}</p>
      </div>

      <a href={link.url} target="_blank" rel="noreferrer">
        Try
      </a>
    </li>
  );
};

export default LinkItem;
