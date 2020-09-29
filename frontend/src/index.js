import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { Router, Route } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
// import Profile from './components/Profile'

// const hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <Router history={hist}>
  //   <Route>
  //     {/* <Route path='/' component={App} /> */}
  //     <App />
  //   </Route>
  // </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
