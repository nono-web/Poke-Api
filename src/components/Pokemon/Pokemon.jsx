import React, { useEffect, useState } from 'react';
import axios from'axios';
import './pokemon.css'

const Pokemon = () => {

    const [poke, setPoke] = useState([]);
    const [pokeid, setPokeid] = useState(1);

    const getPokeApi = (id) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => {
            console.log(response.data)
            setPoke(response.data)
            setPokeid(id)
        })
    }

    useEffect (() => {
        getPokeApi(pokeid)
    }, [pokeid])

  return (
    <div className="container">
        <p >Hello Trainer, you just captured {poke.name}</p>
        <p >The N° {poke.id} in the Pokedex </p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`} alt={poke.name} />
        < button id="button-prev" type="button" onClick={()=> getPokeApi(pokeid -1)}>Prev</button>
        < button id="button-next" type="button"onClick={()=> getPokeApi(pokeid +1)}>Next</button>
      
    </div>
  )
}

export default Pokemon
