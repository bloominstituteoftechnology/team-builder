import React from 'react';
import {Stacked} from './Styled.js';


export default function Form(props) {
    const { values, update, submit } = props
    const onChange = e => {
        const { name, value } = e.target
        update(name, value);
    }
    const onSubmit = e => {
        e.preventDefault();
        submit();
    }

    return (
        <form className='formContainer' onSubmit={onSubmit}>
            <Stacked className='formTopics'>
                <label> Name:
                    <input
                        type="text"
                        value={values.name}
                        placeholder="Name"
                        name="name"
                        maxLength="20"
                        onChange={onChange}
                    />
                </label>

                <label> Champion:
                    <input
                        type="text"
                        value={values.champion}
                        placeholder="Champion"
                        name="champion"
                        maxLength="30"
                        onChange={onChange}
                    />
                </label>

                <label> Role:
                    <select name="role" onChange={onChange} value={values.role}>
                        <option value="" disabled selected>Choose your option</option>
                        <option value="Top">Top</option>
                        <option value="Jungle">Jungle</option>
                        <option value="Mid" >Mid</option>
                        <option value="ADC">ADC</option>
                        <option value="Support">Support</option>
                    </select>
                </label>

                <div className='submit'>
                    <input type="submit"></input>
                </div>
            </Stacked>
        </form>
    )
}