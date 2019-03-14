import React, { useEffect, useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
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
        const array = [...res.data];
        const myCoordinatesSplit = array.map(driver =>
          driver.location.split(", "));
        const parsedCoords = myCoordinatesSplit.map(array => { return { lat: parseInt(array[0]), long: parseInt(array[1])}});
        setDrivers(myCoordinatesSplit);
      };
      axiosGet();
    },
    []
  );

// const carousel = drivers && drivers.map(driver => {
//    return (
//
//         <Slide>
//         <NavLink to={`/profile/${driver.driver_id}`}>{JSON.stringify(driver.firstname)}</NavLink>
//         </Slide>
//
//    );
//  });


return ( <p>
  {JSON.stringify(drivers)}
  </p>)
  //   return (
  //     <div>
  //     <CarouselProvider
  //       naturalSlideWidth={100}
  //       naturalSlideHeight={125}
  //       totalSlides={3}>
  //       <Slider>
  //     {carousel}
  //     </Slider>
  //     </CarouselProvider>
  //     </div>
  // );
};

export default DriverCarousel;
