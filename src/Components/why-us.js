import React from 'react';
import { Grid, createStyles, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';

const styles = () =>
  createStyles({
    heading: {
      fontSize: '100px',
      fontFamily: 'auto'
    },
    conatinerPadding: {
      padding: '96px'
    }
  });
const Products = ({ classes }) => (
  <>
    <Container maxWidth='xl' className={classes.conatinerPadding}>
      <Grid
        container
        justify='center'
        alignItems={'center'}
        direction={'column'}
      >
        <Grid item>
          <Typography variant={'h1'} className={classes.heading}>
            Genuine bioleather
          </Typography>
        </Grid>
        <Grid item>
          <Typography display={'block'} variant={'subtitle1'} align={'center'}>
            There is no certificate for Bioleder. That's why we have set <br />{' '}
            up a consistent production chain ourselves.
          </Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={10}>
            <Grid item>
              <Grid container direction={'column'} alignItems={'center'}>
                <Grid item>
                  <img
                    width={'180'}
                    src='https://www.thannleder.de/wp-content/themes/thann/img/icons/biorind.png'
                    alt='Biorinder'
                  />
                </Grid>
                <Grid item>
                  <Typography variant={'h6'}>Biorinder</Typography>
                </Grid>
                <Grid item>
                  <Typography variant={'subtitle1'} align={'center'}>
                    The leather for our products comes from <br />
                    southern German biorimans, who live in the herd,
                    <br /> all year round in the pasture.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction={'column'} alignItems={'center'}>
                <Grid item>
                  <img
                    width={'180'}
                    src='https://www.thannleder.de/wp-content/themes/thann/img/icons/weideschlachtung.png'
                    alt='Biorinder'
                  />
                </Grid>
                <Grid item>
                  <Typography variant={'h6'}>Biorinder</Typography>
                </Grid>
                <Grid item>
                  <Typography variant={'subtitle1'} align={'center'}>
                    The leather for our products comes from <br />
                    southern German biorimans, who live in the herd,
                    <br /> all year round in the pasture.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction={'column'} alignItems={'center'}>
                <Grid item>
                  <img
                    width={'180'}
                    src='https://www.thannleder.de/wp-content/themes/thann/img/icons/pflanzengerbung.png'
                    alt='Biorinder'
                  />
                </Grid>
                <Grid item>
                  <Typography variant={'h6'}>Biorinder</Typography>
                </Grid>
                <Grid item>
                  <Typography variant={'subtitle1'} align={'center'}>
                    The leather for our products comes from <br />
                    southern German biorimans, who live in the herd,
                    <br /> all year round in the pasture.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </>
);

export default withStyles(styles)(Products);
