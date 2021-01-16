import React from "react";
import Form from "./Form.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App container d-flex justify-content-center">
      <div className="form-card d-flex justify-content-center">
        <div className="player-trans">
          <h1>Poker Scout</h1>
          <h3>World's First Poker Friends Database</h3>
          <p>
            Use the information below to generate a friends profile listing of
            your BFF's
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
}
