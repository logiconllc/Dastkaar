import React from 'react';
import { Grid, Container, createStyles, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const styles = () =>
  createStyles({
    imgSizing: {
      width: '30%'
    }
  });

const Footer = ({ classes }) => (
  <Container maxWidth='xl'>
    <Grid
      container
      justify={'center'}
      alignItems={'center'}
      direction={'column'}
    >
      <Grid item>
        <img
          src={
            'https://handlavet.edge-themes.com/wp-content/uploads/2019/03/logo-standard-black.png'
          }
          alt='logo'
        />
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item>
            <IconButton
              color='secondary'
              className={classes.button}
              aria-label='add to shopping cart'
            >
              <AddShoppingCartIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>
);
export default withStyles(styles)(Footer);
