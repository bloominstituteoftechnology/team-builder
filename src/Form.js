import React from "react";




export default function Form(props) {
const {formValue,updateForm,submit} = props;

const onChange = (evt) => {
const {name} = evt.target
const {value} = evt.target

 updateForm(name, value);
};
const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
 return(
    <form className="form-container" onSubmit={onSubmit}>
      <div className='form-group inputs'>
       <label> Name: </label>
        <input 
         type="text"
         value={formValue.name}
         name="name"
         onChange={onChange}
         maxLength="30"
         placeholder="Put your User Name here"
         />
       
       <label> Email: </label>
       <input
           type="email"
            name="email"
           value={formValue.email}
          maxLength="60"
           placeholder="Put in your email"
           onChange={onChange}
                    />
                
                <label> role:Choose a position </label>
                 <select value={formValue.Role} name="role" onChange={onChange}>
            <option value="">--Select a role--</option>
            <option value="worker">worker</option>
            <option value="supervisor">Supervisor</option>
            <option value="Manager">Manager</option>
            <option value="Electrical_Engineer">Electrical Engineer</option>
            <option value="SoftWare_Engineer">softWare Engineer</option>
            </select>
            
            <div className = "submit-button">
            <button>Submit</button>  
            </div>   
            </div>
     </form>
 );
}








