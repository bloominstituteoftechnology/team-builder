import React from 'react'
import styled from 'styled-components'

export default function TeamForm(props) {
    const {addMember, changeHandle,newMember,checked} = props

    const Form = styled.form `
    display:flex;
    flex-direction:column;
    position:fixed;
    background:dodgerblue;
    color:white;


    `
    
    return (
        <Form>
            <label>
                First Name
                <br/>
                <input value={newMember.fname} name='fname' type='text' onChange={changeHandle}/>
            </label>

            <label>
                last Name
                <br/>
                <input value={newMember.lname} name='lname' type='text' onChange={changeHandle}/>
            </label>

            <label>
                Position
                <br/>
                <input value={newMember.position} name='position' type='text' onChange={changeHandle}/>
            </label>

            <label>
                Status
                <br/>
                <select name='status' value={newMember.status} onChange={changeHandle}>
                    <option name='active'>Active</option>
                    <option name='inactive'>Inactive</option>

                    
                </select>
            </label>

            
                
               <label>
                   Injury
                    <input value={newMember.tang.injury} type='checkbox' name='injury' onChange={checked}/>
               </label>

               <label>
                   Stable
                    <input value={newMember.tang.stable} type='checkbox' name='stable' onChange={checked}/>
               </label>

               <label>
                   Ready
                    <input value={newMember.tang.ready} type='checkbox' name='ready' onChange={checked}/>
               </label>
            

            <button onClick={addMember}>submit now</button>

            
        </Form>
    )
}
