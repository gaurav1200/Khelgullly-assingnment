import { Button, Typography } from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import './button.css';
const useStyle = makeStyles ({
    root:{
        color: 'white',
        backgroundColor:"#f50057",
        textAlign:"center",
        fontSize:35,
        fontWeight:'bold',
        fontFamily:'Source Code Pro',
        width:500,
        height:58,

    },
    btn:{
        width: 180,
        border:1,
        borderRadius:0,
    },
    btn1:{
      width: 350,
      borderStyle:"solid",
      borderRadius:0,
    },
    card:{
        height:300,
    }
})
const JoinNow = () => {
    const classes = useStyle();
  return (
    <div>
      <Card className={classes.card} >
          <Typography className={classes.root} >JOIN NOW</Typography>
        <CardActions style={{justifyContent:'center'}} className="button">
          <Button className={classes.btn} variant="contained" color="secondary">SELECT A TEAM</Button>
        </CardActions>
        <CardActions style={{justifyContent:'center'}} className="button">
          <Button  className={classes.btn} variant="contained" color="secondary">CREATE A TEAM</Button>
        </CardActions>
        <CardActions style={{justifyContent:'center'}} className="button">
          <Button className={classes.btn} variant="contained" color="secondary">FIND A TEAM</Button>
        </CardActions>
        <CardActions style={{justifyContent:'center'} } className="button">
          <Button className={classes.btn1} variant="outlined">Search</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default JoinNow;
