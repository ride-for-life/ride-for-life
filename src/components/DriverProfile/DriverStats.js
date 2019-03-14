import React from "react";
import { DriverStatsDiv } from "../styles";

const DriverStats = props => {

  return (
   <DriverStatsDiv>
      <div>
        <h2>{props.rides}</h2>
        <p>RIDES</p>
      </div>
      <div>
        <h2>150</h2>
        <p>PRICE</p>
      </div>
      <div>
      <h2>{props.reviews}</h2>
        <p>REVIEWS</p>
      </div>
   </DriverStatsDiv>
 );
};

export default DriverStats;
