import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import "./usercard.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  large: {
    width: "80px",
    height: "80px",
  },
}));

function UserCard(props) {
  const classes = useStyles();
  console.log(props.userInfo[0].photo);
  return (
    <div className="cardList">
      {props.userInfo.map((user) => (
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6} lg={4}>
            <Paper className={classes.paper}>
              <div className="image-div">
                <Avatar
                  id="image"
                  src={user.photo}
                  alt={user.name}
                  className={classes.large}
                />
              </div>
              <h2>{user.name}</h2>
              <h3>{user.age}</h3>
              <p>{user.bio}</p>
            </Paper>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

export default UserCard;
