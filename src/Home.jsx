/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import React, { useState, useEffect } from "react";
import Pokemon from "./components/Pokemon";
import { PokemonConsumer, PokemonInfo, PokemonProvider } from "./context/poke-info-context";

export default () => <PokemonProvider>
  <PokemonConsumer/>
  <Home />
</PokemonProvider>

function Home() {
  const input = PokemonInfo();
  const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const [pokemons, setPokemons] = useState([]);
  const [newArray, setNewArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageTwo, setCurrentPageTwo] = useState(10);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPokemons(response.data.results);
    });
  }, []);

  useEffect(() => {
    setNewArray([]);
    if (pokemons.length > 0) {
      var elements = pokemons.slice(currentPage, currentPageTwo);
      elements.filter((item) => {
        if (
          item.name
            .toString()
            .toLowerCase()
            .includes(input.pokemon.toLowerCase())
        ) {
          setNewArray((current) => [...current, item]);
        }
      });
    }
  }, [input]);

  useEffect(() => {
    var elements = pokemons.slice(currentPage, currentPageTwo);
    setNewArray(elements);
  }, [currentPage]);

  useEffect(() => {
    if (pokemons.length === 1126) {
      var elements = pokemons.slice(currentPage, currentPageTwo);
      setNewArray(elements);
    }
  }, [pokemons]);

  const nextPage = () => {
    setCurrentPage(currentPage + 10);
    setCurrentPageTwo(currentPageTwo + 10);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 10);
    setCurrentPageTwo(currentPageTwo - 10);
  };

  return (
    <div className="Home">
      <section className="Pokemons">
      {newArray.length > 0 ? newArray.map((item, index) => (
            <div className="pokemon" key={index}>
              <Pokemon pokemonName={item.name}></Pokemon>
            </div>
          )): (
            <div className="container-pokemon-null">
              <h1>Continue navegando</h1>
            </div>
          )}
        <div className="PaginationButtons">
          <button onClick={previousPage}>Previous</button>
          <button onClick={nextPage}>Next</button>
        </div>
      </section>
    </div>
  );
}