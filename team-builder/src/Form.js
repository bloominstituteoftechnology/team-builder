import React, {useState} from 'react'


const initialFormValues = {
    username: "",
    email: "",
    role: "",
  };


  export default function Form(props) {
    const [formValues, setFormValues] = useState(initialFormValues); 

    const {members, setMembers} = props

    const onChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
    
      const onSubmit = (event) => {
        event.preventDefault();
        const newTeamMember = {
          username: formValues.username.trim(),
          email: formValues.email.trim(),
          role: formValues.role.trim(),
        };
        setMembers(members.concat(newTeamMember));
        setFormValues(initialFormValues);
      };


    return(
        <form onSubmit={onSubmit}>
            <label>
                <input
                    name="username"
                    type="text"
                    onChange={onChange}
                    value={formValues.username}
                    placeholder="Member Name" //<< initial text shown to User
                    maxLength="30" //<< max character limit
                />
                <br/>
                <input 
                    name="email"
                    type="text"
                    onChange={onChange}
                    value={formValues.email}
                    placeholder="Your Email Here!"
                    maxLength="100"
                />
                <br/>
                <input
                    name="role"
                    type="text"
                    onChange={onChange}
                    value={formValues.role}
                    placeholder="Your Role"
                    maxLength="30"
                />
                <br/>
                <button>Submit!</button>
            </label>
        </form>
     )
  }
