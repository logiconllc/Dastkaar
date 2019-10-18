import React from 'react';
import { withStyles, Grid, Typography, createStyles } from '@material-ui/core';
import logo from '../Images/logo.svg';

const styles = () =>
  createStyles({
    QouteLogo: {
      width: 'fit-content',
      marginBottom: '27px'
    },
    QouteFont: {
      width: 'fit-content;',
      marginBottom: '10%'
    },
    Font: {
      fontFamily: 'sabon-pro',
      fontSize: '32px',
      textAlign: 'center'
    },
    videoPadding: {
      marginBottom: '20%'
    }
  });

const ProductVideo = ({ classes }) => {
  return (
    <Grid
      container
      justify={'center'}
      alignItems={'center'}
      direction={'column'}
    >
      <Grid item>
        <img src={logo} className={classes.QouteLogo} />
      </Grid>
      <Grid item className={classes.QouteFont}>
        <Typography variant={'subtitle2'} className={classes.Font}>
          Art is not a handicraft, it is the transmission of feeling the artist
          has experienced. Every decade needs its own manual of handicraft.
        </Typography>
      </Grid>
      <Grid item className={classes.videoPadding}>
        <video autoPlay muted>
          <source
            src={
              'https://www.thannleder.de/wp-content/uploads/2017/12/180425_THANN_Master_Guertel_h264_1mbit.webm'
            }
          ></source>
        </video>
      </Grid>
    </Grid>
  );
};
export default withStyles(styles)(ProductVideo);
