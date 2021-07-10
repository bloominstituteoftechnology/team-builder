import React, {useState} from 'react';

export default (props)=>{
const [teamCard, setTeamCard] = useState({
    name: '',
    phone: '',
    email: '',
    
})

const onChangeHandler=(event)=>{
setTeamCard({
    ...teamCard,
    [event.target.name]: event.target.value
})
}

const onSubmitHandler=(event)=>{
    event.preventDefault()
    props.addTeamMember(teamCard)
    setTeamCard({ 
    name: '',
    email: '',
    phone: ''})
}



    return (
        <div>
            <form onSubmit={(event)=>onSubmitHandler(event)}>
            <label htmlFor="name">name: </label>
            <input name="name" value={teamCard.name}
                type="text" id="title" 
                onChange={(event)=>onChangeHandler(event)}
            />

            <label htmlFor="number">number: </label>
            <input name="number" value={teamCard.number}
                type="tel" id="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
                onChange={(event)=>onChangeHandler(event)}/>

            <label htmlFor="email">email: </label>
            <input name="email" value={teamCard.email}
                type="text" id="email" 
                onChange={(event)=>onChangeHandler(event)}/>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
} 