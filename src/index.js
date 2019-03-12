import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PhoneNumber from './PhoneNumber/';
import * as serviceWorker from './serviceWorker';
import { UserContextProvider } from './UserContext';
import { BrowserRouter as Router } from 'react-router-dom'
import PhonePage from './PhonePage'
import SignUpPage from './SignUpPage'
import App from './App'
import Map from './Map'

ReactDOM.render(<UserContextProvider><Router><App /></Router></UserContextProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
