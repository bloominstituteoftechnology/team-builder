import React from 'react'

export default function Details(props) {
    const {details} = props;

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
