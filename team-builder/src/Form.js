import React, { useState } from "react";
import "./App.css";

const Friends = [
  {
    id: 1,
    fname: "Joey",
    lname: "Oshiro",
    handle: "ShamanEmPIRE",
    faveGame: "Texas Hold'em",
    isBluffing: true,
  },
  {
    id: 2,
    fname: "Lance",
    lname: "Evans",
    handle: "Captn 1der",
    faveGame: "Omaha Hi",
    isBluffing: true,
  },
  {
    id: 3,
    fname: "JJ",
    lname: "Watson",
    handle: "GOBLUE1974",
    faveGame: "7-Card stud",
    isBluffing: false,
  },
  {
    id: 4,
    fname: "Mary",
    lname: "Jackson",
    handle: "StackTaker1000",
    faveGame: "Texas Hold'em",
    isBluffing: false,
  },
];

const initialFormValues = {
  fname: "",
  lname: "",
  handle: "",
  faveGame: "",
  isBluffing: false,
};

export default function Form() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [friends, setFriends] = useState(Friends);
  const [formValues, setFormValues] = useState(initialFormValues);

  const change = (e) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));
  };

  const handleUpdate = (friendId) => {
    const friend = friends.find((f) => f.id === friendId);

    if (friend) {
      setIsEditMode(true);
      setFormValues(friend);
      setEditingId(friendId);
    }
  };

  const handleCheckboxChange = (e) => {
    const { checked, name } = e.target;
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: checked }));
  };

  const submit = (e) => {
    e.preventDefault();

    if (isEditMode) {
      const friend = friends.find((f) => f.id === editingId);

      if (friend) {
        const toBeUpdated = { ...friend };
        toBeUpdated.fname = formValues.fname || toBeUpdated.fname;
        toBeUpdated.lname = formValues.lname || toBeUpdated.lname;
        toBeUpdated.handle = formValues.handle || toBeUpdated.handle;
        toBeUpdated.faveGame = formValues.faveGame || toBeUpdated.faveGame;
        toBeUpdated.isBluffing = formValues.isBluffing;
        const filteredFriends = friends.filter((f) => f.id !== toBeUpdated.id);

        setFriends([...filteredFriends, toBeUpdated]);
        // reset the formsValue state
        setFormValues(initialFormValues);
        setEditingId(null);
        setIsEditMode(false);
      }
      return;
    }

    const lastUsersId = friends[friends.length - 1].id;
    const newFriend = {
      // needs identical structure to the other friends
      id: lastUsersId + 1,
      fname: formValues.fname,
      lname: formValues.lname,
      handle: formValues.handle,
      faveGame: formValues.faveGame,
      isBluffing: formValues.isBluffing,
    };
    console.log(newFriend);

    // use your setFriends helper function
    setFriends(friends.concat(newFriend));
    // reset the formsValue state
    setFormValues(initialFormValues);
  };

  return (
    <div>
      <form onSubmit={submit} className="form">
        <label htmlFor="fnameInput">First Name: </label>
        <input
          onChange={change}
          value={formValues.fname}
          maxLength="15"
          placeholder="First Name"
          id="fnameinput"
          name="fname"
          type="text"
        />
        <br />
        <label htmlFor="lnameInput">Last Name: </label>
        <input
          onChange={change}
          value={formValues.lname}
          maxLength="15"
          placeholder="Last Name"
          id="lnameinput"
          name="lname"
          type="text"
        />
        <br />

        <label htmlFor="lhandleInput">User Name: </label>
        <input
          onChange={change}
          value={formValues.handle}
          maxLength="15"
          placeholder="User Name"
          id="lhandleinput"
          name="handle"
          type="text"
        />
        <br />

        <label htmlFor="faveGameSelect">Favorite Game: </label>
        <select
          id="faveGameSelect"
          name="faveGame"
          value={formValues.faveGame}
          style={{ margin: "2rem" }}
          onChange={change}
        >
          <option value="">--</option>
          <option value="Texas Hold'em">Texas Hold'em</option>
          <option value="Omaha Hi">Omaha Hi</option>
          <option value="Omaha Hi-Lo">Omaha Hi-Lo</option>
          <option value="7-Card Stud">7-Card Stud</option>
          <option value="5-Card Draw">5-Card Draw</option>
          <option value="5-Card Omaha">5-Card Omaha</option>
          <option value="Bagudi">Bagudi</option>
        </select>
        <br />
        <label htmlFor="isBluffingInput">Check if win by bluff </label>
        <input
          type="checkbox"
          id="isBluffingInput"
          name="isBluffing"
          checked={formValues.isBluffing}
          onChange={handleCheckboxChange}
        />
        <br />

        <button type="submit">{isEditMode ? "Update" : "Submit New Player"}</button>
      </form>
      {friends.map((friend, idx) => (
        <div className="player-trans" key={idx} style={{ border: "2px" }}>
          <h3>
            {friend.fname} {friend.lname}
          </h3>
          <p>
            <em>Handle: </em>
            {friend.handle}
          </p>
          <p>
            <em>Favorite Game: </em>
            {friend.faveGame}
          </p>
          <p>
            <em>Likes to Bluff: </em>
            {friend.isBluffing ? "Yes" : "No"}
          </p>
          <br />
          <br />
          <button onClick={() => handleUpdate(friend.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
