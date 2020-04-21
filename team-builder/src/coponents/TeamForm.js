import React from 'react'

export default function TeamForm(props) {
    const {addMember, changeHandle} = props
    
    return (
        <form>
            <label>
                <input  type='text' onChange={changeHandle}/>
            </label>

            
        </form>
    )
}
