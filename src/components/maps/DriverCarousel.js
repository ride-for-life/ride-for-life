import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
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
  const {state, dispatch } = useContext(UserContext);

  const carousel = state.driverArray && state.driverArray.map(driver => {
     return (
        <Slide>
          <NavLink to={`/profile/${driver.driver_id}`}>
            <h4>{driver.firstname}</h4>
          </NavLink>
        </Slide>

     );
   });


  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}>
        <Slider>
          {carousel}
        </Slider>
      </CarouselProvider>
    </div>
  );
};

export default DriverCarousel;
