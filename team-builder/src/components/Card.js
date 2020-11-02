import React from 'react'

function Card(props) {

  console.log(props);
  return (
    <div className="card__container">
      {props.cards.map(card => (
        <div className="card" key={card.id}>
          <h3>{card.name}</h3>
          <p><strong>Email: </strong>{card.email}</p>
          <p><strong>Role: </strong>{card.role}</p>
          <p><strong>Info: </strong>{card.info}</p>
        </div>
      ))}
    </div>
  )
}

export default Card
