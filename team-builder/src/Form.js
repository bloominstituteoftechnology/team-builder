import React, {useState} from 'react';

const initialFormValues = {
    name:'1',
    email:'2',
    role:'3',
};



function Form () {
    // passed in initialFormValues to the useState so that my state variable would use it as the initial value
   const [formValues, setFormValues] = useState(initialFormValues);


    return
}

export default Form;