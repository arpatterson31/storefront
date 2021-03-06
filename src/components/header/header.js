import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "white"
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 2px',
  },
}))(Badge);

const Header = (props) => {
  const classes = useStyles();
  
  return (
    <>
  
      <header className={classes.root}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography 
            component={Link} to="/"
            variant="h6" className={classes.title}>
              Audrey's Wares
          </Typography>
            <IconButton aria-label="cart">
              <StyledBadge 
              badgeContent={props.cart.cart.length} 
              showZero 
              color="primary"
              component={Link} to="/cart" style={{ textDecoration: "none", color: "black" }}
              >
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </header>
    </>
  )
}

const mapStateToProps = state => ({
  cart: state.cart
})


export default connect(mapStateToProps)(Header);