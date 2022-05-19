import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { desktop } from '../responsive';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Desc = styled.p`
  margin: 1rem;
  color: red;
  font-weight: bold;
  font-size: 2rem;
  text-shadow: 4px 4px 2px rgb(243, 169, 8);
  text-align: center;
  ${desktop({ fontSize: '4rem' })}
`;

const Image = styled.img`
  width: 20rem;
  height: 16rem;
  margin: 1rem;
`;

const Button = styled.button`
  border: 0.1rem solid black;
  border-radius: 2rem;
  margin: 1rem;
  width: 5rem;
  height: 2rem;
  background-color: rgb(0, 195, 255);
  font-weight: bold;
  &:nth-child(1) {
    &:hover {
      background-color: rgba(71, 255, 141, 0.452);
    }
  }
  &:nth-child(2) {
    &:hover {
      background-color: rgba(255, 99, 71, 0.452);
    }
  }
`;

const Pokemon = () => {
  const [poke, setPoke] = useState([]);
  const [pokeid, setPokeid] = useState(1);

  const getPokeApi = (id) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      console.log(response.data);
      setPoke(response.data);
      setPokeid(id);
    });
  };

  useEffect(() => {
    getPokeApi(pokeid);
  }, [pokeid]);

  return (
    <Container>
      <Desc>Hello Trainer, you just captured {poke.name}</Desc>
      <Desc>The N° {poke.id} in the Pokedex </Desc>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`}
        alt={poke.name}
      />
      <Button
        id="button-prev"
        type="button"
        onClick={() => getPokeApi(pokeid - 1)}
      >
        Prev
      </Button>
      <Button
        id="button-next"
        type="button"
        onClick={() => getPokeApi(pokeid + 1)}
      >
        Next
      </Button>
    </Container>
  );
};

export default Pokemon;
