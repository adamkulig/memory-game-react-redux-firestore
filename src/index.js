
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker.js';
import 'bootstrap/dist/css/bootstrap.min.css';
//redux
import { Provider } from 'react-redux'
import store from './store/store';

//components
import App from './containers/App';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
