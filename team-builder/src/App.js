import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import {Route, Link, Switch} from 'react-router-dom';


function App(props) {
  const [member, setMember] = useState([]);

  // useEffect(() => {
  //   fetchMember().then((resMember) => setMember(resMember.data));
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Switch>
        <Route path={"/items-list/:itemID"}>
          <Item items={stock} />
        </Route>
        <Route path="/items-list">
          <ItemsList items={stock} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch> */}

        
      </header>
    </div>
  );
}

export default App;
