import React, { useState, useEffect, useContext } from "react";
import { UserContext } from '../UserContext';
import axios from "axios";
import { DriverDiv, colors, NavStyle } from "../styles";
import DriverName from "./DriverName";
import DriverStats from "./DriverStats"
import DriverBio from "./DriverBio"

import { renderComponent } from "recompose";
import styled from 'styled-components';

const Body = styled.div`
  width: 100%;
  background: ${colors.cloud};
  background-image: linear-gradient(${colors.white}, ${colors.thunderhead + '09'})
`

const DriverLogic = (props) => {

  const driver = props.driverCache && props.viewId ? props.driverCache[(props.viewId)] : null;
  if (driver) {
   const drivername = `${driver.firstname} ${driver.lastname}`;
   const location = driver.location;
   const bioString = driver.username && driver.username.length > 20 ? driver.username.slice(20) : 'This driver does not yet have a biography'; // FIXME: not real
   const driverFor = driver.driver_for || "New driver"; // FIXME: not real
   const rides = driver.total_rides || "0";
   const reviews = driver.reviews ? driver.reviews.length : 0;
   const avgRating = (driver.reviews && driver.reviews.length > 0) ? (driver.reviews.reduce((acc, d) => acc + d.rating, 0) / driver.reviews.length) : 0;
   const driverpic = (driver.vehicle_type !== 'mu') ? driver.vehicle_type : ''


   return (
    <Body>
      <DriverDiv>
        <NavStyle style={{color: colors.dusk}} to = '/'>←Home</NavStyle>
        <DriverName name={drivername} location={location} driverpic={driverpic} />

        <DriverStats driver={driver} rides={rides} reviews={reviews}/>
        <DriverBio name={drivername} myBio={bioString} driverFor={driverFor} reviews={reviews} avgRating={avgRating}/>

      </DriverDiv>
    </Body>
  )
  } else {
    return (
      <h1>Whoops!</h1>
    )
  }
};

export default DriverLogic;
