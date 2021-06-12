import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import * as actions from '../../store/actions.js';

import { addToCart } from '../../store/cart.js';
import { isDoExpression } from '@babel/types';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    flexGrow: 1,
    padding: theme.spacing(2)
  },
}));

const Products = props => {
  const classes = useStyles();

  const fetchData = (e) => {
    e && e.preventDefault();
    props.get();
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log('PROPS API', props.productAPI);
  return (
    <section>
      <Typography align="center" variant="h3">{props.categories.activeCategory}</Typography>
      <Typography align="center" variant="subtitle1" style={{ marginBottom: "60px" }}>{props.categories.activeCatDescription}</Typography>

      <Grid container justify="center" spacing={4}>
        {props.productAPI.products.map((item, idx) => {
          if (item.category === props.categories.activeCategory)
          return (
          <Grid item key={idx}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={item.image}
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
          )
        })}

      </Grid>

    </section>
  )
}

const mapStateToProps = state => ({
  products: state.products,
  categories: state.categories,
  cart: state.cart,
  productAPI: state.productAPI
})

const mapDispatchToProps = (dispatch, getState) => ({ 
  get: () => dispatch(actions.getRemoteData()),
  addToCart: (item) => dispatch(addToCart(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);