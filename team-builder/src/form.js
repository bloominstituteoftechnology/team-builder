import React, { useState } from "react"

const MemberForm = props => {

const [member, setMember] = useState({name:""})

    const handleChanges = e => {
        console.log(e)
        console.log(e.target.value)
        setMember({name: e.target.value})
    }

  return (
      <form>
          <label htmlFor="name">Name</label>
          <input 
          id="name" 
          type="text" 
          placeholder="Enter name" 
          onChange={handleChanges}
          />
      </form>
  )
}

export default MemberForm

