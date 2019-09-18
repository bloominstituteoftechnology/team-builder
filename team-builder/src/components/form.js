import React from 'react'


function Form(){


     return(
          <form>
               <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text"/>
               </div>

               <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email"/>
               </div>

               <div>
                    <p>Role:</p>
                    <label htmlFor="role">Role:</label>
                    <select>
                         <option>Android Development</option>
                         <option>Data Science</option>
                         <option>Full Stack Web</option>
                         <option>iOS Development</option>
                         <option>UX Design</option>
                    </select>
               </div>

          </form>    
     )
}

export default Form;

