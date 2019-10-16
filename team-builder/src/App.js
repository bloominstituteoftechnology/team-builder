import React, { useState } from "react";
import "./App.css";

import MemberCards from "./components/MemberCards";
import MemberForm from "./components/MemberForm";

import { data } from "./data";

function App() {
  const [cards, setCards] = useState(data);

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
