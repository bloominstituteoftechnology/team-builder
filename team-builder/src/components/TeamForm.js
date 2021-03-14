import React, { useState } from 'react';
import TeamList from './TeamList.js';

function TeamForm(props) {
  const [name, setName] = useState();
  const teamMembers = props.teamMembers;
  const [list, setList] = useState(teamMembers);

  return (
    <div>
      <form>

        <h1>The you're adding to the list is <span defaultValue='not known'>{name}</span></h1>

        New Member Name: <input
          onChange={event => {
            setName(event.target.value);
          }}

          id='name'
          type='text'
          placeholder='New Team Member Name'
        />
        <input
          onClick={event => {
            setList([...list, name]);
            event.preventDefault(e => {
              event.document.querySelector('#name').value = '';

            });
          }}
          id='submit'
          type='submit'
          value='Add New Member'
        />

      </form>
      <TeamList teamMembers={list} name={name} />
    </div>
  );
}

export default TeamForm;
