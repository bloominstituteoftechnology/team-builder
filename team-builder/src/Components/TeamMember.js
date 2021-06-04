import React, { useState } from "react";
import roles from "../constants/roles";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Input,
  FormControl,
  FormLabel,
  InputAdornment,
  FormHelperText,
  NativeSelect,
} from "@material-ui/core";
import Send from "@material-ui/icons/Send";
import Edit from "@material-ui/icons/Edit";
import Publish from "@material-ui/icons/Publish";
import Email from "@material-ui/icons/Email";
import AccountCircle from "@material-ui/icons/AccountCircle";

const TeamMember = (props) => {
  const { name, email, role, update } = props;

  const [editing, setEditing] = useState(false);
  const initialValue = { name, email, role };
  const [values, setValues] = useState(initialValue);

  const submitChanges = (e) => {
    e.preventDefault();
    update(name, values);
    console.log(name, values);
    toggleEdit();
  };

  const toggleEdit = () => {
    setEditing(!editing);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="team_member">
      {editing ? (
        <Card raised>
          <CardContent>
            <FormControl>
              <FormLabel htmlFor="name_edit">Edit Name</FormLabel>
              <Input
                id="name_edit"
                name="name"
                type="text"
                value={values.name}
                onChange={onChange}
                startAdornment={
                  <InputAdornment>
                    <AccountCircle />
                  </InputAdornment>
                }
                aria-describedby="name-helper-text_edit"
              />
              <FormHelperText id="name-helper-text_edit">
                Edit member name
              </FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email_edit">Email</FormLabel>
              <Input
                type="email"
                id="email_edit"
                name="email"
                value={values.email}
                onChange={onChange}
                placeholder={values.email}
                aria-describedby="email-helper-text"
                startAdornment={
                  <InputAdornment>
                    <Email />
                  </InputAdornment>
                }
              />
              <FormHelperText id="email-helper-text">
                Edit member email address
              </FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="role">Role</FormLabel>
              <NativeSelect name="role" id="role" onChange={onChange}>
                <option value={null} disabled>
                  Please select a role
                </option>
                {roles.map((role, index) => (
                  <option value={`${role}`} key={index}>
                    {role}
                  </option>
                ))}
              </NativeSelect>
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
