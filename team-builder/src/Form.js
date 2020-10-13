import React from 'react'
//hi
export default function Form(props){
const {teammates, formData, change, submit} = props;


    return(
        <form onSubmit={submit}>
            <label>
              Name:
            <input 
            name="name"
            onChange={change}
            value={teammates.name}
            placeholder="Enter name"
            id="nameInput"
            type="text"
            
            />
            </label>
            <label>
              Email:
            <input
            name="email"
            onChange={change}
            value={teammates.email}
            placeholder="Enter email"
            id="emailInput"
            type="text"
            />
            </label>
            <label>
              Age:
            <select
            name="age"
            onChange={change}
            value={teammates.age}
            id="ageInput"
            >
              <option>===Select Age===</option>
              <option value="69">69</option>
              <option value="420">420</option>
              <option value="42">42</option>
              <option value="710">710</option>
              <option value="21">21</option>
              </select>
            </label>
            <button>Save</button>
        </form>
    )
}