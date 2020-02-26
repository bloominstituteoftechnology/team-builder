import React, { useState } from "react";

const UserCard = props => {
  const [editable, setEditable] = useState(false);
  const [style, setStyle] = useState({});

  return (
    <div className="card">
      <p>
        Name:{" "}
        <span
          className="cardName"
          maxLength="20"
          contentEditable={editable}
          style={style}
          onKeyDown={e => {
            e.keyCode === 13 && document.querySelector(".cardName").blur();
          }}
        >
          {props.fname} {props.lname}
        </span>
      </p>
      <p>
        {" "}
        Email:{" "}
        <span
          className="cardEmail"
          contentEditable={editable}
          style={style}
          onKeyDown={e => {
            e.keyCode === 13 && document.querySelector(".cardEmail").blur();
          }}
        >
          {" "}
          {props.email}
        </span>
      </p>
      <p>
        Role:{" "}
        <span
          className="cardRole"
          contentEditable={editable}
          style={style}
          onKeyDown={e => {
            e.keyCode === 13 && document.querySelector(".cardRole").blur();
          }}
        >
          {props.role}
        </span>
      </p>
      <button
        className="edit-btn"
        onClick={() => {
          setEditable(true);
          setStyle({ border: "2px solid #8DCEFF" });
        }}
      >
        Edit
      </button>
      <button
        className="edit-btn"
        onClick={() => {
          setEditable(false);
          setStyle({});
        }}
      >
        Save
      </button>
    </div>
  );
};

export default UserCard;
