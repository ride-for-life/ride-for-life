import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PhonePage from './PhonePage';
import * as serviceWorker from './serviceWorker';
import { UserContextProvider } from './UserContext';

ReactDOM.render(<UserContextProvider><PhonePage /></UserContextProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
