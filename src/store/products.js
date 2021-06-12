let initialState = {
  products: [],
}

export default function productReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'GET':
      return { ...state, products: payload }

    case 'LOAD_PRODUCTS':
      return { ...state, products: payload }

    case 'ACTIVATE':
      const activeProducts = getFilteredProducts(payload.category);
      return { ...state, products: activeProducts }

    case 'ADD_TO_CART':
      let stock = state.products.map(item => {
        if (item.name === payload.name) {
          return { ...item, count: payload.count - 1 }
        } else {
          return item;
        }
      });

      return { ...state, products: stock }

    default:
      return state;
  }
}


export const getFilteredProducts = (category) => {
  const products = initialState.products;
  const filteredProducts = products.filter(product => product.category === category);
  return filteredProducts;
}

export const getActive = (category) => {

  return {
    type: 'ACTIVATE',
    payload: category
  }
}

export const allProducts = () => {
  return {
    type: 'ALL_PRODUCTS'
  }
}

export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product
  }
}