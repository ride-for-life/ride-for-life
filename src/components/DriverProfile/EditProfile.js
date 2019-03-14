import React, { useContext } from 'react';
import axios from 'axios';
import { authxios } from '../auth/';
import { UserContext } from '../UserContext';

const EditProfile = props => {
  const { state, dispatch } = useContext(UserContext);
  const id = 10;

  const driverEdit = () => {
    const changes = {
      firstname: "I LOVE EDITS!"
    };
    authxios(state.reactiveToken).put(`https://rideforlife.herokuapp.com/api/drivers/${id}`, changes)
      .then(result => {console.log(result)})
      .catch(error => {console.log(error)})
  };

  const driverDelete = () => {
    authxios(state.reactiveToken).delete(`https://rideforlife.herokuapp.com/api/drivers/${id}`)
      .then(result => {console.log(result)})
      .catch(error => {console.log(error)})
  };

  return (
    <div>
      <button onClick={driverEdit}>Test Edit</button>
      <button onClick={driverDelete}>Test Delete</button>
    </div>
  );
};

export default EditProfile;
