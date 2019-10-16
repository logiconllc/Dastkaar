import React from 'react';
import {
  Grid,
  Typography,
  Container,
  withStyles,
  createStyles,
  Button
} from '@material-ui/core';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import CartProduct from '../Components/CartProduct';
const styles = () =>
  createStyles({
    root: {
      paddingTop: '8%',
      paddingBottom: '8%',
      fontWeight: 'bolder'
    },
    hr: {
      width: '100%',
      color: 'black'
    },
    button: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingBottom: '30%'
    }
  });

const CheckOut = ({ classes }) => {
  return (
    <>
      <Header></Header>
      <Container>
        {' '}
        <Typography variant={'h2'} className={classes.root}>
          {' '}
          Review Cart
        </Typography>
        <Grid item container justify={'space-between'}>
          <Typography variant={'h6'}>Product</Typography>
          <Typography variant={'h6'}>Qty</Typography>
          <Typography variant={'h6'}>Total</Typography>
        </Grid>
        <hr className={classes.hr}></hr>
        <Grid item>
          <CartProduct />
        </Grid>
        <hr className={classes.hr}></hr>
        <Grid item className={classes.button}>
          <Button variant='contained' color={'secondary'}>
            Check Out
          </Button>
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default withStyles(styles)(CheckOut);
