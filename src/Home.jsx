import axios from "axios";
import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

function Home() {
  const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const [ pokemons, setPokemons ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(0);
  
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPokemons(response.data.results);
    });
  }, []);
  
  const filteredPokemons  = () => {
    return pokemons.slice(currentPage, currentPage + 10) ;
  }

  const nextPage = () => {
    return setCurrentPage(currentPage + 10)
  }

  const previousPage = () => {
    return setCurrentPage(currentPage - 10)
  }


  return (
    <div className="Home">
        <section className="Pokemons">
          {filteredPokemons().map((pokemon) => (
            <div className="pokemon" key={pokemon.index}>
              <Pokemon pokemonName={pokemon.name}></Pokemon>
            </div>
          ))}
        <div className="PaginationButtons">
            <button onClick={ previousPage }>Previous</button>
            <button onClick={ nextPage }>Next</button>
        </div>
        </section>
    </div>
  );
}

export default Home;
