import React from 'react';

// COMPONENTS
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import withStyles from '@material-ui/core/styles/withStyles';
import { createStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const styles = () =>
  createStyles({
    root: {
      padding: '10px'
    },
    boxShadow: {
      boxShadow: '0px'
    }
  });

const Header = ({ classes }) => (
  <>
    const classes = styles()
    <AppBar color={'primary'} position={'sticky'} className={styles.boxShadow}>
      <Container maxWidth='xs{12}'>
        <Toolbar>
          <Grid container justify={'center'}>
            <Avatar
              src={
                'https://www.thannleder.de/wp-content/themes/thann/img/THANN-Bioleder-Logo.png'
              }
            />
          </Grid>
          <Grid container justify={'center'} alignItems={'center'} spacing={10}>
            <Grid item>
              <Button color={'secondary'} variant={'contained'}>
                Create a project
              </Button>
            </Grid>
            <Grid item>
              <Button>Exit demo</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  </>
);

export default withStyles(styles)(Header);
