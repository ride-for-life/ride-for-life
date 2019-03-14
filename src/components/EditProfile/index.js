import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { authxios, imgxios } from '../auth/';
import { UserContext } from '../UserContext';

const EditProfile = props => {
  const { state, dispatch } = useContext(UserContext);
  const [ selfie, setSelfie ] = useState(null);
  const [ text, setText ] = useState('');
  const [ imgurHash, setImgurHash] = useState('');
  const id = 1;
  const clientID = null;


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

  const fileSelect = event => {
    setSelfie(event.target.files[0]);
  };

  const fileUpload = () => {
    const imgData = new FormData();
    imgData.append('image', selfie, selfie.name);
    imgxios(clientID).post('https://api.imgur.com/3/image', imgData)
      .then(res => {
        console.log(res);
        setImgurHash(res.data.id);
        dispatch({ type: "imageUpdate", payload: res.data.id })
      })
      .catch(err => {
        console.log(err)});
  };

  useEffect(
    () => {
      if (imgurHash !== '') {
      const axiosGet = async () => {
        const changes = {
          vehicle_type: `https://i.imgur.com/${imgurHash}`
        };
        const res = await authxios(state.reactiveToken).put(`https://rideforlife.herokuapp.com/api/drivers/${id}`, changes);
      };
      axiosGet();
    }},
    [imgurHash]
  ); // Why am I using useEffect here? Just refactor this to a function, you silly goose.

  const logTest = event => {
    if (selfie !== null) {
      console.log(selfie.name);
    };
  };

  const editBio = event => {
    event.preventDefault();
    const changes = {
      username: `__${Math.random().toString().slice(2,19)}__${text}`
    };
    console.log(changes);
  };

  const makeRide = {
    console.log("Click!");
    // axios.post(`https://`);
  };

  return (
    <div>
      <input type="file" onChange={fileSelect} />
      <button onClick={logTest}>Test File?</button>
      <button onClick={fileUpload}>Upload File?</button>
      <button onClick={driverEdit}>Test Edit</button>
      <button onClick={driverDelete}>Test Delete</button>
      <button onClick={makeRide}>Test Ride</button>
      <form onSubmit={editBio}>
        <input type="text" name="bio" value={text} onChange={event => setText(event.target.value)}  />
        <button>Test Form?</button>
      </form>
    </div>
  );
};

export default EditProfile;
