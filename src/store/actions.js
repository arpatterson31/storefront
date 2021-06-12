import superagent from 'superagent';

let api = 'https://audrey-api-server.herokuapp.com/products';

export const getRemoteData = () => dispatch => {
  return superagent.get(api)
    .then(response => {
      dispatch(getAction(response.body))
    })
}

export const putRemoteData = (data) => dispatch => {
  return superagent.put(`${api}/${data._id}`).send(data)
    .then(response => {
      dispatch(incrementCount(response.body));
    })
}

export const deleteRemoteData = (data) => async dispatch => {
  return (await superagent.put(`${api}/${data._id}`)).send(data)
    .then(response => {
      dispatch(decrementCount(response.body));
    })
}

export const getAction = data => {
  return {
    type: 'GET',
    payload: data
  }
}

export const incrementCount = data => {
  return {
    type: 'INCREMENT_COUNT',
    payload: data
  }
}

export const decrementCount = data => {
  return {
    type: 'DECREMENT_COUNT',
    payload: data
  }
}