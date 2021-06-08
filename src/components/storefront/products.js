import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';

import { activate, inactivate } from '../../store/categories.js';
import { getFilteredProducts, allProducts } from '../../store/products.js';
import { addToCart } from '../../store/cart.js';

const Products = props => {
  return (
    <section>
      <Typography align="center" variant="h3">{props.categories.activeCategory}</Typography>
      <Typography align="center" variant="subtitle1" style={{marginBottom: "60px"}}>{props.categories.activeCatDescription}</Typography>
    
        <Grid container justify="center" spacing={4}>
          {props.products.activeProducts.map(item => (
            <Grid item key={item.name}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    title={item.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <IconButton 
                  onClick={() => props.addToCart(item)} 
                  color="primary" 
                  aria-label="add to shopping cart"
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                  <Button size="small" color="primary">
                    View Details
                  </Button>   
                </CardActions>
              </Card>
            </Grid>
          ))}

        </Grid>

    </section>
  )
}

const mapStateToProps = state => ({
  products: state.products,
  categories: state.categories,
  cart: state.cart
})

const mapDispatchToProps = { addToCart }

export default connect(mapStateToProps, mapDispatchToProps)(Products);