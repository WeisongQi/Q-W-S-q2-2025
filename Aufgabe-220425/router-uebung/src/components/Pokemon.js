import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Pokemon() {
    const [pokemon, setPokemon] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const result = await res.json();
                setPokemon(result);
            } catch (error) {
                console.error('Error fetching Pokémon details:', error);
            }
        }

        fetchPokemon();
    }, [id]);

    if (!pokemon) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Height: {pokemon.height} m</p>
            <p>Weight: {pokemon.weight} kg</p>
            <h2>Abilities:</h2>
            <ul>
                {pokemon.abilities.map(ability => (
                    <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Pokemon