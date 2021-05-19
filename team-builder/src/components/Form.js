  import React, {useState, useEffect} from 'react'

const Form = props => {

    const [formData, setFormData] = useState({
        name: '',
        role: '',
        email: '',
    })

    return (
        <div>
           <form>
            <label>
                Name
                <input />
            </label>
            <label>
                Roll
                <input />
            </label>
            <label>
                Email
                <input />
            </label>
           </form>
        </div>
    )
}

export default Form