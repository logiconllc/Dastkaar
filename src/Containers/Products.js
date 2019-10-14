import React from 'react';
import {
  createStyles,
  Container,
  Grid,
  Typography,
  Link
} from '@material-ui/core';
import Header from '../Components/Header';
import { withStyles } from '@material-ui/styles';
import ImageCard from './ImageCard';
import ProductImage from '../Images/images.png';
const styles = () =>
  createStyles({
    root: {
      padding: '8%'
    },
    Underlined: {
      width: '26%',
      position: 'inherit',
      marginLeft: 'unset',
      marginRight: 'unset'
    }
  });
const Products = ({ classes }) => (
  <>
    <Header></Header>
    <Container maxWidth={'xl'}>
      <Grid
        container
        direction='row'
        justify='space-around'
        className={classes.root}
      >
        <Grid item xs={3}>
          <Grid container direction={'column'}>
            <Grid item>
              <Typography variant='h4'>
                {' '}
                <b>Categories</b>
              </Typography>
            </Grid>
            <hr className={classes.Underlined}></hr>
            <Grid item>
              <Grid container direction={'column'}>
                <Grid item>
                  <Link href='#'>
                    {' '}
                    <b>Category 1</b>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='#'>
                    {' '}
                    <b>Category 2</b>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='#'>
                    {' '}
                    <b>Category 3</b>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction={'column'} justify={'flex-start'}>
            <Grid item>
              <Typography variant='h3'>
                {' '}
                <b>Product List</b>
              </Typography>
            </Grid>
            <Grid item>
              <ImageCard images={ProductImage} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </>
);
export default withStyles(styles)(Products);
