let initialState = {
  products: [],
}

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'GET':
      return {...state, products: payload};

    default:
      return state;
  }
}