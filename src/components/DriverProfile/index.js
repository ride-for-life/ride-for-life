import React, { useState, useEffect } from "react";
import axios from "axios";
import { DriverDiv, colors } from "../styles";
import DriverName from "./DriverName";
import DriverStats from "./DriverStats"
import DriverBio from "./DriverBio"
import { renderComponent } from "recompose";
import EditProfile from './EditProfile';
import styled from 'styled-components';

const Body = styled.div`
  width: 100%;
  background: ${colors.cloud};
  background-image: linear-gradient(${colors.white}, ${colors.thunderhead + '09'})
`

const DriverProfile = () => {

   const [driver, setDriver] = useState({});
   const drivername = `${driver.firstname} ${driver.lastname}`;
   const location = driver.location
   
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
    {JSON.stringify(driver)}
    <EditProfile />
    <DriverName name={drivername} location={location}/>
    <DriverStats driver={driver} />
    <DriverBio name={drivername} />
    {console.log(driver)}
    </DriverDiv>
    </Body>
)
};

export default DriverProfile;
