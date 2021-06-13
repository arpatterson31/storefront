import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles } from '@material-ui/core/styles';

import { decrementRemoteData } from '../../store/cart.js';



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 450,
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  container: {
    margin: "auto",
    width: "max-content"
  },
  button: {
    maxWidth: 450,
    flexGrow: 1,
    padding: theme.spacing(2),
    margin: "0 0 55px"
  },
  header: {
    margin: "45px 0 0"
  },
  sub: {
    margin: "0 0 30px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: "15px 0 15px"
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const ProductDetails = props => {
  const classes = useStyles();

  // console.log('products?', props.productAPI.products);
  let { id } = useParams();

  let product = props.productAPI.products.filter((item) => item._id === id)[0];
  console.log('filtered product?', product);

  return (
    <>
      <Typography className={classes.header} align="center" color="textPrimary" variant="h3">
        {product.name}
      </Typography>
      <Typography className={classes.sub} align="center" variant="h5" color="textSecondary">
        {product.description}
      </Typography>

      <Container className={classes.container} >
        <Card className={classes.card}>
          <CardMedia
            component="img"
            image={product.image}
            title={product.name}
          />
          <CardContent>
            <Typography align="left" gutterBottom variant="caption" color="textSecondary">
              In Stock: {product.count}
            </Typography>
            <Typography style={{ float: "right" }} align="right" gutterBottom variant="caption" color="Secondary">
              ${product.price}
            </Typography>
          </CardContent>
        </Card>

        <Button
          fullWidth
          color="primary"
          className={classes.button}
          startIcon={<AddShoppingCartIcon />}
          onClick={() => props.addToCart(product)}
        >
          Buy
      </Button>

        <Typography variant="h5">Related Items</Typography>

        <Grid container spacing={0}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Suggestion 1</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Suggestion 2</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Suggestion 3</Paper>
          </Grid>
        </Grid>

        <Typography variant="h5">Product Details</Typography>


        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Specifications</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {product.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>User Reviews</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Great product..will purchase again!
          </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>


    </>
  )
}

const mapStateToProps = state => ({
  products: state.products,
  categories: state.categories,
  cart: state.cart,
  productAPI: state.productAPI
})

const mapDispatchToProps = (dispatch, getState) => ({
  addToCart: (product) => dispatch(decrementRemoteData(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);