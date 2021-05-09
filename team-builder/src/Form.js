import React from 'react'

const Form = props => {


    return(
        <form>
          <label htmlfor="name">Name: </label>
          <input type="text" id="name" placeholder="your name" /> <br/>

          <label htmlfor="email">Email: </label> 
          <input type="email" id="email" placeholder="your email" /> <br/>
          
          <label htmlfor="role">Role: </label>
          <input type="text" id="role" placeholder="your role" />     
        </form>
    )
}
export default Form;