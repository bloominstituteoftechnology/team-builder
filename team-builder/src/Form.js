import React from "react";
import Turtle from './Turtle'
export default function Form(props){
 // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
 const  {values, update, submit, errorText}  = props

 const onChange = evt => {
  
   const name = evt.target.name;
 
   const value = evt.target.value;

   update(name, value);
 }

 const onSubmit = evt => {
   
   evt.preventDefault();
   // c) use the `submit` callback coming in through props
   submit();
 }

 return (
   <form className='form container' onSubmit={onSubmit}>
     <h2 className="error">{errorText}</h2>
     <div className='form-group inputs'>
       {/* ////////// TEXT INPUTS ////////// */}
       {/* ////////// TEXT INPUTS ////////// */}
       {/* ////////// TEXT INPUTS ////////// */}
       <label>Name
         {/* 🔥 STEP 3 - Make an input of type `text` for username.
             Controlled inputs need `value` and `onChange` props.
             Inputs render what they're told - their current value comes from app state.
             At each keystroke, a change handler fires to change app state. */}
         <input
           type="text"
           name="NAME"
           value={values.name}
           onChange={onChange}
           maxLength="30"
           placeholder="Enter NAME"
         />
       </label>

       <label>Email
         {/* 🔥 STEP 4 - Make an input of type `email` or `text` for email. */}
         <input
           type="email"
           name="email"
           value={values.email}
           onChange={onChange}
           placeholder="Enter an email ya chump"
         />
       </label>

       {/* ////////// DROPDOWN ////////// */}
       {/* ////////// DROPDOWN ////////// */}
       {/* ////////// DROPDOWN ////////// */}
       <label>Role
         {/* 🔥 STEP 5 - Make dropdown for role. */}
         <select value={values.role} name="role" onChange={onChange}>
           <option value="">-- Select a role --</option>
           <option value="Leader">Leader</option>
           <option value="Weapons">Weapons</option>
           <option value="Genius">Instructor</option>
           <option value="Chef">Chef</option>
         </select>
       </label>
       <div className='submit'>
         <button>submit</button>
       </div>
     </div>
   </form>
 )
}