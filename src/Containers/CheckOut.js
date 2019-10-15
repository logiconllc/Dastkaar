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
const styles = () =>
  createStyles({
    root: {
      padding: '8%',
      fontWeight: 'bolder'
    },
    hr: {
      width: '100%',
      color: 'black'
    }
  });
const CheckOut = ({ classes }) => (
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
      <Grid item container justify={'space-between'} alignItems={'center'}>
        <img
          src={
            'https://cdn.shopify.com/s/files/1/0293/8269/products/WEBSITE_Antiquity_Necklace_compact.jpg?v=1436479254'
          }
        />
        <Grid item>
          <Typography>250</Typography>
        </Grid>
        <Grid item>
          <Typography>250$</Typography>
        </Grid>
      </Grid>
      <hr className={classes.hr}></hr>
      <Grid item>
        <Button variant='contained' color={'secondary'}>
          Check Out
        </Button>
      </Grid>
    </Container>
    {/* <Footer /> */}
  </>
);
export default withStyles(styles)(CheckOut);
