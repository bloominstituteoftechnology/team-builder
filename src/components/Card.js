import React from "react";
import './Card.css';

const Card = props => {
    return (
      <div className="card-container">
        {props.cards.map(card => (
          <div className="card" key={card.id}>
            <h2>{card.name}</h2>
            <p>email: {card.email}</p>
            <p>role: {card.role}</p>
          </div>
        ))}
      </div>
    );
  };
  
export default Card;