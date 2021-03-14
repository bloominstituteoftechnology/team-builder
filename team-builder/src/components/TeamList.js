import React from 'react';

const TeamList = (props) => {
  const {teamMembers} = props;

  return (
    <div>

      {teamMembers.map((e, i) => {
        return (
          <React.Fragment>
            <h1 key={i}>
              Name: {e.name}
              <br />
              Profession: {e.profession}</h1>
            </React.Fragment>
          )
        })}


      </div>
    );
  };

  export default TeamList;
