import React from 'react';
import {
  createStyles,
  withStyles,
  Container,
  Grid,
  Typography
} from '@material-ui/core';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
const styles = () =>
  createStyles({
    backgorund: {
      backgroundImage: props => 'url(' + props.images + ')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      height: '550px',
      width: '382px',
      backgroundColor: 'antiquewhite'
    }
    // card: {
    //   maxWidth: 345
    // },
    // media: {
    //   height: '140px'
    // }
  });

const ImageCard = ({ classes }) => (
  <>
    <Container>
      <Grid container className={classes.backgorund}></Grid>
    </Container>
  </>
);

// function ImageCard({ classes }) {
//   return (
//     <Card className={classes.card}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image='https://smartkaya.com/wp-content/themes/kaya/img/feat-materials.jpg'
//           title='Contemplative Reptile'
//         />
//       </CardActionArea>
//       {/* <CardActions>
//         <Button size='small' color='primary'>
//           Share
//         </Button>
//         <Button size='small' color='primary'>
//           Learn More
//         </Button>
//       </CardActions> */}
//     </Card>
//   );
// }

export default withStyles(styles)(ImageCard);
