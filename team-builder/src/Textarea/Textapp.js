import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import Sharedtextarea from "./Sharedtextarea";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <Sharedtextarea 
          handleChange={this.handleChange} 
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));