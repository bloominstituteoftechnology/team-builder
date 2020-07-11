import React, {useState} from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    fname:'',
    lname:'',
    email:''
  });

  const onInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.vaule
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <form>
            <div>
              <label>
                First Name:
                <input name='fname' onChange={onInputChange}/>
              </label>
            </div>
            <div>
              <label>
                Last Name:
                <input name='lname' onChange={onInputChange}/>
              </label> 
            </div>
            <div>
              <label>
                Email:
                <input name='lname' onChange={onInputChange}/>
              </label> 
            </div>
            <div>
              <label>
                Role:
                <input name='email' onChange={onInputChange}/>
              </label>
            </div>
            <div>
              <label>
                <input type='Submit'/>
              </label> 
            </div>
            <div>
              <label>
                Email:
                <input name='lname' onChange={onInputChange}/>
              </label> 
            </div>
            <div>
              
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
