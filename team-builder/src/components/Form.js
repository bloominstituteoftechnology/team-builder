  import React, {useState, useEffect} from 'react'
  import axios from 'axios'

const Form = props => {

    const [formData, setFormData] = useState({
        name: '',
        role: '',
        email: '',
    })
const [teammates, setTeammates] = useState([])

    const onInputChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    
    const submitForm = () => {

        const newTeammate = {
            name: formData.name.trim(),
            role: formData.role,
            email: formData.email.trim()
        }

        if(!newTeammate.name  || !newTeammate.role || !newTeammate.email ) {
            return;
        }

        axios.post("www.whatever.com", newTeammate)
        .then(res => {
            setTeammates(teammates.concat(res.data))  
            setFormData()
        })
        .catch(err => {
            console.log(err)
        });
    }

    useEffect(() => {
        axios.get("www.whatever.com")
        .then(res => {
            setTeammates(res.data)
            setFormData()
        })
        .catch(err => {
            console.log(err)
        })
        },[])

        const onSubmit = event => {
            event.preventDefault()
            submitForm()
            
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