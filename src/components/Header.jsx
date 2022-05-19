import React from 'react';
import styled from 'styled-components';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import { desktop } from '../responsive';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${desktop({ flexDirection: 'row', justifyContent : 'space-around' })}
`;

const Image = styled.img`
  width: 20rem;
  padding: 1rem;
  ${desktop({ width:'25rem'})}
`;

const Header = () => {
  return (
    <Container>
      <Image src={team1} alt={team1} />
      <Image src={team2} alt={team2} />
      <Image src={team3} alt={team3} />
    </Container>
  );
};

export default Header;
