import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { desktop } from '../responsive';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerDesc = styled.div`
  background-color: #ffffffa9;
  border-radius: 2rem;
`;

const Desc = styled.p`
  margin: 1rem;
  color: #2503fdfd;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  ${desktop({ fontSize: '4rem' })}
`;

const Image = styled.img`
  width: 25rem;
  height: 22rem;
  margin: 1rem;
`;

const ContainerButton = styled.div`
  display: flex;

  align-items: center;
`;

const Button = styled.button`
  border: 0.1rem solid black;
  border-radius: 2rem;
  margin: 1rem;
  width: 8rem;
  height: 3rem;
  background-color: rgb(0, 195, 255);
  font-weight: bold;
  &:nth-child(1) {
    &:hover {
      background-color: rgb(252, 2, 2);
    }
  }
  &:nth-child(2) {
    &:hover {
      background-color: rgb(71, 255, 141);
    }
  }
`;

const Pokemon = () => {
  const [poke, setPoke] = useState([]);
  const [pokeid, setPokeid] = useState(1);

  const getPokeApi = async (id) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      console.log(response.data);
      setPoke(response.data);
      setPokeid(id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokeApi(pokeid);
  }, [pokeid]);

  return (
    <Container>
      <ContainerDesc>
        <Desc>Hello Trainer, you just captured {poke.name}</Desc>
        <Desc>The N° {poke.id} in the Pokedex </Desc>
      </ContainerDesc>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`}
        alt={poke.name}
      />
      <ContainerButton>
        <Button type="button" onClick={() => getPokeApi(pokeid - 1)}>
          Prev
        </Button>
        <Button type="button" onClick={() => getPokeApi(pokeid + 1)}>
          Next
        </Button>
      </ContainerButton>
    </Container>
  );
};

export default Pokemon;
