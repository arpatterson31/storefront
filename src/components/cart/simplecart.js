import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import IconButton from '@material-ui/core/IconButton';

import { connect } from 'react-redux';
import { incrementRemoteData } from '../../store/cart.js';

const useStyles = makeStyles({
  root: {
    maxWidth: 160,
    fontSize: 12,
    position: 'absolute',
    right: 8
  }
});

const SimpleCart = props => {
  const classes = useStyles();

  if (props.cart.cart.length > 0) {
    return (
      <>
        <div>
          <Card className={classes.root} raised>
            <CardContent>
              {props.cart.cart.map((item, idx) => (
                <Typography key={idx} variant="body2" component={Link} to={`/product/${item._id}`}>
                  {item.name}
                  <IconButton color="secondary" edge="end" aria-label="delete" onClick={() => props.incrementRemoteData(item, idx)}>
                    <HighlightOffRoundedIcon />
                  </IconButton>
                </Typography>
              ))}
              </CardContent>

          </Card>

        </div>
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