import React from 'react';
import './App.css';
import JoinNow from './component/JoinNow';
import { Backdrop, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },

}));
function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div style={{marginRight:"45%",marginLeft:'45%', marginTop:'10%,'}}>
    <Button variant="contained" color="secondary" onClick={handleToggle}>
  Show backdrop
</Button>
    <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
      <JoinNow></JoinNow>
    </Backdrop>
    </div>
  );
}

export default App;
