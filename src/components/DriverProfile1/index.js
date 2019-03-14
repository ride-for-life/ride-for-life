import React, { useState, useEffect } from "react";
import axios from "axios";
import { PageContainerGrey, StatsDiv, BioDiv } from "../styles";
import DriverName from "./DriverName";
import DriverStats from "./DriverStats"
import DriverBio from "./DriverBio"
import { renderComponent } from "recompose";

const DriverProfile1 = () => {

   const [driver, setDriver] = useState({});
   const drivername = `${driver.firstname} ${driver.lastname}`;
   const location = driver.location
   
useEffect(
        () => {
        const axiosGet = async () => {
        const id = 7;
        const res = await axios.get(`https://rideforlife.herokuapp.com/api/drivers/${id}`)
        setDriver(res.data);
        };
        axiosGet();
        },
        []
    );

return (
    <div>
        {JSON.stringify(driver)}
        <PageContainerGrey>
        <DriverName name={drivername} location={location}/>
        <StatsDiv>
        <DriverStats driver={driver} />
        </StatsDiv>
        <BioDiv>
        <DriverBio name={drivername} />
        </BioDiv>
        </PageContainerGrey>
        {console.log(driver)}
    </div>
    )
};

export default DriverProfile1;
