import React from 'react';
import './header.css'
import team1 from '../../assets/team1.jpg';
import team2 from '../../assets/team2.jpg';
import team3 from '../../assets/team3.jpg';

const Header = () => {
  return (
    <div className="h-pokemon">
        <img className="h-img" src={team1} alt={team1} />
        <img className="h-img" src={team2} alt={team2} />
        <img className="h-img" src={team3} alt={team3} />
    </div>
  )
}

export default Header
