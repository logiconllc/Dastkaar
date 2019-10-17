import React from 'react';
import { Typography, Grid } from '@material-ui/core';

class VariantComponent extends React.Component {
  increment = () => {
    this.props.parentCallback('increment');
  };
  decrement = () => {
    this.props.parentCallback('decrement');
  };

  render() {
    return (
      <div>
        <Grid
          item
          container
          direction={'row'}
          justify={'space-around'}
          style={{ letterSpacing: '12px' }}
        >
          <Grid item>
            <Typography
              variant={'h6'}
              style={{ cursor: 'pointer' }}
              onClick={this.increment}
            >
              +
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={'h6'}>{this.props.count}</Typography>
          </Grid>
          <Grid item>
            <Typography
              variant={'h6'}
              style={{ cursor: 'pointer' }}
              onClick={this.decrement}
            >
              -
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default VariantComponent;
