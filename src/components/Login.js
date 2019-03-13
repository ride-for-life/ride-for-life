import React, { useState, useEffect } from "react";
import axios from "axios";
import { WideCap } from "./styles";

const Login = props => {
 const [click, setClick] = useState(1);
 const [result, setResult] = useState("Awaiting results?");

 useEffect(
   () => {
     const axiosGet = async () => {
       const data = await axios.get(
         `https://rideforlife.herokuapp.com/api/drivers/${click}`
       );
       setResult(JSON.stringify(data));
     };
     axiosGet();
   },
   [click]
 );

 // Method Url: /api/drivers/:id

 return (
   <div>
     <WideCap onClick={() => setClick(click + 1)}>Increase? {click}</WideCap>
     <p>{result}</p>
   </div>
 );
};

export default Login;