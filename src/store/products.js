let initialState = {
  products: [
    { name: 'Samsung TV', category: 'Electronics', description: '55 inch television', price: 999, count: 2021, image: 'https://images.unsplash.com/photo-1593784991251-92ded75ea290?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80' },
    { name: 'iPhone 12', category: 'Electronics', description: 'The latest and greatest', price: 699, count: 200, image: 'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1360&q=80' },
    { name: 'ChromeBook', category: 'Electronics', description: 'Basic laptop', price: 399, count: 800, image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1236&q=80' },
    { name: 'T-Shirt', category: 'Clothes', description: 'T-shirt', price: 10, count: 250, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=716&q=80' },
    { name: 'Hoodie', category: 'Clothes', description: 'It will keep you warm', price: 15, count: 500, image: 'https://images.unsplash.com/photo-1526476148966-98bd039463ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { name: 'Fancy Shoes', category: 'Clothes', description: 'These are for sure not knock-offs', price: 70, count: 300, image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' },
    { name: 'Taco', category: 'Food', description: 'Best in town!', price: 5, count: 250, image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1671&q=80' },
    { name: 'Apple', category: 'Food', description: 'Light, healthy, crunchy', price: 2, count: 25, image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' },
    { name: 'Pizza', category: 'Food', description: 'Its pizza!', price: 5, count: 30, image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' },
  ],
  activeProducts: []
}

export default function productReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'ALL_PRODUCTS':
      return state.products

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

      return {...state, products: stock }

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
    type: 'ALL_PRODUCTS'
  }
}

export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product
  }
}