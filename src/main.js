import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import multi from 'redux-multi';
import App from './containers/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, multi)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
