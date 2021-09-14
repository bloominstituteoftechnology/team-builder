import React, { useState } from 'react'

export default function Member(props) {
    const { details } = props;
    const [expose, setExpose] = useState(false)

    const showDetails = (e) => {
        setExpose(!expose);
    }
    console.log(details)
    function Details () {
        return (
            <div className="Details">
                <p>
                {details.name} <br/>
                {details.email} <br/>
                {details.role}
                </p>
            </div>
        )
    }

    return (
        <div className="Member">
            <button onClick={showDetails}>Member</button>
            <div>
                {
                    expose && <Details />
                }
            </div>
        </div>
    )
}
