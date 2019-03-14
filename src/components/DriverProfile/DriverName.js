import React from "react";
import { DriverNameDiv } from "../styles";


const DriverName = props => {
    return (
   <DriverNameDiv>
     <img src='' />
     <h1>Name: {props.name}</h1>
     <h2>Location: {props.location}</h2>
   </DriverNameDiv>
 );
};

export default DriverName;
