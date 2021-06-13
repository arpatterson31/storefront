import superagent from 'superagent';

let api = 'https://audrey-api-server.herokuapp.com/products';

let initialState = {
  cart: []
}

export default function cartReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, payload] }

    case 'REMOVE_FROM_CART':
      let cart = [...state.cart]
      let removedItem = payload.idx;
      cart.splice(removedItem, 1);

      return { cart };

    default:
      return state;
  }
}

export const decrementRemoteData = (data) => dispatch => {
  data.count--;
  return superagent.put(`${api}/${data._id}`).send(data)
    .then(response => {
      dispatch(addToCart(response.body));
    })
}

export const incrementRemoteData = (data, idx) => dispatch => {
  data.count++;
  return superagent.put(`${api}/${data._id}`).send(data)
    .then(response => {
      dispatch(removeFromCart(response.body, idx));
    })
}

export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product
  }
}

export const removeFromCart = (product, idx) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: { product, idx }
  }
}