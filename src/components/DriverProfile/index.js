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
   const drivername = `${driver.firstname} ${driver.lastname}`;
   const location = driver.location;
   const bioString = driver.username && driver.username.length > 20 ? driver.username.slice(20) : ''


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

  const notify = {
        
  };

return (
    <Body>
      <DriverDiv>

        <DriverName name={drivername} location={location}/>
        <DriverStats driver={driver} />
        <DriverBio name={drivername} myBio={bioString} />
        <button onClick={notify}></button>
      </DriverDiv>
    </Body>
)
};

export default DriverProfile;
