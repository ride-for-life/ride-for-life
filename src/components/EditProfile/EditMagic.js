import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { authxios, imgxios } from '../auth/';
import { UserContext } from '../UserContext';
import { Input, Inputs } from '../styles';
import DriverBio from '../DriverProfile/DriverLogic';
import DriverName from '../DriverProfile/DriverName';
import { DriverDiv, colors, NavStyle } from "../styles";
import DriverStats from "../DriverProfile/DriverStats";
import { renderComponent } from "recompose";
import styled from 'styled-components';
import MagicName from './MagicName';
import { DriverBioDiv } from "../styles";


const Body = styled.div`
  width: 100%;
  background: ${colors.cloud};
  background-image: linear-gradient(${colors.white}, ${colors.thunderhead + '09'})
`


const EditMagic = props => {
  const { state, dispatch } = useContext(UserContext);
  const [ editing, setEditing ] = useState('');
  const [ text, setText ] = useState('');

  const [ bio, setBio ] = useState('');

  console.log(props.recache);




  const logClick = event => {
    console.log(event.target.name)
  };

  const beginEditing = (event) => {
    event.preventDefault();
    setEditing(`${event.target.value}`);
  };

  const finishEditing = event => {
    event.preventDefault();
    const changes = null;
    authxios(state.loggedToken).put(`https://rideforlife.herokuapp.com/api/drivers/${state.loggedDriverId}`, changes)
      .then(res => { console.log(res) })
      .catch(err => { console.log(err) })
  };

  useEffect(
    () => {
      if (editing) {
        setText()
      }
    },
    [text]
  );

  const deleteMe = () => {
    authxios(state.loggedToken).delete(`https://rideforlife.herokuapp.com/api/drivers/${state.loggedId}`)
      .then(result => {console.log(result)})
      .catch(error => {console.log(error)})
  };

  const driver = props.driverCache && props.loggedDriverId ? props.driverCache[(props.loggedDriverId)] : null

  const drivername = `${driver.firstname} ${driver.lastname}`;
  const location = driver.location;
  const bioString = driver.username && driver.username.length > 20 ? driver.username.slice(20) : 'This driver does not yet have a biography'; // FIXME: Oh, it's about to be!
  const driverFor = driver.driver_for || "New driver"; // FIXME: not real
  const rides = driver.total_rides || "0";
  const reviews = driver.reviews ? driver.reviews.length : 0;
  const avgRating = (driver.reviews && driver.reviews.length > 0) ?  (driver.reviews.reduce((acc, d) => acc + d.rating, 0) / driver.reviews.length) : 0;
  const driverCORS = (driver.vehicle_type !== 'mu') ? true : false
  const driverpic = driver.vehicle_type;



  return (
      <Body>
      <DriverDiv>
       <NavStyle style={{color: colors.dusk}} to = '/'>←Home</NavStyle>
       <MagicName firstname={driver.firstname} location={location} cors={driverCORS} driverpic={driverpic} />

       <DriverStats driver={driver} rides={rides} reviews={reviews} />
       <DriverBio driverpic='' name={drivername} myBio={bioString} driverFor={driverFor} reviews={reviews} avgRating={avgRating} />
      </DriverDiv>
      </Body>
  )
}

export default EditMagic;
