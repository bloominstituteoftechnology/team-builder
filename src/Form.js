import React, {useState} from 'react'

export default function Form() {
    const [teamMember, setTeamMember] = useState({
        name: "",
        email: "",
        role: ""
    })
    const changeHandler = event => {
        setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
        console.log(event.target.value);
      };

    return (
        <div>
            <form>
                <label htmlFor="title">Name </label>
                    <input 
                         name="Name"
                         id="Name"
                         type="text"
                         placeholder="Name"
                         onChange={changeHandler}
                         value={teamMember.name}
                    />
                     <br />

                <label htmlFor="email">email </label>
                    <input 
                         name="email"
                         id="email"
                         type="text"
                         placeholder="email"
                         onChange={changeHandler}
                         value={teamMember.email}
                    />
                    <br />

                <label htmlFor="trole">role </label>
                    <input 
                         name="role"
                         id="role"
                         type="text"
                         placeholder="role"
                         onChange={changeHandler}
                         value={teamMember.role}
                    />
                     <br />
            </form>
        </div>
    )
};
