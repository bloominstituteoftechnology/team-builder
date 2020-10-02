import React from 'react';
// import logo from '../logo.svg';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { fas  } from '@fortawesome/free-solid-svg-icons';
import { faCoffee  } from '@fortawesome/free-solid-svg-icons'

const coffe = <FontAwesomeIcon icon={faCoins} />;
const flap = <FontAwesomeIcon icon={faFlag} />;
const cof = <FontAwesomeIcon icon={faCoffee} />;

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <i  className="App-logo" alt="logo" >{coffe}{flap}</i>
        <i class="fas fa-coffee">{cof}</i>
        <p>
          Add <code>your Team Mates!</code> to the list!
        
        {coffe}
        </p>
        
      </header>
    </div>
  );
}

export default Header;