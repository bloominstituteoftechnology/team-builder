import React, {useState } from "react";


function Form () {



    return (

        <div className="employeeForm">
            <form>
                <label>
                    Name:
                    <input
                     type = "text"
                     name="Name"
                     />
                </label>
                <label>
                    Email:
                    <input
                     type = "text"
                     name = "Email"
                     />
                </label>
                <label>
                    Role:
                    <input
                     type = "text"
                     name = "Role"
                     />
                </label>
            </form>
        </div>

    );
}

export default Form;