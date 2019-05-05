import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.less';
import * as serviceWorker from './serviceWorker';
// import { Provider } from 'mobx-react';
// import store from './stores';
import RootRouter from './routes';

ReactDOM.render(
  // <Provider {...store}>
    <RootRouter />
  // </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
