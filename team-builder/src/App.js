import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App container d-flex justify-content-center">
      <div className="form-card d-flex justify-content-center">
        <h1>Poker Scout</h1>
        <h3>World's First Poker Player Database</h3>
        <p>
          Use the information below to generate a player profile listing of your
          toughest opponents
        </p>

        <form>
          <label htmlFor="fnameInput">First Name: </label>
          <input
            maxLength="15"
            placeholder="First Name"
            id="fnameinput"
            name="fname"
            type="text"
          />
          <br />
          <label htmlFor="lnameInput">Last Name: </label>
          <input
            maxLength="15"
            placeholder="Last Name"
            id="lnameinput"
            name="lname"
            type="text"
          />
          <br />

          <label htmlFor="lhandleInput">User Name: </label>
          <input
            maxLength="15"
            placeholder="User Name"
            id="lhandleinput"
            name="handle"
            type="text"
          />
          <br />

          <label htmlFor="faveGameSelect">Favorite Game: </label>
          <select
            id="faveGameSelect"
            name="faveGame"
            style={{ margin: "2rem" }}
          >
            <option>Choose one</option>
            <option>--</option>
            <option value="1">Texas Hold'em</option>
            <option value="2">Omaha Hi</option>
            <option value="3">Omaha Hi-Lo</option>
            <option value="4">7-Card Stud</option>
            <option value="5">5-Card Draw</option>
            <option value="6">5-Card Omaha</option>
            <option value="7">Bagudi</option>
          </select>
          <br />
          <label htmlFor="isBluffingInput">Check if win by bluff </label>
          <input type="checkbox" id="isBluffingInput" name="is bluffing" />
          <br />
          <input type="submit" style={{ margin: "2rem" }} />
        </form>
      </div>
    </div>
  );
}
