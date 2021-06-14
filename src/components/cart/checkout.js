import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import GridList from '@material-ui/core/GridList';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  container: {
    margin: "auto",
    flexGrow: 1
  },
  title: {
    flex: '1 1 100%',
    margin: "20px 0 10px 5px",
    padding: "10px"
  },
  items: {
    margin: "0 0 5px 15px"
  },
  totals: {
    margin: "0 0 5px 15px"
  },
  gridList: {
    width: 150,
    height: 400,
  },
  gridList2: {
    width: 150,
    height: 400
  },
  button: {
    marginTop: "5vh",
    marginLeft: "20vw",
    marginBottom: "5vh"

  }
}));

const ShoppingCart = props => {
  const classes = useStyles();

  const cartTotal = (arr) => {
    let cartTotal = 0;
    for (let i = 0; i < arr.length; i++) {
      cartTotal = cartTotal + arr[i].price
    }
    return Number.parseFloat(cartTotal).toFixed(2);
  }

  const thanks = () => {
    alert('Thank you for your purchase!');
  }

  let total = cartTotal(props.cart.cart);

  return (
    <>

      <Container className={classes.container}>
        <Paper className={classes.paper}>

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
              <Typography style={{ fontWeight: "bold" }} variant="body1" align="right">${total}</Typography>
            </Grid>
          </Grid>

          <div style={{ display: "grid", gridTemplateColumns: "auto auto auto auto" }}>
            <GridList className={classes.gridList} cols={1}>
              <form noValidate autoComplete="off" className={classes.form}>
                <Typography style={{ margin: "45px 0 5px 15px" }} variant="body1">Billing Address</Typography>
                <TextField style={{ marginLeft: "15px" }} id="full-name" label="Full Name" />
                <TextField style={{ marginLeft: "15px" }} id="address" label="Address" />
                <TextField style={{ marginLeft: "15px" }} id="city" label="City" />
                <TextField style={{ marginLeft: "15px" }} id="state" label="State" />
                <TextField style={{ marginLeft: "15px" }} id="zip" label="Zip" />
              </form>
            </GridList>

            <GridList className={classes.gridList2} cols={1}>
              <form noValidate autoComplete="off" className={classes.form}>
                <Typography style={{ margin: "45px 0 5px 0" }} variant="body1">Payment Details</Typography>
                <TextField id="credit-card" label="Credit Card #" />
                <TextField
                  id="expiration"
                  label="Expiration"
                  type="date"
                  defaultValue="mm/dd/yyyy"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{ width: 140}}
                />
                <TextField id="cvv" label="CVV" />
              </form>
            </GridList>
          </div>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={thanks}
          >
            Place Your Order
          </Button>
        </Paper>

      </Container>
    </>
  )
}

const mapStateToProps = state => ({
  cart: state.cart,
})


export default connect(mapStateToProps)(ShoppingCart);