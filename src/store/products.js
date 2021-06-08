let initialState = {
  products: [
    { name:'Samsung TV', category: 'Electronics', description: '55 inch television', price: 999, count: 2021 },
    { name: 'iPhone 12', category: 'Electronics', description: 'smart phone', price: 699, count: 200 },
    { name: 'ChromeBook', category: 'Electronics', description: 'laptop', price: 399, count:800 },
    { name: 'T-Shirt', category: 'Clothes', description: 't-shirt', price: 10, count: 250 },
    { name: 'Hoodie', category: 'Clothes', description: 'keeps you warm', price: 15, count: 500 },
    { name: 'Fancy Shoes', category: 'Clothes', description: 'not knock-offs', price: 70, count: 300 },
    { name: 'Taco', category: 'Food', description: 'great', price: 5, count: 250 },
    { name: 'Apple', category: 'Food', description: 'healthy', price: 2, count: 25 },
    { name: 'Pizza', category: 'Food', description: 'its pizza!', price: 5, count: 30 },
  ],
  activeProducts: []
}

export default function productReducer(state = initialState, action) {
  let { type, payload } = action;

  switch(type) {
    case 'ALL PRODUCTS':
      return state.products

    case 'ACTIVATE':
      const activeProducts = getFilteredProducts(payload.category);
      return {...state, activeProducts: activeProducts }

    default: 
      return state;
  }
}

export const getFilteredProducts = (category) => {
  const products = initialState.products;
  const filteredProducts = products.filter(product => product.category === category);
  return filteredProducts;
}

export const allProducts = () => {
  return {
    type: 'ALL PRODUCTS'
  }
}