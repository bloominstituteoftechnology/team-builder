// ❗ IMPORTANT
// The ✨ tasks found inside this component are not in order.
// Check the README for the appropriate sequence to follow.
import React, { useState, useEffect } from 'react'

let id = 0
const getId = () => ++id

let teamMembers = [
  {
    id: getId(), fname: "Alice", lname: "Smith",
    bio: "Passionate about front-end development and user experience. \
I love creating intuitive and visually appealing web interfaces."
  },
  {
    id: getId(), fname: "Bob", lname: "Johnson",
    bio: "Aspiring web developer with a background in graphic design. \
I enjoy bringing creativity and aesthetics to the digital world."
  },
]

const addedValue = () => ({
  fname: '',
  lname: '',
  bio: '',
})

export default function App() {
  const [members, setMembers] = useState(teamMembers)
  const [editing, setEditing] = useState(null)
  // ✨ Create a third state to track the values of the inputs
  const [values, setValues] = useState(addedValue())

  useEffect(() => {
    // ✨ If the `editing` state changes from null to the number 2 (for example)
    // this means we need to populate the inputs of the form
    // with the data belonging to the member with id 2.
    // On the other hand, if the `editing` state changes back to null
    // then we need to reset the form back to empty values
    if (editing == null) {
      setValues(addedValue())
    } else {
      const { fname, lname, bio } = members.find(mem => mem.id == editing)
      setValues({ fname, lname, bio })
    }
  }, [editing])

  const onChange = evt => {
    // ✨ This is the change handler for your text inputs and your textarea.
    // You can check `evt.target.id` to know which input changed
    // and then you can use `evt.target.value` to update the state of the form
    const { id, value } = evt.target
    setValues(prevValues => ({ ...prevValues, [id]: value }))
  }
  const edit = id => {
    // ✨ Put this function inside a click handler for the <button>Edit</button>.
    // It should change the value of `editing` state to be the id of the member
    // whose Edit button was clicked
    setEditing(id)
  }
  const submitNewMember = () => {
    // This takes the values of the form and constructs a new member object,
    // which is then concatenated at the end of the `members` state
    const { fname, lname , bio } = values
    const newTeammember = { fname, lname, bio, id: getId() }
    setMembers([...members, newTeammember])
  }
  const editExistingMember = () => {
    // ✨ This takes the values of the form and replaces the data of the
    // member in the `members` state whose id matches the `editing` state
    setMembers(existingmember => existingmember.map(mem => {
      if (mem.id == editing) {
        return {...mem, ...values}
      }
      return mem
    }))
    setEditing(null)
  }
  const onSubmit = evt => {
    // ✨ This is the submit handler for your form element.
    // It will call either `submitNewMember` or `editExistingMember`
    // depending on whether the `editing` state is null or has an id in it.
    // Don't allow the page to reload! Prevent the default behavior
    // and clean up the form after submitting
    evt.preventDefault()
    if (editing) {
      editExistingMember()
    } else {
      submitNewMember()
    }
    setValues(addedValue())
  }
  return (
    <div>{/* ✨ Fix the JSX by wiring the necessary values and event handlers */}
      <div id="membersList">
        <h2>Team Members</h2>
        <div>
          {
            members.map(mem => (
              <div key={mem.id} className="member">
                <div>
                  <h4>{mem.fname} {mem.lname}</h4>
                  <p>{mem.bio}</p>
                </div>
                <button onClick={evt => edit(mem.id)}>Edit</button>
              </div>
            ))
          }
        </div>
      </div>
      <div id="membersForm">
        <h2>{editing ? 'Edit' : 'Add'} a Team Member</h2>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="fname">First Name </label>
            <input onChange={onChange} values={values.fname} id="fname" type="text" placeholder="Type First Name" />
          </div>

          <div>
            <label htmlFor="lname">Last Name </label>
            <input onChange={onChange} values={values.lname} id="lname" type="text" placeholder="Type Last Name" />
          </div>

          <div>
            <label htmlFor="bio">Bio </label>
            <textarea onChange={onChange} values={values.bio} id="bio" placeholder="Type Bio" />
          </div>

          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  )
}
