import React, { useState, useEffect } from "react";
import axios from "axios";
import { DriverDiv, colors } from "../styles";
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

const DriverProfile = () => {

   const [driver, setDriver] = useState({});
    console.log(driver);
   const drivername = `${driver.firstname} ${driver.lastname}`;
   const location = driver.location;
   const bioString = driver.username && driver.username.length > 20 ? driver.username.slice(20) : 'This driver does not yet have a biography'; // FIXME: not real
   const driverFor = driver.driver_for || "New driver"; // FIXME: not real
   const rides = driver.total_rides || "0";
   const reviews = driver.reviews ? driver.reviews.length : 0;
   const avgRating = (driver.reviews && driver.reviews.length > 0) ? (driver.reviews.reduce((acc, d) => acc + d.rating, 0) / driver.reviews.length) : 0;
    

  useEffect(
    () => {
      const axiosGet = async () => {
        const id = 1;
        const res = await axios.get(`https://rideforlife.herokuapp.com/api/drivers/${id}`)
        setDriver(res.data);
      };
      axiosGet();
    },
    []
  );

return (
    <Body>
      <DriverDiv>

        <DriverName name={drivername} location={location}/>
        <DriverStats driver={driver} rides={rides} reviews={reviews}/>
        <DriverBio name={drivername} myBio={bioString} driverFor={driverFor} reviews={reviews} avgRating={avgRating}/>

      </DriverDiv>
    </Body>
)
};

export default DriverProfile;
