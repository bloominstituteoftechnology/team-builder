import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightBold
  },
  panel: {
    backgroundColor: "#c9f6e0",
    boxShadow: "2px 10px 14px -2px rgba(23,88,119,0.81)"
  },
  details: {
    fontSize: "1em",
    margin: "0 auto"
  },
  button: {
    width: "10%",
    backgroundColor: "#e1eceb",
    fontSize: "1em",
    border: "2px solid grey",
    borderRadius: "20px",
    margin: "0 auto 0.5em",
    padding: "10px",
    cursor: "pointer",
    "&:hover": {
      borderColor: "pink",
      boxShadow: "2px 10px 14px -2px rgba(23,88,119,0.81)"
    }
  }
}));

const MemberCard = props => {
  const classes = useStyles();
  return (
    <div className="card">
      {props.memberList.map(member => {
        return (
          <ExpansionPanel key={member} className={classes.panel}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{member.name}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <h3 className={classes.details}>Email: {member.email}</h3> <br />
              <h3 className={classes.details}>Role: {member.role}</h3>
            </ExpansionPanelDetails>
            <button
              className={classes.button}
              onClick={() => props.setMemberToEdit(member)}
            >
              Edit
            </button>
          </ExpansionPanel>
        );
      })}
    </div>
  );
};

export default MemberCard;
