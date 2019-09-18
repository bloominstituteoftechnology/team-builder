import React, {useState} from 'react';
import App from './App'

const initialFormValues = {
    name:'1',
    age:'2',
    role:'3',
};



function Form () {
    // passed in initialFormValues to the useState so that my state variable would use it as the initial value
   const [formValues, setFormValues] = useState(initialFormValues);


     return (<form>
         <label htmlFor='nameinput'>Name</label>
         <input
         value={formValues.name}/>

         <label htmlFor='ageInput'>Age</label>
         <input
         value={formValues.age}/>

       <label htmlFor='roleInput'>Role</label>
         <input
         value={formValues.role}/>
     </form>
     )
}

export default Form;