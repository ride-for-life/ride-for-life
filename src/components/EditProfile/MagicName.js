import React, { useEffect, useState, useContext } from "react";
import { DriverNameDiv } from "../styles";
import { imgxios, authxios } from '../auth';
import { UserContext } from '../UserContext';

const MagicName = props => {
  const [ imgurLink, setImgurLink ] = useState('');
  const { state, dispatch } = useContext(UserContext);
  const [ selfie, setSelfie ] = useState(null);
  const [ imgReady, setImgReady ] = useState();

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
      if (imgurLink) {
      const axiosGet = async () => {
        const changes = {
          vehicle_type: imgurLink
        };
        authxios(state.loggedToken).put(`https://rideforlife.herokuapp.com/api/drivers/${state.loggedId}`, changes);
      };
      axiosGet();
    }},
    [imgurLink]
  ); // Why am I using useEffect here? Just refactor this to a function, you silly goose.

  return (
   <DriverNameDiv>
      <div className="driver-img">

      </div>
      <details>
      <summary><p>Change?</p></summary>
      <img src={props.driverpic} alt={props.firstname} /><input type="file" onChange={fileSelect} />
      <button onClick={fileUpload}> Upload File? </button>
      </details>
      <label><h1 >{props.name}</h1></label>
      <h2>{props.location}</h2>
   </DriverNameDiv>
 )
};

export default MagicName;
