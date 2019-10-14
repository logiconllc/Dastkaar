import React from 'react';
import {
  Grid,
  Container,
  createStyles,
  Typography,
  Link
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import line from '../Images/line.svg';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
const styles = () =>
  createStyles({
    imgSizing: {
      width: '30%'
    },
    conatinerPadding: {
      padding: '80px'
    },
    socialContainer: {
      padding: '65px'
    },
    lineBox: {
      padding: '10px'
    },
    letterspacing: {
      letterSpacing: '4px'
    },
    button: {
      width: '126px'
    },
    TextField: {
      verticalAlign: 'unset'
    },
    root: {
      padding: '2px 16px',
      display: 'flex',
      alignItems: 'center',
      width: '400px',
      margin: '30px',
      paddingRight: 'unset',
      paddingTop: 'unset',
      paddingBottom: 'unset'
    },
    input: {
      flex: 1
    },
    iconButton: {
      background: 'black',
      color: 'white',
      borderRadius: 'unset',
      width: '140px',
      '&hover': {
        color: '#unset',
        cursor: 'pointer',
        background: 'unset'
      }
    },
    background: {
      background: '#EFE3D4'
    }
  });

const Footer = ({ classes }) => (
  <Container maxWidth='xl' className={classes.background}>
    <Grid
      container
      justify={'center'}
      alignItems={'center'}
      direction={'row'}
      className={classes.conatinerPadding}
      justify={'space-evenly'}
    >
      <Grid item>
        <Grid container direction={'column'} alignItems={'center'}>
          <Grid item>
            <Link href='#'>privacy policy</Link>
          </Grid>
          <Grid item>
            <Link href='#'>terms & conditions</Link>
          </Grid>
          <Grid item>
            <Link href='#'>about</Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
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
            <Grid
              container
              spacing={10}
              className={classes.socialContainer}
              alignItems={'center'}
            >
              <Grid item>
                <TwitterIcon />
              </Grid>
              <Grid item>
                <InstagramIcon />
              </Grid>
              <Grid item>
                <FacebookIcon />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction={'column'} alignItems={'center'}>
              <Grid item>
                <img src={line} className={classes.lineBox} />
              </Grid>
              <Grid item>
                <Typography
                  variant={'subtitle2'}
                  className={classes.letterspacing}
                >
                  WEEKLY NEWSLETTER
                </Typography>
              </Grid>
              <Grid item>
                <Paper className={classes.root}>
                  <InputBase
                    className={classes.input}
                    placeholder='Enter your email'
                  />
                  <IconButton color='secondary' className={classes.iconButton}>
                    <Typography variant={'caption'}>SUBSCRIBE</Typography>
                  </IconButton>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction={'column'} alignItems={'center'}>
          <Grid item>
            <Link href='#'>shipping info</Link>
          </Grid>
          <Grid item>
            <Link href='#'>Returns/Exachange</Link>
          </Grid>
          <Grid item>
            <Link href='#'>contact</Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>
);
export default withStyles(styles)(Footer);
