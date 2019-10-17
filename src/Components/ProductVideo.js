import React from 'react';
import {
  Container,
  withStyles,
  Grid,
  Typography,
  createStyles
} from '@material-ui/core';
import logo from '../Images/logo.svg';

const styles = () =>
  createStyles({
    Qoute: {
      width: 'fit-content'
    },
    QouteFont: {
      width: 'fit-content;'
    },
    Font: {
      fontFamily: 'sabon-pro',
      fontSize: '32px',
      textAlign: 'center'
    }
  });

const ProductVideo = ({ classes }) => {
  return (
    <Container>
      <Grid
        container
        justify={'center'}
        alignItems={'center'}
        direction={'column'}
      >
        <Grid item>
          <img src={logo} className={classes.Qoute} />
        </Grid>
        <Grid item className={classes.QouteFont}>
          <Typography variant={'subtitle2'} className={classes.Font}>
            Art is not a handicraft, it is the transmission of feeling the
            artist has experienced. Every decade needs its own manual of
            handicraft.
          </Typography>
          <Typography textAlign={'center'}>- THE DASTKAAR</Typography>
        </Grid>
        <Grid item>
          <video autoPlay muted>
            <source
              src={
                'https://www.thannleder.de/wp-content/uploads/2017/12/180425_THANN_Master_Guertel_h264_1mbit.webm'
              }
            ></source>
          </video>
        </Grid>
      </Grid>
    </Container>
  );
};
export default withStyles(styles)(ProductVideo);
