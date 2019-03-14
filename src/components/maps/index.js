
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import MapContainer from './MapContainer';


const SearchDrivers = () => {

   const [drivers, setDrivers] = useState({});

  useEffect(
    () => {
      const axiosGet = async () => {
       const res = await axios.get(`https://rideforlife.herokuapp.com/api/drivers/`)
        setDrivers(res.data);

      };
      axiosGet();
      console.log('Drivers object : ', drivers);
    },
    []
  );

return (
    <div>
        <NavLink to='/confirm-pickup'>   Call an Ambulance  </NavLink>
        <MapContainer drivers = {drivers}/>
    </div>
)
};

export default SearchDrivers;