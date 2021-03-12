import React, { useState } from 'react';
import TeamList from './TeamList.js';

function TeamForm(props) {
  const [teamMember, setTeamMember] = useState(props);
  const teamMembers = props;

  return (
    <div>
      <form>
        <input type='text' placeholder='New Team Member Name'/>
        <input type='submit' value='Add New Member' />
      </form>
      <TeamList teamMembers={teamMembers} />
    </div>
  );
}

export default TeamForm;
