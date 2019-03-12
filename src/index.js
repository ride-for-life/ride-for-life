import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PhoneNumber from './PhoneNumber/';
import App from './App'
import * as serviceWorker from './serviceWorker';
import { UserContextProvider } from './UserContext';
import SignUpPage from './SignUpPage'
import App from './App'
import Map from './Map'

ReactDOM.render(<UserContextProvider><App /></UserContextProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
