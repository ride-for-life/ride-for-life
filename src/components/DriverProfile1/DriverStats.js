import React from "react";

const box={
  border: '1px solid black',
  margin: '5px'
}

const DriverStats = props => {

  return (
   <div>
      <div style={box}>
        <p>{props.driver.total_rides}</p>
        <p>Rides </p>
      </div>
      <div style={box}>
        <p>150</p>
        <p>Price </p>
      </div>
      <div style={box}>
        <p>39</p>
        <p>Reviews</p>
      </div>
   </div>
 );
};

export default DriverStats;
