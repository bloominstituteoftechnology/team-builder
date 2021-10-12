import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import './styles.css'

const TeamList = ({ teamMembers, showNew }) => {
    const history = useHistory()
    const [teamList] = useState(teamMembers)
    const [showNewForm, setShowNewForm] = useState(showNew)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')

    const onChange = evt => {
      if (evt.target.name === 'name') {
        setName(evt.target.value)
      }
      if (evt.target.name === 'email') {
        setEmail(evt.target.value)
      }
      if (evt.target.name === 'role') {
        setRole(evt.target.value)
      }
    }

    const handleAddNew = () => {
        setShowNewForm(true)
        history.push('/new')
    }

    const handleReturn = () => {
        setShowNewForm(false)
        history.push('/')
    }

    const clearForm = () => {
        setName('')
        setEmail('')
        setRole('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const obj = {
            name: name,
            email: email,
            role: role
        }
        teamList.push(obj)
        setShowNewForm(false)
        clearForm()
    }
  
    return (
       showNewForm ?
       <form className='form container' onSubmit={handleSubmit}>
        <div className="leaderboard">
            <div className="header">
                <h1>Add New Member</h1>
                <button onClick={handleReturn}>Return</button>
            </div>
                <main className="leaderboard__profiles">
                <label className="leaderboard__name">New Member Information:
                </label>
                <input
                      className="leaderboard__profile"
                      type="text"
                      name="name"
                      value={name}
                      onChange={onChange}
                      maxLength="30"
                      placeholder="Name"
                      required
                    />
                    <input
                      className="leaderboard__profile"
                      type="text"
                      name="email"
                      value={email}
                      onChange={onChange}
                      maxLength="30"
                      placeholder="Email"
                      required
                    />
                    <input
                      className="leaderboard__profile"
                      type="text"
                      name="role"
                      value={role}
                      onChange={onChange}
                      maxLength="30"
                      placeholder="Role"
                      required
                    />
                    <input type="submit" value="Submit" />
                </main>
        </div>
      </form> :
       <div className="leaderboard">
       <div className="header">
           <h1>My Team</h1>
           <button onClick={handleAddNew}>Add New</button>
       </div>
       { teamList ?
           teamList.map(member => (
               <main className="leaderboard__profiles" key={member.name}>
                   <article className="leaderboard__profile">
                     <span className="leaderboard__name" >{member.name}</span>
                     <span className="leaderboard__other" >{member.role}</span>
                     <span className="leaderboard__other" >{member.email}</span>
                   </article>
               </main>
           )) : null
       }
        </div>
    )
}

export default TeamList