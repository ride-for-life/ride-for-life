import React from "react";
import { DriverStatsDiv } from "../styles";

const DriverStats = props => {
  const driver = props.driver;
  return (
   <DriverStatsDiv>
      <div>
        <h2>{props.driver.total_rides}</h2>
        <p>RIDES</p>
      </div>
      <div>
        <h2>150</h2>
        <p>PRICE</p>
      </div>
      <div>
        <h2>39</h2>
        <p>REVIEWS</p>
      </div>
   </DriverStatsDiv>
 );
};

export default DriverStats;
