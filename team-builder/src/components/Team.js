import React from 'react';
// import { useState } from 'react';
// import TeamList from './TeamList';

const Table = props => (
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
        {props.members.length > 0 ? (
            props.members.map(member => (
            <tr key = {member.id}>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>
                  <button className="button muted-button">Edit</button>
                  <button className="button muted-button">Delete</button>
                </td>
              </tr>
              ))
        ) : (
            <tr>
                <td>colSpan = {3}>No Members</td>
            </tr>
        )}
      
    </tbody>
  </table>
)

export default Table;