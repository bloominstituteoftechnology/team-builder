import React from 'react';

const Member = ({ name, role, email, id, index, deleteMember, editMember }) => {
  return (
    <div>
      <p key={index}>
        Name:{name}; Role:{role}; Email:{email}
      </p>
      <button onClick={() => deleteMember(id)}>Delete Member ?</button>
      <button onClick={() => editMember(id)}>Edit Member ?</button>
    </div>
  );
};
export default Member;
