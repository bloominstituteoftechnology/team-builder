import '../App.css';

import User from './User'

function UserList (props) {

    const { users } = props

    return (
        <div className='User-List'>
            <h2>Users</h2>
            { users.map( user => { return <User name={users.name} email={users.email} role={users.role}/>}
            )
            }
        </div>
    )
}

export default UserList