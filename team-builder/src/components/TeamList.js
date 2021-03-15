import React from 'react';
import { MemberCard } from './StyledComponents.js';

const TeamList = (props) => {
  const {teamMembers} = props;

  return (
    <div>

      {teamMembers.map((e, i) => {
        return (
          <React.Fragment>
            <MemberCard>
              <h1 key={i}>
                Name: {e.name}
                <br />
                Profession: {e.profession}</h1>
              </MemberCard>
            </React.Fragment>
          )
        })}


      </div>
    );
  };

  export default TeamList;
