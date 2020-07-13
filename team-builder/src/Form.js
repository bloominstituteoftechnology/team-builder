import React from 'react';

const Form = props => {
    const defaultState = {
    name: "",
    email: "",
    role: "",
};

const [newForm, setNewForm] = React.useState(defaultState);




export default Form;