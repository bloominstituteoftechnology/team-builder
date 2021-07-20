import React from "react";

export default function Form(props){
    <div>
        <label>Name
            <input
                type="text"
                name="name"
                onChange={onChange}
            />
        </label>
        <label>Email
            <input
            type="email"
            name="email"
            onChange={onChange}
            />
        </label>
        <label>Role
          <select name="role" onChange={onChange}>
            <option value="">-- Select a Role --</option>
            <option value="backend engineer">Backend Engineer</option>
            <option value="frontend engineer">Frontend Engineer</option>
            <option value="designer">Designer</option>
            <option value="nocho maker">Nocho Maker</option>
            <option value="me">Me</option>
          </select>
        </label>
    </div>
}