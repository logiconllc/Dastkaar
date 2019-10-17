import React from 'react';
import { Grid, createStyles, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Routes from '../Utils/Routes';
import { Link } from 'react-router-dom';
import Cat1 from '../Images/cat1.jpg'
import Embroidery from '../Images/embroidery.jpg'
import Souvenir from '../Images/souvenir.jpg'
import Furniture from '../Images/furniture.jpg'

const styles = () =>
  createStyles({
    background: {
      background: '#EFE3D4'
    },
    itemWidth: {
      width: '100%'
    },
    conatinerPadding: {
      paddingTop: '97px',
      paddingBottom: '97px'
    },
    featureColor: {
      color: '#c57859'
    },
    fontcolor: {
      color: '#888888',
      paddingBottom: '36px',
      paddingTop: '16px'
    },
    imgWidth: {
      width: '600px'
    }
  });

const Category = ({ classes }) => (
  <>
    <Container maxWidth='xl' className={classes.background}>
      <Grid
        container
        justify={'center'}
        alignItems={'center'}
        direction={'column'}
        spacing={1}
        className={classes.conatinerPadding}
      >
        <Grid item>
          <Typography variant={'subtitle1'} className={classes.featureColor}>
            CATEGORIES
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant={'h4'}>Our Hand Picked Stuff</Typography>
        </Grid>

        <Grid item className={classes.itemWidth}>
          <Grid
            container
            direction={'row'}
            justify={'center'}
            spacing={8}
            className={classes.conatinerPadding}
          >
            <Grid item>
              <Grid container direction={'column'}>
                <Grid item>
                  <img
                    className={classes.imgWidth}
                    src={
                      Cat1
                    }
                    alt='Category-1'
                  />
                </Grid>
                <Grid item>
                  <Typography variant={'h6'}>Not Just Clay</Typography>
                </Grid>
                <Grid item className={classes.fontcolor}>
                  Clay, water and heat combined with the hands turned the most
                  fundamentals <br/> elements on earth into something mesmerizing
                </Grid>
                <Grid item>
                  <img
                    className={classes.imgWidth}
                    src={
                      Furniture
                    }
                    alt='Furniture'
                  />
                </Grid>
                <Grid item>
                  <Typography variant={'h6'}>Crafture</Typography>
                </Grid>
                <Grid item className={classes.fontcolor}>
                  "Hands meet wood" means such a craftsmanship that would define new <br/>
                  definition of comfortable. Additionally, the designs would keep your heart <br/>
                  at peace because you would know that, you bought the right thing.
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction={'column'}>
                <Grid item>
                  <img
                    className={classes.imgWidth}
                    src={
                      Embroidery
                    }
                    alt='embroidery'
                  />
                </Grid>
                <Grid item>
                  <Typography variant={'h6'}>Fabroidery</Typography>
                </Grid>
                <Grid item className={classes.fontcolor}>
                  Fabric, Embroidery and Fabulous. We only need these three <br/>
                  words to describe this category. The hands' subtle movements <br/>
                  turn an ordinary fabric into something which would make you awe.
                </Grid>
                <Grid item>
                  <img
                    className={classes.imgWidth}
                    height={'386'}
                    src={
                      Souvenir
                    }
                    alt='Souvenir'
                  />
                </Grid>
                <Grid item>
                  <Typography variant={'h6'}>More Than Souvenirs</Typography>
                </Grid>
                <Grid item className={classes.fontcolor}>
                  You buy them, you buy the place. These souvenirs would take <br/>
                  you back the place as if you are really their. The hands' <br/>
                  movements are so eloquent that you could feel their handwork by <br/>
                  just holding them.
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Link to={Routes.Products}>
            <Fab color='secondary' aria-label='add'>
              <AddIcon />
            </Fab>
          </Link>
        </Grid>
      </Grid>
    </Container>
  </>
);
export default withStyles(styles)(Category);
