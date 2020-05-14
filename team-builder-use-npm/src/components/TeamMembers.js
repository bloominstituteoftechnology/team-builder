import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function TeamMembers(props) {
  const classes = useStyles();
  return (
    <div className="team-list">
      {props.members.map((newMember) => (
        <Card className={classes.root} key={newMember.id}>
          <CardContent>
            <Typography className={classes.title}>
              <h2>{newMember.name}</h2>
            </Typography>
            <Typography cvariant='h5' component='h2'>
              <p>{newMember.email}</p>
            </Typography>
            <Typography className={classes.pos}>
              <p>{newMember.role}</p>
            </Typography>
            <CardActions>
              <Button
                className="contactButton"
                href={`mailto:${newMember.email}`}
                color="secondary"
              >
                Contact
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default TeamMembers;
