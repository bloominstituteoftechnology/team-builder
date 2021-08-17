import React from 'react'

export default function ListForm(props) {

   const { values, update, submit } = props

   const onChange = evt => {
       const name = evt.target.name;
       const value = evt.target.value;
       update(name, value);
   }


   return (
       <form className='form container' onSubmit={submit}>
           <div className="form-group inputs">
              
        </div>
       </form>
   )
}