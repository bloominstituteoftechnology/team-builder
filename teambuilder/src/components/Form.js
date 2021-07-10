import React, {useState} from 'react';

export default (props)=>{
const [workerCard, setworkerCard] = useState({
    name: '',
    email: '',
    role: '',
})

const onChangeHandler=(e)=>{
setworkerCard({
    ...workerCard,
    [e.target.name]: e.target.value
})
}

// adding the new state to the main state in the app component
const onSubmitHandler=(e)=>{
    e.preventDefault()
    props.addEmployee(workerCard)
    setworkerCard({ name: '',
    email: '',
    role: ''})
}
   
   

    return (
        <div>
            <form onSubmit={(e)=>onSubmitHandler(e)}>
            <label htmlFor="name">name: </label>
            <input name="name" value={workerCard.name}
                   type="text" id="title" 
                   onChange={(e)=>onChangeHandler(e)}
            />
            
            <label htmlFor="role">role: </label>
            <input name="role" value={workerCard.role}
                   type="text" id="role" 
                   onChange={(e)=>onChangeHandler(e)}/>

            <label htmlFor="email">email: </label>
            <input name="email" value={workerCard.email}
                   type="text" id="email" 
                   onChange={(e)=>onChangeHandler(e)}/>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}