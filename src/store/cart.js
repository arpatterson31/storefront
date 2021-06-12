let initialState = {
  cart: []
}

export default function cartReducer(state = initialState, action) {
  let { type, payload } = action;

  switch(type) {
    case 'ADD_TO_CART':
      return {...state, cart: [...state.cart, payload]}

    case 'REMOVE_FROM_CART':
      return [...state.filter((item, idx) => {
        if (idx !== payload.idx) {
            return item;
        }
    })]

    default:
      return state;
  }
}

export const decrementRemoteData = (data) => dispatch => {
  data.count--;
  return superagent.put(`${api}/${data._id}`).send(data)
    .then(response => {
      dispatch(addtoCart(response.body));
    })
}

export const incrementRemoteData = (data, idx) => dispatch => {
  data.count++;
  return (await superagent.put(`${api}/${data._id}`)).send(data)
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

export const removeFromCart = (product) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: { product, idx }
  }
}