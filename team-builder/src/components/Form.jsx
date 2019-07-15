import React, {useState} from 'react';

const Form = () => {
    return (
        <form>
            <label>Name</label>
            <input type="text" placeholder="name"/>
            <label>Age</label>
            <input type="number" />
            <label htmlFor="">Email</label>
            <input type="text" placeholder="email"/>
            <label htmlFor="">Occupation</label>
            <input type="text"/>
            <label htmlFor="">Favorite Food</label>
            <input type="text" />
        </form>
    );
};

export default Form;