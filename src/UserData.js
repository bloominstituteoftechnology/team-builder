import React from 'react';

const MemberList = () => {
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Name data</td>
                <td>email data</td>
                <td>
                    <button className='button muted-button'>Edit</button>
                    <button className='button muted-button'>Delete</button>

                </td>
            </tr>
        </tbody>
    </table>
} 

export default MemberList