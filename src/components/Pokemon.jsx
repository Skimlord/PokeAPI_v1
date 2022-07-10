/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useState, useEffect } from "react";
import PokemonType from "./PokemonType";

const Pokemon = (props) => {
  const pokemonName = props.pokemonName;
  const pokemonData = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonArtWork, setPokemonArtWork] = useState("");

  useEffect(() => {
    axios.get(pokemonData).then((response) => {
      setPokemonTypes(response.data.types);
      setPokemonArtWork(response.data.sprites.other.home.front_default);
    });
  }, [props]);

  // useEffect(() => {
  //   console.log(pokemonName);
  // }, [pokemonName]);

  return (
    <div>
      <div className="pokemon-img">
        <img src={pokemonArtWork} alt="" />
      </div>
      <p>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</p>
      <div className="pokemon-types-container">
        {pokemonTypes.map((slot, index) => (
          <PokemonType
            key={index}
            pokemonType={slot.type.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
