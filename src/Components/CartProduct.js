import React, { useState } from 'react';
import { Grid, Typography, createStyles } from '@material-ui/core';
import VariantComponent from '../Components/QuantityVariant';
import { withStyles } from '@material-ui/styles';

const styles = () =>
  createStyles({
    gridPadding: {
      position: 'absolute',
      left: '49%'
    }
  });

const CartProduct = ({ classes }) => {
  var x = 25;
  const [count, setCount] = useState(0);

  const callbackFunction = childData => {
    if (childData === 'increment') {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <Grid container justify={'space-between'} alignItems={'center'}>
        <Grid item>
          <Grid container alignItems={'center'}>
            <Grid item>
              <img
                src={
                  'https://cdn.shopify.com/s/files/1/0293/8269/products/WEBSITE_Antiquity_Necklace_compact.jpg?v=1436479254'
                }
              />
            </Grid>

            <Grid item>
              <Typography variant={'subtitle2'}>Necklace</Typography>
              <Typography variant={'subtitle2'}>31 Bits</Typography>
              <Typography variant={'subtitle2'}>$270</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.gridPadding}>
          <VariantComponent parentCallback={callbackFunction} count={count} />
        </Grid>
        <Grid item>
          <Typography variant={'h6'}> {x}$ </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default withStyles(styles)(CartProduct);
