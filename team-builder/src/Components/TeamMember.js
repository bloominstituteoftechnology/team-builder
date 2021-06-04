import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Tooltip,
} from "@material-ui/core";
import Send from "@material-ui/icons/Send";
import Edit from '@material-ui/icons/Edit';

const TeamMember = (props) => {
  const { name, email, role } = props;
  return (
    <div className="team_member">
      <Card raised>
        <CardContent>
          <Typography variant="h4" component="h2">
          {name} <Tooltip title="Edit Team Member" ><Edit/></Tooltip>
          </Typography>
          <Typography variant="subtitle1">{role}</Typography>
        </CardContent>
        <CardActions>
          <Tooltip title={`Email ${name}`} >
          <Button aria-label="email" variant="contained" color="primary" endIcon={<Send />}>
            <a style={{ textDecoration: "none", color: "inherit" }} href={`emailto:${email}`}>
              Email {name}
            </a>
          </Button>
          </Tooltip>
        </CardActions>
      </Card>
    </div>
  );
};

export default TeamMember;
