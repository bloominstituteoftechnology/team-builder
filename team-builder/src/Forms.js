import React, { useState} from 'react';



export function Form() {



  return (
    <div className="App">
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="text" />
        </label>
        <label>
          Role:
          <input type="text" />
        </label>
        <label> 
        <button>Submit!</button>
        </label>
      </form>
    </div>
  );
}

export default Form;

