import React, { useState, useEffect } from "react";
import axios from "axios";
import { PageContainer, PageContainer2 } from "../styles";
import DriverName from "./DriverName";
import DriverStats from "./DriverStats"
import DriverBio from "./DriverBio"
import { renderComponent } from "recompose";

const DriverProfile = () => {

   const [result, setResult] = useState({});
   const drivers = result;
   const driver = drivers.firstname

//    JSON.stringify(drivers)
    
useEffect(
        () => {
        const axiosGet = async () => {
        const id = 1;
        const res = await axios.get(`https://rideforlife.herokuapp.com/api/drivers/${id}`)
        setResult(res.data);
        };
        axiosGet();
        },
        []
    );
        
return (
    <div>
        {console.log(drivers)}
        <PageContainer2>
        <DriverName driver={driver}/>
        <PageContainer>
        <DriverStats />
        <DriverBio />
        </PageContainer>
        </PageContainer2>
        {JSON.stringify(drivers)}
    </div>
    )
};

export default DriverProfile;


// import { WideCap } from "./styles";

// const Login = props => {
// const [click, setClick] = useState(0);
// const [result, setResult] = useState("Awaiting results?");


// return (
// <div>
// <WideCap onClick={() => setClick(click + 1)}>Increase? {click}</WideCap>
// <p>{result}</p>
// </div>
// );
// };
