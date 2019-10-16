import React, { useState } from "react";
import "./App.css";

import MemberCards from "./components/MemberCards";
import MemberForm from "./components/MemberForm";

function App() {
  const [cards, setCards] = useState();

  const addNewCard = newCard => {
    setCards([...cards, newCard]);
  };
  return (
    <div className="App">
      <MemberForm addNewCard={addNewCard} />
      <MemberCards cards={cards} />
    </div>
  );
}

export default App;
