import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Header from './Header';
const Products = ({ classes }) => (
  <Container>
    <Grid container>
      <Grid item>
        <Header></Header>
      </Grid>
    </Grid>
  </Container>
);
export default Products;
