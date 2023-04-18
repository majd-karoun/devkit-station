import LinkItem from "../linkItem/LinkItem";
import "./linkslist.css";
import React from "react";

const LinksList = ({ links, updateKey, isLoading }) => {
  return (
    <div className="links-list-container" key={updateKey}>
      {isLoading ? <div className="spinner"></div> : ""}
<div style={{color: "white"}}>{isLoading}</div>
      <ul className="links-list">
        {links.map((link) => (
          <LinkItem key={link.id} link={link} />
        ))}
      </ul>
    </div>
  );
};

export default LinksList;
