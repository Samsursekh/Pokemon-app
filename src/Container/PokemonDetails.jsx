import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  const { pokemonName } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await response.json();
      setPokemonData(data);
    }
    fetchData();
  }, [pokemonName]);

  if (pokemonData === null) {
    return <div>Loading...</div>;
  }

  const { name, id, abilities, moves, stats, types, weight, height } = pokemonData;
  const image = pokemonData.sprites.front_default;

  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <p>ID: {id}</p>
      <p>Base Experience: {pokemonData.base_experience}</p>
      <p>HP: {stats.find(stat => stat.stat.name === 'hp').base_stat}</p>
      <p>Attack Score: {stats.find(stat => stat.stat.name === 'attack').base_stat}</p>
      <p>Defense Score: {stats.find(stat => stat.stat.name === 'defense').base_stat}</p>
      <p>Special-Attack Score: {stats.find(stat => stat.stat.name === 'special-attack').base_stat}</p>
      <p>Special-Defence Score: {stats.find(stat => stat.stat.name === 'special-defense').base_stat}</p>
      <p>Speed: {stats.find(stat => stat.stat.name === 'speed').base_stat}</p>
      <p>Abilities: {abilities.map(ability => ability.ability.name).join(', ')}</p>
      <p>Moves: {moves.map(move => move.move.name).join(', ')}</p>
      <p>Weight: {weight}</p>
      <p>Height: {height}</p>
    </div>
  );
};

export default PokemonDetails;
