import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Forms from './Form';

function App() {
  const [member, setMember] = useState ({});
  return (
    <div className="App">
      <header className="App-header">
        < Forms />
        <button>Edit</button>
      </header>
    </div>
  );
}

export default App;
