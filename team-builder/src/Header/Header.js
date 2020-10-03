import React from 'react';
// import logo from '../logo.svg';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaseballBall } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { faShoePrints  } from '@fortawesome/free-solid-svg-icons';
import { faBasketballBall  } from '@fortawesome/free-solid-svg-icons'
import cardinalsjpg from '../assets/cardinals.jpg';
import cardinalsjpg1 from '../assets/cardinals.png';
import cardinalsjpg2 from '../assets/cardinal.jpeg';
const coffe = <FontAwesomeIcon icon={faBaseballBall} />;
const flap = <FontAwesomeIcon icon={faFlag} />;
const cof = <FontAwesomeIcon icon={faBasketballBall} />;
const shoeprint = <FontAwesomeIcon icon={faShoePrints} />;
function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img class='backgrdImg' src ={cardinalsjpg} />
        <img class='backgrdImg' src ={cardinalsjpg2} />
        <i  className="App-logo" alt="logo" >{coffe}{flap}</i>
        <i class="fas fa-coffee">{shoeprint}{cof}</i>
        <p>
          Add <code>++ your Team Mates</code> to the list!
        
        {coffe}
        </p>
        
      </header>
    </div>
  );
}

export default Header;