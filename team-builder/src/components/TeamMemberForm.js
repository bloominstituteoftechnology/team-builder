import React from 'react'


export default function TeamMemberForm(props) {
    const { values, update, submit } = props; 
  

    const onChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value); //referencing the update function in App.js
    }

    const onSubmit = (evt) => {
        console.log('The onSubmit is working!')
        evt.preventDefault()
        submit(); //calling the submit function from App.js
    }

    return(
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-inputs'>
                <label>House Name
                    <input
                        name='name'
                        type='text'
                        placeholder='Enter House Name'
                        value={values.name}
                        onChange={onChange} />
                </label>

                <label>Region of Westeros
                    <input  
                        name='region'
                        type='region'
                        placeholder='Enter Region'
                        value={values.region}
                        onChange={onChange} />
                </label>

                <div className='submit'>
                    <button>Submit Your House</button>
                </div>
            </div>
        </form>
    );
}




  