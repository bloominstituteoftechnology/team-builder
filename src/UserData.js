import React from 'react';



function MemberList(props) {
   
    return(
   <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.members.map(member => (
                    <tr key ={member.id}>
                        <td>{member.name}</td>
                        <td>{member.email}</td>
                        <td>{member.role}</td>
                        <td>
                         <button className='button muted-button'>Edit</button>
                         <button className='button muted-button'>Delete</button>

                        </td>
                    </tr>
                ))
             
             }
            
        </tbody>
    </table>
   )
            }


export default MemberList