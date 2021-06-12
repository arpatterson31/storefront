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
import { makeStyles } from '@material-ui/core/styles';

import { addToCart } from '../../store/cart.js';



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 450,
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  button: {
    maxWidth: 450,
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  header: {
    margin: "45px 0 0"
  },
  sub: {
    margin: "0 0 30px"
  }
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

      <Container >
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
  addToCart: (product) => dispatch(addToCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);