import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { authxios, imgxios } from '../auth/';
import { UserContext } from '../UserContext';
import { Input, Inputs } from '../styles';


import DriverCarousel from '../maps/DriverCarousel';


const EditProfile = props => {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ pass, setPass ] = useState("");
  const [ location, setLocation ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ phone, setPhone ] = useState("");

  const { state, dispatch } = useContext(UserContext);
  const [ selfie, setSelfie ] = useState(null);
  const [ bio, setBio ] = useState('');
  const [ imgurLink, setImgurLink ] = useState('');
  const id = 1;


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

  const imgurKey = process.env.REACT_APP_IMGUR_KEY;

  const fileUpload = () => {
    const imgData = new FormData();
    imgData.append('image', selfie, selfie.name);
    imgxios(imgurKey).post('https://api.imgur.com/3/image', imgData)
      .then(res => {
        console.log(res);
        console.log(res.data.data.link);
        dispatch({ type: "imageUpdate", payload: res.data.data.link });
        setImgurLink(res.data.data.link);
      })
      .catch(err => {
        console.log(err)});
  };

  useEffect(
    () => {
      console.log(imgurLink);
      if (imgurLink !== '') {
      const axiosGet = async () => {
        const changes = {
          vehicle_type: {imgurLink}
        };
        const res = await authxios(state.reactiveToken).put(`https://rideforlife.herokuapp.com/api/drivers/${id}`, changes);
      };
      axiosGet();
    }},
    [imgurLink]
  ); // Why am I using useEffect here? Just refactor this to a function, you silly goose.

  const logTest = event => {
    if (selfie !== null) {
      console.log(selfie.name);
    };
  };

  const editProfile = event => {
    event.preventDefault();
    const changes = {
      location: location
    };
    authxios(state.reactiveToken).put(`https://rideforlife.herokuapp.com/api/drivers/${id}`, changes)
      .then(res => { console.log(res) })
      .catch(err => { console.log(err) })
  };

  const makeRide = () => {
    const requiredData = {
      "driver_id": 1,
      "user_phone": "999999"
    };
    axios.post(`https://rideforlife.herokuapp.com/api/drivers/create-ride`, requiredData)
      .then(res => {
        console.log(res)})
      .catch(err => {
        console.log(err)});
  };

  return (
    <div>
      <input type="file" onChange={fileSelect} />
      <img src={imgurLink} height="300" width="300" />
      <button onClick={logTest}>Test File?</button>
      <button onClick={fileUpload}>Upload File?</button>
      <button onClick={driverEdit}>Test Edit</button>
      <button onClick={driverDelete}>Test Delete</button>
      <button onClick={makeRide}>Test Ride</button>
      <form onSubmit={editProfile}>

      <DriverCarousel />

      <Inputs>
        <Input  style = {{color: "green"}}
                type="text"
                name="firstName"
                value={firstName}
                placeholder="First?"

                onChange={event => setFirstName(event.target.value)}

         />
         <Input  style = {{color: "green"}}
                 type="text"
                 name="lastName"
                 value={lastName}
                 placeholder="Last?"

                 onChange={event => setLastName(event.target.value)}

          />
          <Input style = {{color: "green"}}
                 type="text"
                 name="pass"
                 onChange={event => setPass(event.target.value)}
                 value={pass}
                 placeholder="Pass?"

          />
         <Input style = {{color: "green"}}
                type="text"
                name="location"
                onChange={event => setLocation(event.target.value)}
                value={location}
                placeholder="Location?"

         />
         <Input style = {{color: "green"}}
                type="text"
                name="price"
                onChange={event => setPrice(event.target.value)}
                value={price}
                placeholder="Price??"

         />
         <Input style = {{color: "green"}}
                type="text"
                name="price"
                onChange={event => setPhone(event.target.value)}
                value={phone}
                placeholder="Phone #?"

         />
         <Input style = {{color: "green"}}
                type="text"
                name="price"
                onChange={event => setEmail(event.target.value)}
                value={email}
                placeholder="Email?"

         />
         <input type="text" name="bio" value={bio} onChange={event => setBio(event.target.value)}  />
         <button>Test Form?</button>
          </Inputs>

      </form>
    </div>
  );
};

export default EditProfile;
