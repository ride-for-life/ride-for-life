import React, { useState, useEffect } from "react";
import axios from "axios";
import { PageContainerGrey, DriverStatsDiv, DriverBioDiv } from "../styles";
import DriverName from "./DriverName";
import DriverStats from "./DriverStats"
import DriverBio from "./DriverBio"
import {NavLink} from 'react-router-dom';

import { renderComponent } from "recompose";

const DriverProfile1 = () => {

   const [driver, setDriver] = useState({});
   const drivername = `${driver.firstname} ${driver.lastname}`;
   const location = driver.location

useEffect(
        () => {
        const axiosGet = async () => {
        const id = 2;
        const res = await axios.get(`https://rideforlife.herokuapp.com/api/drivers/${id}`)
        setDriver(res.data);
        };
        axiosGet();
        },
        []
    );

return (
    <div>
        <NavLink to = '/'>Home</NavLink>
        <PageContainerGrey>
        <DriverName name={drivername} location={location}/>
        <DriverStatsDiv>
        <DriverStats driver={driver} />
        </DriverStatsDiv>
        <DriverBioDiv>
        <DriverBio name={drivername} />
        </DriverBioDiv>
        </PageContainerGrey>
    </div>
    )
};

export default DriverProfile1;
