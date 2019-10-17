import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  createStyles,
  withStyles,
  Box,
  Button
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import ProductImage from '../Images/productImage.png';
import Header from '../Components/Header';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Footer from '../Components/Footer';
import VariantComponent from '../Components/QuantityVariant';
import ProductVideo from '../Components/ProductVideo';
const styles = () =>
  createStyles({
    background: {
      backgroundColor: '#EFE3D4'
    },
    imageSize: {
      top: '49%',
      left: '16%',
      width: '35%',
      position: 'relative'
    },
    conatinerPadding: {
      paddingTop: '47%',
      paddingLeft: '11%'
    },
    gridPadding: {
      paddingTop: '10%'
    },
    typograpgyHieght: {
      lineHeight: '27px'
    },
    root: {
      width: '88%',
      paddingTop: '12%'
    },
    heading: {
      flexBasis: '33.33%',
      flexShrink: 0
    },
    bottomPadding: {
      paddingBottom: '12%'
    },
    productHeading: {
      position: 'absolute',
      top: '17%',
      left: '30%',
      fontWeight: 'bolder'
    },
    forAddCartPrice: {
      justifyContent: 'center',
      paddingLeft: '30%',
      borderBottomStyle: 'solid'
    },
    AddtoCart: {
      paddingRight: '20%'
    },
    Qoute: {
      width: 'fit-content'
    },
    QouteFont: {
      width: '49%'
    },
    Font: {
      fontFamily: 'sabon-pro',
      fontSize: '32px'
    }
  });
const AddToCart = ({ classes }) => {
  const [value, setValue] = React.useState(2);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [count, setCount] = useState(0);

  const callbackFunction = childData => {
    if (childData === 'increment') {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <Header></Header>
      <Container maxWidth={'xl'}>
        <Grid container className={classes.bottomPadding}>
          <Grid item xs={8} className={classes.background}>
            <Grid container>
              <Grid item className={classes.productHeading}>
                <Typography variant={'h2'}>
                  <b>Essential Oil Burner - White Marble</b>
                </Typography>
              </Grid>
              <Grid item container justify={'center'}>
                <Grid item>
                  <img src={ProductImage} className={classes.imageSize} />
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction={'column'}
                    className={classes.AddtoCart}
                  >
                    <Grid item className={classes.forAddCartPrice}>
                      <Typography variant={'h6'}>
                        $270{' '}
                        <span>
                          <Typography variant={'caption'}>USD</Typography>
                        </span>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <VariantComponent
                        parentCallback={callbackFunction}
                        count={count}
                      />
                    </Grid>
                    <Grid item>
                      <Button variant='contained' color={'secondary'}>
                        Add To Cart
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid
              container
              className={classes.conatinerPadding}
              direction={'column'}
            >
              <Grid item>
                <Box component='fieldset' mb={3} borderColor='transparent'>
                  <Typography component='legend' variant={'caption'}>
                    REVIEWS
                  </Typography>
                  <Rating
                    name='simple-controlled'
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
              </Grid>
              <Grid item className={classes.gridPadding}>
                <Typography
                  className={classes.typograpgyHieght}
                  variant={'subtitle2'}
                >
                  <b>KEY INGREDIENTS</b>
                </Typography>
              </Grid>
              <Grid item className={classes.gridPadding}>
                <Typography
                  className={classes.typograpgyHieght}
                  variant={'subtitle2'}
                >
                  The Essential Oil Burner by Page Thirty Three draws reference{' '}
                  <br />
                  to a classic yet refined science them. The height of the clamp{' '}
                  <br />
                  is adjustable, so the scientist can personalize to suit the
                  size <br /> and strength of the candle and liquid.
                </Typography>
              </Grid>
              <Grid item className={classes.gridPadding}>
                <Typography
                  className={classes.typograpgyHieght}
                  variant={'subtitle2'}
                >
                  • Designed & Handcrafted in Australia <br /> • Dimensions: 260
                  H x 210 W x 125 D mm
                </Typography>
              </Grid>
              <Grid item>
                <Grid container className={classes.root}>
                  <Grid item>
                    <ExpansionPanel
                      expanded={expanded === 'panel1'}
                      onChange={handleChange('panel1')}
                    >
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1bh-content'
                        id='panel1bh-header'
                      >
                        <Typography
                          variant={'caption'}
                          className={classes.heading}
                        >
                          <b>INGREDIENTS</b>
                        </Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Typography>
                          Donec placerat, lectus sed mattis semper, neque lectus
                          feugiat lectus, varius pulvinar diam eros in elit.
                          Pellentesque convallis laoreet laoreet.
                        </Typography>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </Grid>
                  <Grid item>
                    <ExpansionPanel
                      expanded={expanded === 'panel2'}
                      onChange={handleChange('panel2')}
                    >
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel2bh-content'
                        id='panel2bh-header'
                      >
                        <Typography
                          variant={'caption'}
                          className={classes.heading}
                        >
                          <b>DIRECTIONS</b>
                        </Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Typography>
                          Donec placerat, lectus sed mattis semper, neque lectus
                          feugiat lectus, varius pulvinar diam eros in elit.
                          Pellentesque convallis laoreet laoreet.
                        </Typography>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <ProductVideo />
      <Footer />
    </>
  );
};
export default withStyles(styles)(AddToCart);
