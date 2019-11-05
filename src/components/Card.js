import React from "react";

const Card = props => {
    return (
      <div className="card-container">
        {props.cards.map(card => (
          <div className="card" key={card.id}>
            <h2>{card.title}</h2>
            <p>{card.body}</p>
          </div>
        ))}
      </div>
    );
  };
  
export default Card;