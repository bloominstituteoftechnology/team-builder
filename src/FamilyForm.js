const FamilyMember= (props) => {
    const {value, update, submit} = props

    const onChange = (evt) =>{
        const name = evt.target.name;
        const value = evt.target.value;
        // const age = evt.target.age;
        // const location = evt.target.location;
        // const relationship= evt.target.location;
        update(name, value)
        // console.log(evt.target.name, evt.target.value)
    }

    const onSubmit= evt => {
        evt.preventDefault()
        submit();
    }



    return (
            <form className="form container" onSubmit={onSubmit}> 
                <div className="form inputs">
                    <label>Name
                        <input
                        name= "name"
                        type= "text"
                        value= {value.name}
                        onChange={onChange}
                        placeholder= "name"
                        />
                    </label>

                    <label>Age
                        <input 
                        name= "age"
                        type= "text"
                        value= {value.age}
                        onChange={onChange}
                        placeholder= "age"      
                        />
                    </label>

                    <label>Location
                        <input 
                        name= "location"
                        type= "text"
                        value= {value.location}
                        onChange={onChange}
                        placeholder="location"
                        />
                    </label>

                    <label> Relationship
                        <select value = {value.relationship} name= "relationship" onChange={onChange} >
                            <option value= "">--Select--</option>
                            <option value= "self"> Self </option>
                            <option value= "wife"> Wife </option>
                            <option value= "son" > Son </option>
                            <option value= "daughter"> Daughter </option>
                            <option value= "sister">Sister</option>
                            <option value= "brother">Brother</option>
                            <option value= "mother">Mother</option>
                            <option value= "father"> Father</option>
                        </select>
                    </label>
                    <input type= "submit" value= "Add a Family Member"/>
                </div>



            </form>

    )
}

export default FamilyMember