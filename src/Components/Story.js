import React from 'react';
import {
  Container,
  Grid,
  Typography,
  createStyles,
  Button,
  Box
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import story from '../Images/stories.jpeg';
import line from '../Images/line.svg';

const styles = () =>
  createStyles({
    conatinerPadding: {
      padding: '96px'
    },
    storyBox: {
      marginLeft: '98px'
    },
    lineBox: {
      padding: '10px'
    },
    storyImage: {
      width: '410px',
      height: '600px'
    }
  });
const Stories = ({ classes }) => (
  <>
    <Container maxWidth='xl'>
      <Grid
        container
        justify={'center'}
        alignItems={'center'}
        direction={'column'}
        className={classes.conatinerPadding}
      >
        <Grid item>
          <Typography variant={'h6'}>STORIES</Typography>
        </Grid>
        <Grid item>
          <img className={classes.lineBox} src={line} />
        </Grid>
        <Grid item>
          <Grid
            container
            justify={'center'}
            alignItems={'center'}
            className={classes.storyBox}
            spacing={4}
          >
            {/* <Typography variant={'h2'} className={classes.storyBlog}>
              Read the handcrafters <span> STORIES </span>
            </Typography> */}
            <Grid item>
              <img src={story} className={classes.storyImage} />
            </Grid>
            <Grid item>
              <Button variant='contained' color={'secondary'}>
                Read Blog
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </>
);
export default withStyles(styles)(Stories);
