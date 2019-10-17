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
import ImageCard from '../Components/ImageCard';
import ProductImage2 from '../Images/productImage2.jpg';
import ProductImage3 from '../Images/productImage3.jpg';
import ProductImage5 from '../Images/productImage5.jpg';
import ProductImage6 from '../Images/productImage6.jpg';
import ProductImage4 from '../Images/productImage4.jpg';
import ProductImage7 from '../Images/productImage7.jpg';
import Footer from '../Components/Footer';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Routes from '../Utils/Routes';
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
    },
    fabIcon: {
      paddingTop: '9%',
      paddingRight: '12%'
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
        <Grid item xs={4}>
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
                    <b>Not Just Clay</b>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='#'>
                    <b>Crafture</b>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='#'>
                    <b>Fabroidery</b>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Grid container direction={'column'} justify={'flex-start'}>
            <Grid item>
              <Typography variant='h3'>
                <b>More Than Souvenirs</b>
              </Typography>
            </Grid>
            <Grid item>
              <Grid container direction={'row'} spacing={2}>
                <Grid item>
                  <ImageCard productImage={ProductImage2} />
                </Grid>
                <Grid item>
                  <ImageCard productImage={ProductImage3} />
                </Grid>
                <Grid item>
                  <ImageCard productImage={ProductImage6} />
                </Grid>
                <Grid item>
                  <ImageCard productImage={ProductImage5} />
                </Grid>
                <Grid item>
                  <ImageCard productImage={ProductImage7} />
                </Grid>
                <Grid item>
                  <ImageCard productImage={ProductImage4} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              alignItems={'center'}
              justify={'center'}
              className={classes.fabIcon}
            >
              <Grid item>
                <Link to={Routes.Products}>
                  <Fab color='secondary' aria-label='add'>
                    <AddIcon />
                  </Fab>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
    <Footer />
  </>
);
export default withStyles(styles)(Products);
