import React from 'react';

const EditProfile = props => {

  const driverEdit = () => {
    const id = 1;
    const changes = {};
    axios.put(`https://riderforlife.herokuapp.com/api/drivers/${id}`, changes)
  };

  return (
    <div>
      <button onClick={driverEdit}>Test Edit</button>
    </div>
  );
};

export default EditProfile;
