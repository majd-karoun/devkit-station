import "./header.css";
import React, { useState } from "react";
import axios from "axios";

const Header = ({ setLinks, setUpdateKey }) => {
  const [filter, setFilter] = useState("All");

  const handleFilter = (e) => {
    setUpdateKey((prevKey) => prevKey + 1);
    setFilter(e.target.innerText);
    if (e.target.innerText != "All") {
      axios
        .get(`https://devkitstation.web.app/resources/type/${e.target.innerText}`)
        .then((Response) => {
          setLinks(Response.data);
        });
    } else {
      const response = axios
        .get("https://devkitstation.web.app/resources")
        .then((response) => {
          setLinks(response.data);
        });
    }
  };

  return (
    <header>
      <div className="logo">
        <h1>D</h1>ev
        <h1>L</h1>ink
       
        <h1>S</h1>tation
      </div>
     
      <nav className="filter-buttons">
        <button
          className={filter === "All" ? "active btn-all" : "btn-all"}
          onClick={handleFilter}>
          All
        </button>
        <button
          className={filter === "Tools" ? "active btn-tools" : "btn-tools"}
          onClick={handleFilter}>
          Tools
        </button>
        <button
          className={filter === "Design" ? "active btn-design" : "btn-design"}
          onClick={handleFilter}>
          Design
        </button>
        <button
          className={filter === "JavaScript" ? "active btn-js" : "btn-js"}
          onClick={handleFilter}>
          JavaScript
        </button>
        <button
          className={filter === "CSS" ? "active btn-css" : "btn-css"}
          onClick={handleFilter}>
          CSS
        </button>
        <button
          className={filter === "HTML" ? "active btn-html" : "btn-html"}
          onClick={handleFilter}>
          HTML
        </button>
      
      </nav>
    </header>
  );
};
export default Header;
