import React from "react";
import { DriverNameDiv } from "../styles";


const DriverName = props => {
  return (
   <DriverNameDiv>
     <div className="driver-img"><img src={props.driverpic} alt={props.name} /></div>
     <h1>{props.name}</h1>
     <h2>{props.location}</h2>
   </DriverNameDiv>
 );
};

export default DriverName;
