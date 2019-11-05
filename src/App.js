import React, { useState } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Trey",
      email: "trey.mcgarity",
      role: "student"
    }
  ]);

  const addNewCard = card => {
    setCards([...cards, card]);
  }
  return (
    <div className="App">
      <h1>The Form</h1>
      <Form addNewCard={addNewCard}/>
      <Card cards={cards}/>
    </div>
  );
}

export default App;
