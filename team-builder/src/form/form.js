import React, {useState} from 'react';




export default function Form()  {
    const [formValues, setFormValues] = useState({
        name:'',
        email:'',
        role:''
    });

    const [team, setTeam] = useState([]);
    const [error, setError]= useState(null);

    //submiting 
    const onSubmit = evt => {
        evt.preventDefault();
        let newMembers =[...team, {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            role: formValues.role
        }]
 
        if (!formValues.name || !formValues.email || !formValues.role){
            setError("PLEASE FILL EVERYTHING OUT. THANK YOU!");
            return;
        }
        console.log(team);
        setTeam(newMembers)
        setFormValues({name: '',email: '', role: ''}) 
        setError(null);  
    }
    //inputs 
return (
   <div> 
        <form onSubmit={onSubmit}>
            <label>
                Name
                <input
                type='text'
                name='name'
                value={formValues.name}
                // onChange={changeHandler}
                placeholder="Enter Your Name"
            />
            </label>
            <label>
                Email
                <input
                type='email'
                name='email'
                value={formValues.email}
                // onChange={changeHandler}
                placeholder="Enter Your Email"
                    />
            </label>
            <label>
                Role
                <select name='role' value={formValues.role}>
                    <option value=''>-- Select a Role --</option>
                    <option value='Front-End Engineer'>Front-End Engineer</option>
                    <option value='Back-End Engineer'>Back-End Engineer</option>
                    <option value='UX Designer'> UX Designer</option>
                    <option value='Full-Stack Engineer'>Full-Stack Engineer</option>
                </select>
            </label>
                
            <input type='submit' value='Build' />
        </form>
    </div>
    )
  
}


