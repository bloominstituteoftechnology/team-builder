import React from 'react'

export default function Champion(props) {
    const { details } = props

    if (!details) {
        return <h3>Getting champion details...</h3>
    }

    return (
        <div className='champion-container'>
            <h2>{details.name}</h2>
            <p>Champion: {details.champion}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}