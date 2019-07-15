import React from "react";

const Form = props => {


  return (
    <form>
      <label>Name</label>
      <input type="text" placeholder="name" onChange={changeHandler} value={formState.name}/>
      <label>Age</label>
      <input type="number" onChange={changeHandler} value={formState.age}/>
      <label htmlFor="">Email</label>
      <input type="text" placeholder="email" onChange={changeHandler} value={formState.email}/>
      <label htmlFor="">Occupation</label>
      <input type="text" onChange={changeHandler} value={formState.occupation}/>
      <label htmlFor="">Favorite Food</label>
      <input type="text" onChange={changeHandler} value={formState.favFood}/>
    </form>
  );
};

export default Form;
