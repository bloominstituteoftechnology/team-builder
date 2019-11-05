import React, { useState } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);

  const addNewCard = card => {
    const newCard = setCards([...cards, card]);
  }
  return (
    <div className="App">
      <Form addNewCard={addNewCard}/>
      <Card cards={cards}/>
    </div>
  );
}

export default App;
