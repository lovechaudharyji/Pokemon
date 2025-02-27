import { useEffect, useState } from "react";
import { PokemonCards } from "./PokemonCards";
import "./index.css";


export const Pokemon = () => {
    const [pokemon, SetPokemon] = useState([]);
    const [loading, SetLoading] = useState (true);
    const [error, SetError] = useState(null);
    const [search, Setsearch] = useState("");

    const API = "https://pokeapi.co/api/v2/pokemon?limit=500";

    const fetchPokemon = async () => {

        try {

            const res = await fetch(API);
            const data =await res.json();
            console.log (data);

            const detailedPokemonData = data.results.map( async (curPokemon) => {
                const res = await fetch(curPokemon.url);
                const data = await res.json();
                return data;

            });

        

            const detailedResponses = await Promise.all(detailedPokemonData);
            console.log(detailedResponses);
            SetPokemon(detailedResponses);
            SetLoading(false);

        } catch(error) {
            console.log(error);
            SetLoading(false);
            SetError(error);

        }
    };

    useEffect (() => {
        fetchPokemon();
    },[]);

    const searchData = pokemon.filter((curPokemon) => curPokemon.name.toLowerCase().includes(search.toLowerCase())
   );


    if (loading) {
        return (
         <div>
            <h1>loading...</h1>
         </div>
        );
    }

    if (error) {
        return (
         <div>
            <h1>{error.message}</h1>
         </div>
        );
    }


    return (
        <>
      <section className="container">
        <header>
            <h1>lets catch pokemon</h1>
        </header>
        <div className="pokemon-search">
            <input type="text" placeholder="search Pokemon" value={search} onChange={(e) => Setsearch(e.target.value)}/>

        </div>
        <div>
            <ul className="cards">
                {
                    searchData.map((curPokemon) => {
                        return ( <PokemonCards key={curPokemon.id} pokemonData={curPokemon}/>
                        );
                    })}
            </ul>
        </div>
      </section>
      </>
    );
};