import React from "react";


const DriverName = props => {
    return (
   <div>
     <img src='' />
     <h1>Name: {props.name}</h1>
     <h2>Location: {props.location}</h2>
   </div>
 );
};

export default DriverName;