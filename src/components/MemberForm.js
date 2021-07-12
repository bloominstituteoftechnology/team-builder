import React from 'react'

export default function MemberForm(props)
{
    const member = props;

    //props expected for a member form entry
    const { values, update, submit} = member;

    const onChange = evt =>
    {
        const name = evt.target.name

        const value = evt.target.value

        update(name, value)

    }

    const onSubmit = evt => 
    {
        evt.preventDefault()

        submit()
    }
    return (
        <form className='container form' onSubmit={onSubmit}>
            <div className = 'form inputs'>
            <label>Name
                {
                    <input type = "text" onChange = {onChange} name = "name" value = {values.name} />
                }</label>

            <label>Email
                    {
                        <input type="text" onChange={onChange} name="email" value={values.email} />
                    }</label>
                <label>Role {/* 🔥 STEP 5 - Make dropdown for role. */}
                    <select onChange={onChange} name="role" value={values.role}>
                        <option value="">-- Select a Role --</option>
                        <option value="QA OverLord">QA OverLord</option>
                        <option value="World Class Dev">World Class Dev</option>
                        <option value="Frequent Coder Class">Frequent Coder Class</option>
                        <option value="Granny Fanny Pack">Granny Fanny Pack</option>
                    </select></label>
                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}