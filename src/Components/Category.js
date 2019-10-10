import React from 'react';
import { Grid, createStyles, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = () =>
  createStyles({
    background: {
      background: '#EFE3D4'
    },
    itemWidth: {
      width: '100%'
    },
    conatinerPadding: {
      padding: '96px'
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
            FEATURE PRODUCTS
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant={'h4'}>Designed with you in mind.</Typography>
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
                      'https://smartkaya.com/wp-content/themes/kaya/img/feat-materials.jpg '
                    }
                  />
                </Grid>
                <Grid item>
                  <Typography variant={'h6'}>Premium Material</Typography>
                </Grid>
                <Grid item className={classes.fontcolor}>
                  Kaya is designed to blend in beautifully with your home. All
                  the fabrics and <br /> materials have been carefully selected
                  for aesthetics and the best audio <br /> performance.
                </Grid>
                <Grid item>
                  <img
                    className={classes.imgWidth}
                    src={
                      'https://smartkaya.com/wp-content/themes/kaya/img/feat-construction.jpg'
                    }
                  />
                </Grid>
                <Grid item>
                  <Typography variant={'h6'}>Durable construction</Typography>
                </Grid>
                <Grid item className={classes.fontcolor}>
                  We made sure Kaya outlasts all the curious friends. The cloth
                  is made <br /> from hemp fiber crafted by Tanzanian artisans.
                  The inside is built with <br /> industrial graphite-light and
                  powerful. The base is made of African wood, <br /> sourced
                  carefully from local cooperatives.
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction={'column'}>
                <Grid item>
                  <img
                    className={classes.imgWidth}
                    src='https://smartkaya.com/wp-content/themes/kaya/img/ring-light-anim.gif'
                  />
                </Grid>
                <Grid item>
                  <Typography variant={'h6'}>Ring light</Typography>
                </Grid>
                <Grid item className={classes.fontcolor}>
                  See the status of your Kaya with the simple lights on the
                  crown of your
                  <br /> device. It’ll help you know when your smart speaker is
                  pairing, listening, <br /> thinking, and speaking. When you
                  want to turn your speaker off, simply <br /> hold the Kaya
                  logo LED button.
                </Grid>
                <Grid item>
                  <img
                    className={classes.imgWidth}
                    height={'586'}
                    src={
                      'https://smartkaya.com/wp-content/themes/kaya/img/feat-design.jpg'
                    }
                  />
                </Grid>
                <Grid item>
                  <Typography variant={'h6'}>Made to work together</Typography>
                </Grid>
                <Grid item className={classes.fontcolor}>
                  See the status of your Kaya with the simple lights on the
                  crown of your
                  <br /> device. It’ll help you know when your smart speaker is
                  pairing, listening, <br /> thinking, and speaking. When you
                  want to turn your speaker off, simply <br /> hold the Kaya
                  logo LED button.
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Fab color='secondary' aria-label='add'>
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </Container>
  </>
);
export default withStyles(styles)(Category);
