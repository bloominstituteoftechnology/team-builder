import React from "react";

const Member = props => {
  const { name, age, occupation, favFood, email } = props.member;
  return (
    <div className="member">
      <aside className="main">
        <h3>{name}</h3>
        <h5>{occupation}</h5>
      </aside>
      <aside>
        <p><strong>Age: </strong>{age}</p>
        <p><strong>Email: </strong>{email}</p>
        <p><strong>Favorite Food: </strong>{favFood}</p>
        <button onClick={() => props.editMember(name)}>Edit</button>
      </aside>
    </div>
  );
};

export default Member;
