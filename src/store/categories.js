let initialState = {
  category: [
    { name: 'Electronics', displayName: 'ELECTRONICS', description: 'Electronic products' },
    { name: 'Clothes', displayName: 'CLOTHES', description: 'Stuff you wear' },
    { name: 'Food', displayName: 'FOOD', description: 'Things you can eat' },
  ],
  activeCategory: '',
  activeCatDescription: ''
}

export default function catReducer(state = initialState, action){
  let { type, payload } = action;

  switch(type){
    case 'ACTIVATE':
      return {...state, activeCategory: payload.category, activeCatDescription: payload.description};

    case 'INACTIVATE':
      return initialState;

    default: 
      return state;
  }
}

export const activate = (category, description) => {
  return {
    type: 'ACTIVATE',
    payload: {
      category,
      description
    }
  }
}

export const inactivate = () => {
  return {
    type: 'INACTIVATE'
  }
}
