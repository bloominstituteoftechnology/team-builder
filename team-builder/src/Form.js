import React, {useState}  from 'react';

export default function Form(props) {
    const defaultValues = {
        name: "",
        email: "",
        role: '',
      };
        
    const [formValues, setFormValues] = useState(defaultValues);
      
    const updateForm = (inputName, inputValue) => {
        setFormValues({
            ...formValues, [inputName]: inputValue
        })      
    };

    const onChange = (evt) => {
        const {name, value} = evt.target;
        updateForm(name, value)
        console.log(formValues) 
    };


    const onSubmit = (evt) => {
        evt.preventDefault();

    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">
                    Name: 
                    <input type="text" id= "formName" name= 'name' placeholder= 'Enter Name Here' value= {formValues.name} onChange= {onChange}/>
                </label>
                <label htmlFor="email">
                    Email: 
                    <input type="email" id= "formEmail" name= 'email' placeholder= 'Enter Email Here' value= {formValues.email} onChange= {onChange}/>
                </label>
                <label>
                    Role:  
                    <select name= 'role' id= 'formRole' value= {formValues.role} onChange= {onChange}>
                    <option value= ""/>
                    <option value= 'front'>Front-end Dev</option>
                    <option value= 'best'>Back-end Dev</option>
                    <option value= 'design'>Front-end Designer</option>
                    <option value= 'ds'>Data Scientist</option>
                    </select>
                </label>
                <button> Submit </button>
            </form>

        </div>
        )
}