import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';


const QuickStyle = styled.div`
  box-sizing: border-box;
  display: inline-block;
  min-width: 500px;
  max-width: 100%;
`;



const DriverCarousel = props => {
  const [ drivers, setDrivers ] = useState([]);

  useEffect(
    () => {
      const axiosGet = async () => {

        const res = await axios.get(`https://rideforlife.herokuapp.com/api/drivers/`);
        setDrivers([...res.data]);
      };
      axiosGet();
    },
    []
  );

const carousel = drivers && drivers.map(driver => {
   return (
     <QuickStyle key={drivers.driver_id}>
     <NavLink to={`/profile/${driver.driver_id}`}>{JSON.stringify(driver.firstname)}</NavLink>
     </QuickStyle>
 );
 });

    return (
      <div>
      {carousel}
      </div>
  );
};

export default DriverCarousel;
