import React from 'react';
import {
  createStyles,
  withStyles,
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Routes from '../Utils/Routes';

const styles = () =>
  createStyles({
    background: {
      backgroundImage: props => 'url(' + props.productImage + ')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      height: '550px',
      width: '25vw',
      backgroundPosition: 'center',
      position: 'relative',
      ['@media (max-width:1280px)']: { // eslint-disable-line no-useless-computed-key
        width: '23vw'
      }
    },
    secondBackground: {
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      height: '550px',
      width: '25vw',
      backgroundColor: 'rgba(128, 128, 128, 0.8);',
      backgroundPosition: 'center',
      position: 'absolute',
      zIndex: '99',
      cursor: 'pointer',
      opacity: 0,
      '&:hover': {
        opacity: 1
      },
      ['@media (max-width:1280px)']: { // eslint-disable-line no-useless-computed-key
        width: '23vw'
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
        <Grid item className={classes.background} />

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
            <Link className={classes.hoverImage} to={Routes.AddToCart}>
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
