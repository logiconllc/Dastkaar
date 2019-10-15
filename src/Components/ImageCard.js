import React from 'react';
import {
  createStyles,
  withStyles,
  Container,
  Grid,
  Link,
  Typography
} from '@material-ui/core';

const styles = theme =>
  createStyles({
    background: {
      backgroundImage: props => 'url(' + props.productImage + ')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      height: '550px',
      width: '20vw',
      backgroundPosition: 'center',
      position: 'relative'
    },
    secondBackground: {
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      height: '550px',
      width: '20vw',
      backgroundColor: 'rgba(128, 128, 128, 0.8);',
      backgroundPosition: 'center',
      position: 'absolute',
      zIndex: '99',
      cursor: 'pointer',
      opacity: 0,
      '&:hover': {
        opacity: 1
      }
    },
    hoverImage: {
      textDecoration: 'none',
      fontSize: 'large',
      fontWeight: 'bold',
      letterSpacing: '1px',
      color: 'white'
    }
  });

const ImageCard = ({ classes }) => (
  <>
    <Container>
      <Grid container justify={'space-between'}>
        <Grid item className={classes.background}></Grid>

        <Grid
          item
          container
          direction={'column'}
          justify={'space-between'}
          alignItems={'center'}
          className={classes.secondBackground}
        >
          <Grid item>
            <Typography variant={'caption'} color={'primary'}>
              Product Name
            </Typography>
          </Grid>
          <Grid item>
            <Link href={'#'} className={classes.hoverImage}>
              Click to open product
            </Link>
          </Grid>
          <Grid container item justify={'space-between'}>
            <Grid item>
              <Typography variant={'caption'} color={'primary'}>
                Brand Name
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant={'caption'} color={'primary'}>
                Product Price
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </>
);

export default withStyles(styles)(ImageCard);
