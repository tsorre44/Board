import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Toolbar, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import boardum from './images/Boardum_clear.png';import MenuIcon from "@material-ui/icons/Menu";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="fixed" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Boardum</Typography>
        <img className={classes.image} src={boardum} alt="icon" height="60" />
        
      </AppBar>
      <Toolbar> <Button/>
      </Toolbar>
      <Toolbar/>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            
            <Grid item xs={12} sm={12}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
