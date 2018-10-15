import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import 'babel-polyfill';
import { Provider } from 'react-redux';
import { store, history } from './store';
import { routes } from './routes';
import { ConnectedRouter } from 'connected-react-router';
import './assets/styles/style';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
   <Provider store={store}>
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
   </Provider>
   ,
 document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
	