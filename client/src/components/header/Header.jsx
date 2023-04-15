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
          className={filter === "All" ? "active" : "btn"}
          onClick={handleFilter}>
          All
        </button>
        <button
          className={filter === "Tools" ? "active" : "btn"}
          onClick={handleFilter}>
          Tools
        </button>
        <button
          className={filter === "Design" ? "active" : "btn"}
          onClick={handleFilter}>
          Design
        </button>
        <button
          className={filter === "Javascript" ? "active" : "btn"}
          onClick={handleFilter}>
          JavaScript
        </button>
        <button
          className={filter === "CSS" ? "active" : "btn"}
          onClick={handleFilter}>
          CSS
        </button>
        <button
          className={filter === "HTML" ? "active" : "btn"}
          onClick={handleFilter}>
          HTML
        </button>
      </nav>
    </header>
  );
};
export default Header;
