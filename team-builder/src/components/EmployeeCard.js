import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  root: {
    minWidth: 340,
    maxWidth: 340,
    flexGrow: 1,
  },
  media: {
    height: 140,
  },
});

export default function EmployeeCard(props) {

  console.log("EmployeeCard Props", props)
  const classes = useStyles();

  return (
    <div>
      <Grid
  container
  spacing={3}
  direction="row"
  justify="space-around"
  alignItems="center"
>
      {props.employee.map(x => (
        <Grid item xs>
    <Card className={classes.root} key={x.id}>
      
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://assets-global.website-files.com/5cdadb92bbedfa7aa28f9b50/5e4d6be0c6d76ac06665c448_isa_iamge.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {x.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {x.email}
            <br />
            <br />
            Role: {x.role}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="primary">
          Remove
        </Button>
      </CardActions>
     
    </Card>
    </Grid>
    ))}
    </Grid>
    </div>
  );
}
