import React from "react";


const DriverName = props => {
    console.log(props.driver)
    return (
   <div>
     <h1>Martin Makuza</h1>
     <ul>
        {JSON.stringify(props)}
    </ul>
        {/* {props.driver.lastname} */}
   </div>
 );
};

export default DriverName;