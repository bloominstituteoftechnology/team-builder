  import React, {useState, useEffect} from 'react'
  import axios from 'axios'

const Form = props => {

    const [formData, setFormData] = useState({
        name: '',
        role: '',
        email: '',
    })

    const onInputChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    
    const submitForm = () => {

        const newTeammate = {
            name: form.name.trim(),
            role: form.role,
            email: form.email.trim()
        }

        if(!newTeammate.name  || !newTeammate.role || !newTeammate.email ) {
            return;
        }

        axios.post("www.whatever.com", newTeammate)
        .then(res => {
            setTeammates(teammates.concat(res.data))  
            setForm(initial)
        })
        .catch(err => {
            console.log(err)
        });
    }


    return (
        <div>
           <form onSubmit={onSubmit}>
            <label>
                Name
                <input name='name' onChange={onInputChange} />
            </label>
            <br></br>
            <label>
                Role
                <input name='role' onChange={onInputChange}/>
            </label>
            <br></br>
            <label>
                Email
                <input name='email' onChange={onInputChange}/>
            </label>
            <br></br>
            <button>submit</button>
           </form>
        </div>
    )
}

export default Form