import React from 'react';
import { Grid, createStyles } from '@material-ui/core';
import banner from '../Images/banner-img.jpg';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => {
  return createStyles({
    image: {
      width: '100%'
    }
  });
};

const Banner = ({ classes }) => (
  <>
    <Grid container>
      <Grid item style={{ width: '100%' }} sm={12} xs={12}>
        <img src={banner} className={classes.image} alt='banner' />
      </Grid>
    </Grid>
  </>
);
export default withStyles(styles)(Banner);
