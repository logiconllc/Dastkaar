import React from 'react';
import { Grid, Container, createStyles, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import line from '../Images/line.svg';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
const styles = () =>
  createStyles({
    imgSizing: {
      width: '30%'
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
      borderRadius: 'unset'
    },
    divider: {
      height: 28,
      margin: 4,
      width: '1px'
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
            <Typography variant={'subtitle2'} className={classes.letterspacing}>
              WEEKLY NEWSLETTER
            </Typography>
          </Grid>

          {/* <Grid item>
            <TextField
              id='outlined-with-placeholder'
              label='With placeholder'
              placeholder='Placeholder'
              margin='normal'
              variant='outlined'
              className={classes.TextField}
            />
            <Button
              variant='outlined'
              color='inherit'
              className={classes.button}
            >
              subscribe
            </Button>
          </Grid> */}

          <Grid item>
            {/* <TextField
              label='With normal TextField'
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            /> */}
            <Paper className={classes.root}>
              {/* <TextField
                id='outlined-with-placeholder'
                label='With placeholder'
                placeholder='Placeholder'
                margin='normal'
                className={classes.TextField}
              /> */}
              <InputBase
                className={classes.input}
                placeholder='Enter your email'
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <Divider className={classes.divider} orientation='vertical' />
              {/* <Button
                className={classes.iconButton}
                variant={'contained'}
                color='secondary'
              >
                Subscribe
              </Button> */}
              <IconButton
                color='secondary'
                className={classes.iconButton}
                aria-label='directions'
              >
                <Typography variant={'caption'}>Subscribe</Typography>
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>
);
export default withStyles(styles)(Footer);
