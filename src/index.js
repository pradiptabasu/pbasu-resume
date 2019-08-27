import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/index.css';
import './styles/styles.css';
import './styles/App.css';

import CV from './components/CV';
import Data from './content';
import Export from './components/Export';
import NavBar from './components/navigationbar/NavBar';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <CV {...Data} />
  </Provider>,
  global.document.getElementById('root'),
);


ReactDOM.render(
  <Provider store={store}>
    <NavBar />
  </Provider>,
  global.document.getElementById('nav-bar'),
);


// ReactDOM.render(
//   <Provider store={store}>
//     <Export>
//       <CV {...Data} />
//     </Export>
//   </Provider>,
//   global.document.getElementById('root'),
// );

// ReactDOM.render(
//   <ul className="navBar">
//     <li><a className="active" href="#home">English</a></li>
//     <li><a href="#news">Deutsch</a></li>
//     <li><a href="#contact">Download</a></li>
//     <li style={{ float: "right" }} ><a href="#about">About</a></li>
//   </ul>,
//   global.document.getElementById('nav-bar'),
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
