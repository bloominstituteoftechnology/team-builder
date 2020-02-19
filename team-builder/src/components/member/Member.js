import React from 'react';
import { Table } from 'reactstrap';
function Member(props) {
  return (
    <div>
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {props.team.map(member => (
            <tr>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.role}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Member;
