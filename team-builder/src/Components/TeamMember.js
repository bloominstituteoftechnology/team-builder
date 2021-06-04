import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
import Send from "@material-ui/icons/Send";

const TeamMember = (props) => {
  const { name, email, role } = props;
  return (
    <div className="team_member">
      <Card raised>
        <CardContent>
          <Typography variant="h4" component="h2">
            {name}
          </Typography>
          <Typography variant="subtitle1">{role}</Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" endIcon={<Send />}>
            <a style={{ textDecoration: "none", color: "inherit" }} href={`emailto:${email}`}>
              Email {name}
            </a>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default TeamMember;
