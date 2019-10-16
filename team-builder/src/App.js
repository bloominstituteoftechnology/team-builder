import React, { useState } from "react";
import "./App.css";

import MemberCards from "./components/MemberCards";
import MemberForm from "./components/MemberForm";

function App() {
  const [cards, setCards] = useState();

  const addCard = newCard => {
    setCards([...cards, newCard]);
  };
  return (
    <div className="App">
      <MemberForm addCard={addCard} />
      <MemberCards cards={cards} />
    </div>
  );
}

export default App;
