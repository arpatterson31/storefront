let initialState = {
  category: [
    { name: 'Electronics', displayName: 'ELECTRONICS', description: 'Electronic products' },
    { name: 'Clothes', displayName: 'CLOTHES', description: 'Stuff you wear' },
    { name: 'Food', displayName: 'FOOD', description: 'Things you can eat' },
  ],
  activeCategory: '',
}

export default function catReducer(state = initialState, action){
  let { type, payload } = action;

  switch(type){
    case 'ACTIVATE':
      return {...state, activeCategory: payload};

    case 'INACTIVATE':
      return initialState;

    default: 
      return state;
  }
}

export const activate = (category) => {
  return {
    type: 'ACTIVATE',
    payload: category
  }
}

export const inactivate = () => {
  return {
    type: 'INACTIVATE'
  }
}
