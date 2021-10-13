import React, {useState} from 'react'

const Form = (props) => {
    console.log(props);
    const [state, setState] = useState({
        name:"",
        password:"",
        email:""
    })


    const handleChange= (event) => { 
const {name,value} = event.target
setState ( {...state, [name]:value})
    }
const handleSubmit =(event) => { 
console.log(event);
event.preventDefault ()
props.listMaker(state)
}


    return (
        <div>
            {state.name}
            <form onSubmit= {handleSubmit}>
)
                <label htmlFor="name" >name</label>
                <input onChange={handleChange} value={state.name} id="name" type="text" name="name" />
                <br/>
                <label htmlFor="password">password</label>
                <input onChange={handleChange} value={state.password} id="password" type="password" name="password"/>
                <br/>
                <label htmlFor="e-mail">e-mail</label>
                <input onChange={handleChange} value={state.email} id="e-mail" type="email" name="email"/>
                <br/>
                <button>Submit here</button>
            </form>
        </div>
    )
}

export default Form
