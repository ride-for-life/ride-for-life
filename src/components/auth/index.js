import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../UserContext';

export const authxios = token => {

  return axios.create({
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
      }
  });
};
// From one of your Redux containers (components connected to the store), dispatch an action like so:
//
// Copy
// {
//   type: 'LOGIN_SUCCESS',
//   payload: 'eyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NjYwYmQifQ',
// }
//
// import axiosWithAuth from '../../path/to/axiosAuth.js';
// // etc
// axiosWithAuth().get('endpoint.url').then(data => /* do something with the data */);
