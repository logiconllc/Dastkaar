import React from 'react';
import { Grid, createStyles, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import HelpingHand from '../Images/helping-hand.svg'
import Nature from '../Images/nature.svg'
import Quality from '../Images/quality.svg'

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
            Hands do Matter
          </Typography>
        </Grid>
        <Grid item>
          <Typography display={'block'} variant={'subtitle1'} align={'center'}>
            Our philosophy is that the hands which make your life and <br/> home beautiful
            deserves something EXTRA-ordinary
          </Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={10}>
            <Grid item>
              <Grid container direction={'column'} alignItems={'center'}>
                <Grid item>
                  <img
                    width={'120'}
                    height={'120'}
                    src={HelpingHand}
                    alt='helping-hand'
                  />
                </Grid>
                <Grid item>
                  <Typography variant={'h6'}>Make Them Grow</Typography>
                </Grid>
                <Grid item>
                  <Typography variant={'subtitle1'} align={'center'}>
                    Give the hands some love for what they do. <br/>
                    We help them in realizing their dreams by <br/>
                    giving them 60% for each product sold
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction={'column'} alignItems={'center'}>
                <Grid item>
                  <img
                    width={'120'}
                    height={'120'}
                    src={Nature}
                    alt='nature'
                  />
                </Grid>
                <Grid item>
                  <Typography variant={'h6'}>Close to Nature</Typography>
                </Grid>
                <Grid item>
                  <Typography variant={'subtitle1'} align={'center'}>
                    With the ever increasing global warming, our <br/>
                    handicrafts are close to nature. The hands understand <br/>
                    this, hence only using materials which do not <br/>
                    harm mother nature
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction={'column'} alignItems={'center'}>
                <Grid item>
                  <img
                    width={'120'}
                    height={'120'}
                    src={Quality}
                    alt='best-quality'
                  />
                </Grid>
                <Grid item>
                  <Typography variant={'h6'}>Best Quality</Typography>
                </Grid>
                <Grid item>
                  <Typography variant={'subtitle1'} align={'center'}>
                    Before reaching in your hand, all the crafts are <br/>
                    inspected thoroughly. Any product which is not <br/>
                    according to the standard is no product.
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
