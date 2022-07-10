import React, { useContext, useEffect } from "react";
import { useState } from "react";

const Context = React.createContext({
    pokemon: "",
    setPokemon: () => {}, 
});

export function PokemonProvider(props) {
    const [pokemon, setPokemon] = useState("Hola");
    const data = React.useMemo(() => ({
        pokemon, setPokemon
    }), [pokemon]);

    return (
        <Context.Provider value={data} {...props} />
    )
}

export function PokemonConsumer() {
    const { pokemon, setPokemon } = useContext(Context);
    return(  
        <div className="container-pokemon-null" style={{width: 'auto', paddingRight: '60px'}}>
            <input placeholder="Busqueda..." type="text" onChange={(e) => setPokemon(e.target.value)}/>        
        </div>               
    )
}

export function PokemonInfo() {
    const datos = useContext(Context);
    return datos;
}