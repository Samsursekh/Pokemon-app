import React from "react";
import "../Style/Navbar.css";
import { useState, useEffect } from "react";
import PokemonDetails from "./PokemonDetails";
const pageSize = 10;

const PokemonPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${
        (currentPage - 1) * pageSize
      }`
    );
    const data = await response.json();
    setData(data.results);
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const updatePagination = () => {
    const pageCount = Math.ceil(50 / pageSize);
    const buttons = [];
    for (let i = 1; i <= pageCount; i++) {
      const button = (
        <button
          className="paginationBtn"
          key={i}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
      buttons.push(button);
    }
    return buttons;
  };

  const handleDetails = () => {
    console.log("Clicked");
    // setData( <PokemonDetails />)
   
  }
//   <PokemonDetails />
  return (
    <div id="container">
      {data.map((item) => {
        return (
          <div onClick={handleDetails} className="cards" key={item.name}>
            {item.name}
          </div>
        );
      })}
      <div className="pagination">{updatePagination()}</div>
    </div>
  );
};

export default PokemonPage;
