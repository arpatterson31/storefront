import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';

import { activate, inactivate } from '../../store/categories.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

const Category = props => {
  const classes = useStyles();

  return (
    <section>
      <Typography variant="h5">Browse our Categories</Typography>
      <div className={classes.root}>
        {props.categories.category.map(cat => (
          <ButtonGroup variant="text" size="small" color="primary" aria-label="text primary button group" key={cat.name}>
            <Button onClick={() => props.activate(cat.name, cat.description)}>{cat.displayName}</Button>
          </ButtonGroup> 
        ))}
      </div>
    </section>
  )
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = { activate, inactivate }

export default connect(mapStateToProps, mapDispatchToProps)(Category);