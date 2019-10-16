import React from 'react';

// COMPONENTS
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import { createStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../Images/logo.svg';

const styles = () =>
  createStyles({
    root: {
      padding: '10px'
    },
    boxShadow: {
      boxShadow: 'none'
    },
    img: {
      width: '30%'
    }
  });
const Header = ({ classes }) => (
  <>
    <AppBar
      color={'primary'}
      position={'sticky'}
      className={classes.boxShadow}
      direction={'column'}
    >
      <Container maxWidth='xl'>
        <Toolbar>
          <Grid container justify={'space-between'} alignItems={'center'}>
            <Grid item>
              <img className={classes.img} src={logo} alt='logo' />
            </Grid>

            <Grid item>
              <Grid container direction={'row'} spacing={3}>
                <Grid item>
                  <SearchIcon />
                </Grid>
                <Grid item>
                  <ShoppingCartIcon />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  </>
);

export default withStyles(styles)(Header);
