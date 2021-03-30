import react from 'react'

export default function Employee(props) {
    const { details } = props

    if (!details) {
        return <h3>Working </h3>
    }

    return (
        <div className='friend container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}