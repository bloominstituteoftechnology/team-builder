import '../App.css';

function User (props) {

    const { name, email, role } = props

    return(

        <div className='user'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
        </div>
    )
}

export default User