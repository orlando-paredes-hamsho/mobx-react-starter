// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
// Relative imports
import App from './components/app';
import store from './models/UserStore';

ReactDOM.render(<App store={store} />, document.querySelector('.container'));
