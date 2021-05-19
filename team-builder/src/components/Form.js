  import React, {useState, useEffect} from 'react'

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

    return (
        <div>
           <form>
            <label>
                Name
                <input name='name' onChange={onInputChange} />
            </label>
            <br></br>
            <label>
                Roll
                <input name='roll' onChange={onInputChange}/>
            </label>
            <br></br>
            <label>
                Email
                <input name='email' onChange={onInputChange}/>
            </label>
           </form>
        </div>
    )
}

export default Form