import React from 'react';


export default function Form(props){
    const { values, update, submit } = props;

    const onChange = (evt) => {
        const { name, value } = evt.target;
        update(name, value);
      };

    return(
        <form>
            <label>
                Name
                <input
                type="text"
            name="name"
            onChange={onChange}
            value={values.name}
            placeholder="Enter you're name"
            maxLength="45"
          ></input>

            </label>
        
        
        </form>
    )

}