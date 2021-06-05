import React, { useState } from "react";
import {
  Button,
  Card,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputAdornment,
  NativeSelect,
  Typography,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Email from "@material-ui/icons/Email";
import Publish from "@material-ui/icons/Publish";
import roles from "../constants/roles";
import Work from "@material-ui/icons/Work";

const AddMemberForm = (props) => {
  const { submit } = props;
  const initialFormValue = {
    name: "",
    email: "",
    role: "",
  };
  const [formValue, setFormValue] = useState(initialFormValue);

  const change = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    submit(formValue);
    setFormValue(initialFormValue);
  };

  return (
    <Card raised>
      <form id="add_member_form" action="submit" onSubmit={submitForm}>
        <Typography variant="h6" component="h2">
          Add New Team Member
        </Typography>
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            type="text"
            id="name"
            aria-describedby="name-helper-text"
            name="name"
            onChange={change}
            value={formValue.name}
            placeholder="2-20 characters"
            startAdornment={
              <InputAdornment>
                <AccountCircle />
              </InputAdornment>
            }
          />
          <FormHelperText id="name-helper-text">
            Please enter your name
          </FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            id="email"
            name="email"
            value={formValue.email}
            onChange={change}
            placeholder="name@domain.com"
            aria-describedby="email-helper-text"
            startAdornment={
              <InputAdornment>
                <Email />
              </InputAdornment>
            }
          />
          <FormHelperText id="email-helper-text">
            Please enter your email
          </FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="role">Role</FormLabel>
          <NativeSelect
            name="role"
            id="role"
            onChange={change}
            startAdornment={
              <InputAdornment>
                <Work />
              </InputAdornment>
            }
          >
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
        <Button variant="contained" type="submit" startIcon={<Publish />}>
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default AddMemberForm;
