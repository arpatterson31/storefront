let initialState = {
  products: [],
}

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'GET':
      return {...state, products: payload};

    case 'PUT':
      return payload;

    case 'POST':
      return payload;

    case 'DELETE':
      return payload;

    default:
      return state;
  }
}