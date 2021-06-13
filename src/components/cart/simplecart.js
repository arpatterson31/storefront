import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux';
import { incrementRemoteData } from '../../store/cart.js';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    fontSize: 10,
    position: 'absolute',
    right: 8,

  }
});

const SimpleCart = props => {
  const classes = useStyles();

  if (props.cart.cart.length > 0) {
    return (
      <>
        <Card className={classes.root} raised>
          <CardContent>
            {props.cart.cart.map((item, idx) => (
              <Grid container spacing={3}>
                <Grid item md={8}>
                  <Typography key={idx} variant="body2" display="inline" component={Link} to={`/product/${item._id}`} style={{ textDecoration: "none", color: "black" }}>
                    {item.name}
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <DeleteOutlinedIcon color="secondary" edge="end" fontSize="small" aria-label="delete" onClick={() => props.incrementRemoteData(item, idx)} />
                </Grid>
              </Grid>
            ))}
          </CardContent>
        </Card>
      </>
    )
  } else {
    return (
      <>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = { incrementRemoteData }

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);