<<<<<<< HEAD
import React, {useState} from 'react';
import './App.css';
import Employees from './components/Employees';
import EmployeeForm from './components/Form';

function App() {
  const [formData, setFormData] = useState({
    fname:'',
    lname:'',
    email:'',
    role:''
  });

  const onInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.vaule
    });
  };

  return (

    <div>
      <EmployeeForm formData={formData} setFormData={setFormData}/>
      <Employees formData={formData}/>
    </div>

//     <div className="App">
//       <header className="App-header">
//         <div>
//           <form>
//             <div>
//               <label>
//                 First Name:
//                 <input name='fname' onChange={onInputChange}/>
//               </label>
//             </div>
//             <div>
//               <label>
//                 Last Name:
//                 <input name='lname' onChange={onInputChange}/>
//               </label> 
//             </div>
//             <div>
//               <label>
//                 Email:
//                 <input name='lname' onChange={onInputChange}/>
//               </label> 
//             </div>
//             <div>
//               <label>
//                 Role:
//                 <input name='email' onChange={onInputChange}/>
//               </label>
//             </div>
//             <div>
//               <label>
//                 <input type='Submit'/>
//               </label> 
//             </div> 
//           </form>
//         </div>
//       </header>
//     </div>
   );
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
      </header>
    </div>
  );
>>>>>>> 052372febd9e97a807f24bc1685daa31f72fb974
}

export default App;
