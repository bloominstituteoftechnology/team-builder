import React from "react";

import Member from "./Member";

const MemberCards = props => {
  const cards = props.cards;

  if (!cards) {
    return <div>Loading...</div>;
  }
  return cards.map((card, index) => <Member card={card} key={index} />);
};

export default MemberCards;
