import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/index.js';
import App from './app.js';

const Main = () => {
  return(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const root = document.getElementById('root');
ReactDOM.render(<Main />, root);