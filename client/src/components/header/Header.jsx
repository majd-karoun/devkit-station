import "./header.css";
import React, { useState } from "react";
import axios from "axios";

const Header = ({ setLinks }) => {
  const [filter, setFilter] = useState("All");

  const handleFilter = (e) => {
    if (e.target.innerText != "All") {
      setFilter(e.target.innerText);
      axios
        .get(`http://localhost:5000/resources/type/${e.target.innerText}`)
        .then((Response) => {
          setLinks(Response.data);
        });
    }else{
        const response = axios.get('http://localhost:5000/resources').then((response) => {

            setLinks(response.data);
        })
    }
  };

  return (
    <header>
      <h1 className="logo">DevLinks Station</h1>
      <nav className="filter-buttons">
        <button
          className={filter === "All" ? "active btn-all" : "btn-all"}
          onClick={handleFilter}>
          All
        </button>
        <button
          className={filter === "Tools " ? "active btn-tools" : "btn-tools"}
          onClick={handleFilter}>
          Tools
        </button>
        <button
          className={filter === "Design" ? "active btn-design" : "btn-design"}
          onClick={handleFilter}>
          Design
        </button>
        <button
          className={filter === "Javascript" ? "active btn-js" : "btn-js"}
          onClick={handleFilter}>
          JavaScript
        </button>
        <button
          className={filter === "CSS" ? "active" : "btn-css"}
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
