import '../App.css';

import User from './User'

function UserList (props) {

    const { users } = props

    return (
        <div className='User-List'>
            <h2>Users</h2>
            { users.map( user => { return <User name={user.name} email={user.email} role={user.role}/>}
            )
            }
        </div>
    )
}

export default UserList