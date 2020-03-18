import React, { usestate } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("");

  const handleChange = event => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      {console.log(name)}
      <form>
        <label>
          Username:
          <input type="text" onChange={event => handleChange(event)} />
        </label>
      </form>
    </div>
  );
}

export default App;
