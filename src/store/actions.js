import superagent from 'superagent';

let api = 'https://audrey-api-server.herokuapp.com/products';

export const getRemoteData = () => dispatch => {
  return superagent.get(api)
    .then(response => {
      dispatch(getAction(response.body))
    })
}


export const getAction = data => {
  return {
    type: 'GET',
    payload: data
  }
}
