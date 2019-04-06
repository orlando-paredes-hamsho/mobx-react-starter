import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {mainColor} from './constants';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import App from './components/app';
import { dbConfig } from './constants';

firebase.initializeApp(dbConfig);
firebase.auth().signInAnonymously();

export const database = firebase.database();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: mainColor,
    pickerHeaderColor: mainColor
  },
});

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <App />
    </MuiThemeProvider>
	, document.querySelector('.container'));
