import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {render} from 'react-dom'

const teamList = [
  {name: 'mike', job:'sales'},
  {name: 'bob', job:'marketing'},
  {name: 'matt', job:'operations'},

]

const intialTeamValues = 
  {teamName:'', teamOccupation:''}

  function SimpleForm(){
    const [members, setMembers] =useState(teamList);
    const [formValues, setFormValues] = useState(intialTeamValues);
  
  const change = (e) => {
    console.log(e.target);
    console.log(formValues);
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  }

    const submit = (e) => {
      e.preventDefault();

      const newTeam = {
        name: formValues.name,
        job: formValues.job

      }
      console.log(newTeam)

      setMembers(members.concat(newTeam))

      setFormValues(intialTeamValues)
      
    }


    return(
      <div>
        {
          teamList.map((mem, i) =>{
            <div key= {i}>
              {mem.name} is in {mem.job}

            </div>
        
          })

        }

        <form onSubmit={submit}>
          <h1>name</h1>
          <input
          name='name'
          value={formValues.name}
          onChange={change}
          placeholder=' name'
          />
          
          <input
          name='job'
          value={formValues.job}
          onChange={change}
          placeholder=' job title'
          />

          <button>add new team member</button>


        </form>

      </div>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <SimpleForm/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
