import React from 'react';
import axios from 'axios';

const EditProfile = props => {

  const driverEdit = () => {
    const id = 1;
    const changes = {};
    axios.put(`https://rideforlife.herokuapp.com/api/drivers/${id}`, changes)
      .then(result => {console.log(result)})
      .catch(error => {console.log(error)})
  };

  return (
    <div>
      <button onClick={driverEdit}>Test Edit</button>
    </div>
  );
};

export default EditProfile;
