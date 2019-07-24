import React from 'react'

function Form() {
    return (
        <div>
            <form>
                <fieldset>
                    <div>
                    <label >Name</label>
                    <input type="text"></input>
                    </div>
                    <div>
                    <label >Email</label>
                    <input type="text"></input>
                    </div>
                    <div>
                    <label >Role</label>
                    <input type="text"></input>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default Form