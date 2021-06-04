import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
import Send from "@material-ui/icons/Send";
import Edit from '@material-ui/icons/Edit';

const TeamMember = (props) => {
  const { name, email, role, update } = props;

  const [editing, setEditing] = useState(false);
  const [values, setValues] = useState({name, email, role})

  const submitChanges = (e) => {
    update(name, values)
  }

  const toggleEdit = () => {
    setEditing(!editing)
  }

  return (
    <div className="team_member">
      {editing ? <div>editing</div> : <Card raised>
        <CardContent>
          <Typography variant="h4" component="h2">
          {values.name} <Edit onClick={toggleEdit} />
          </Typography>
          <Typography variant="subtitle1">{values.role}</Typography>
        </CardContent>
        <CardActions>
          <Button aria-label="email" variant="contained" color="primary" endIcon={<Send />}>
            <a style={{ textDecoration: "none", color: "inherit" }} href={`mailto:${values.email}`}>
              Email {name}
            </a>
          </Button>
        </CardActions>
      </Card>
      }
    </div>
  );
};

export default TeamMember;
