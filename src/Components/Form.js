import React from 'react';

const form = (props) => {

    const handleChange = event => {
        const { name, value } = event.target;
        props.change(name, value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:
                <input
                    placeholder="Member name goes here"
                    value={props.values.name}
                    name="name"
                    onChange={handleChange}
                />  
            </label>
            <label>Height:
                <input
                    placeholder="Member height goes here"
                    value={props.values.height}
                    name="height"
                    onChange={handleChange}
                />
            </label>
            <label>Catchphrase:
                <input
                    placeholder="Member catchphrase goes here"
                    value={props.values.catchphrase}
                    name="catchphrase"
                    onChange={handleChange}
                />
            </label>
            <div className="submit">
                <button>Submit</button>
            </div>
        </form>
    )
}

export default form;