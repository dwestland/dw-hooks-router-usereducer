import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// Show spinner while loading
const loader = document.querySelector('.loader');
// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('loader--hide');
const hideLoader = () => loader.classList.add('loader--hide');

ReactDOM.render(
  <App
    hideLoader={hideLoader}
    showLoader={showLoader}  
  />, document.getElementById('root')
);

serviceWorker.register();
