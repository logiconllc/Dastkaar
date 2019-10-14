import React from 'react';
import { createStyles, withStyles, Container, Grid } from '@material-ui/core';

const styles = () =>
  createStyles({
    backgorund: {
      backgroundImage: props => 'url(' + props.productImage + ')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      height: '550px',
      width: '382px',
      backgroundColor: 'antiquewhite',
      backgroundPosition: 'center'
    }
  });

const ImageCard = ({ classes }) => (
  <>
    <Container>
      <Grid container className={classes.backgorund}></Grid>
    </Container>
  </>
);

export default withStyles(styles)(ImageCard);
