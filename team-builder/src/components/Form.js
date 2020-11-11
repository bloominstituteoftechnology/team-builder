import React, {useState} from 'react'


function Form(props) {

    const {member , setMember} = props;

    console.log(member , 'inside form')

    // const [memeber, setMemeber] = useState({
    //     memberName: '',
    //     memberEmail: '',
    //     memeberRole: ''
    //   });

    



    // const handleChange = e => {
    //     setMemeber({
    //         ...memeber,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const handelSubmit = e => {
    //     e.preventDefault();
    //     console.log(memeber)
    // }


    return (
        <div>
            <h1>hello</h1>
            
        </div>
    //     <form onSubmit={handelSubmit} >
    //         <label>
    //             Name: 
    //             <input type='text' onChange={e => handleChange(e)} name='memberName'/>
    //         </label>

    //         <label>
    //             Email:
    //             <input type='email' onChange={e => handleChange(e)} name='memberEmail'/>
    //         </label>

    //         <label>
    //             role:
    //             <select name="memeberRole" onChange={e => handleChange(e)}>
    //                 debugger
    //                 <option value="front-end">Front-End</option>
    //                 <option >Back-End</option>
    //                 <option >Full-stack</option>
    //             </select>
    //         </label>

    //         <button>Submit</button>
    //   </form>

    )
}

export default Form
