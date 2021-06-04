import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import Send from "@material-ui/icons/Send";
import Edit from "@material-ui/icons/Edit";
import Publish from "@material-ui/icons/Publish";

const TeamMember = (props) => {
  const { name, email, role, update } = props;

  const [editing, setEditing] = useState(false);
  const initialValue = {name, email, role}
  const [values, setValues] = useState(initialValue);

  const submitChanges = (e) => {
    e.preventDefault();
    update(name, values);
    console.log(name, values)
    toggleEdit();
  };

  const toggleEdit = () => {
    setEditing(!editing);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({...values, [name]: value });
  };

  return (
    <div className="team_member">
      {editing ? (
        <Card raised>
          <CardContent>
            <FormControl>
              <FormLabel htmlFor="name_edit" >Edit Name</FormLabel>
              <Input id="name_edit" name="name" type="text" value={values.name} onChange={onChange} />
            </FormControl>
          </CardContent>
          <CardActions>
            <Button endIcon={<Publish />} onClick={submitChanges}>
              Submit
            </Button>
          </CardActions>
        </Card>
      ) : (
        <Card raised>
          <CardContent>
            <Typography variant="h4" component="h2">
              {values.name} <Edit onClick={toggleEdit} />
            </Typography>
            <Typography variant="subtitle1">{values.role}</Typography>
          </CardContent>
          <CardActions>
            <Button
              aria-label="email"
              variant="contained"
              color="primary"
              endIcon={<Send />}
            >
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href={`mailto:${values.email}`}
              >
                Email {name}
              </a>
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default TeamMember;
