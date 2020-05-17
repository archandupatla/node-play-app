import React from 'react';
import ReactDOM from 'react-dom';
import {Auth0Provider} from './context/auth0-context';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import RootReducer from './store/reducer';
const store =createStore(RootReducer);

ReactDOM.render(
  <Auth0Provider>
    <Provider store={store}>
    <App />
    </Provider>
    </Auth0Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
