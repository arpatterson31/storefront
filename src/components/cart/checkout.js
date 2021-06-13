import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  container: {
    margin: "auto",
    width: "50%"
  },
  title: {
    flex: '1 1 100%',
    margin: "20px 0 10px 5px",
    padding: "10px"
  },
  items: {
    margin: "0 0 5px 5px"
  },
  totals: {
    margin: "0 0 5px 5px"
  }

}));

const ShoppingCart = props => {
  const classes = useStyles();

  const cartTotal = (arr) => {
    let cartTotal = 0;
    for (let i = 0; i < arr.length; i++) {
      cartTotal = cartTotal + arr[i].price
    }
    return cartTotal;
  }

  let total = cartTotal(props.cart.cart);

  return (
    <>

      <Container className={classes.container}>
        <Paper>

          <Typography className={classes.title} variant="h6" component="div">
            Order Summary
            </Typography>
          {props.cart.cart.map((item, idx) => (
            <Grid key={idx} container spacing={1} className={classes.items}>
              <Grid item xs={8}>
                <Typography variant="body2">{item.name}</Typography>
              </Grid>

              <Grid item xs={3}>
                <Typography variant="body2" align="right">${item.price}</Typography>
              </Grid>
            </Grid>
          ))}
          <Grid container spacing={1} className={classes.totals}>
          <Grid item xs={8}>
            <Typography variant="body1">Total: </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography style={{fontWeight: "bold"}} variant="body1" align="right">${total}</Typography>
          </Grid>
          </Grid>



        </Paper>

    </Container>
    </>
  )
}

const mapStateToProps = state => ({
  cart: state.cart,
})


export default connect(mapStateToProps)(ShoppingCart);