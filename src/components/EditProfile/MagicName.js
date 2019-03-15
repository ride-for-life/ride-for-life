import React, { useEffect, useState, useContext } from "react";
import { DriverNameDiv, DriverBioDiv } from "../styles";
import { imgxios, authxios } from '../auth';
import { UserContext } from '../UserContext';
import styled from 'styled-components';

const RestrainInput = styled.input`
  box-sizing: border-box;
  display: block;
  margin: 5px;
`;

const RestrainButton = styled.button`
  margin: 5px;
  display: block;
  box-sizing: border-box;
`

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
      const axiosPut = async () => {
        const changes = {
          vehicle_type: imgurLink
        };
        const myToken = state.loggedToken;
        const myId = state.loggedDriverId
        authxios(myToken).put(`https://rideforlife.herokuapp.com/api/drivers/${state.loggedDriverId}`, changes);
      };
      axiosPut();
    }},
    [imgurLink]
  ); // Why am I using useEffect here? Just refactor this to a function, you silly goose.

  return (
   <DriverNameDiv>
     <div className="driver-img">
       {props.cors && <img src={props.driverpic} crossorigin="anonymous" alt={props.firstname} />}
     </div>
     <RestrainInput type="file" onChange={fileSelect} />
     <RestrainButton onClick={fileUpload}> Upload File? </RestrainButton>
     <h1>{props.firstname}</h1>
     <h2>{props.location}</h2>
   </DriverNameDiv>
 )
};

export default MagicName;
