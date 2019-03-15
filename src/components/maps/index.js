import React, { useState, useEffect, useContext } from "react";
import { UserContext } from '../UserContext.js';
import { NavLink } from "react-router-dom";
import axios from "axios";
import MapContainer from './MapContainer';
import styled from 'styled-components';
import { colors, fontFamily, NavStyle, OverlayDiv } from '../styles';
import TransitionButton from '../TransitionButton.js';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const YourLocation = styled.div`
    pointer-events: all;
    width: 550px;
    max-width: 100%;
    background: ${colors.white};
    color: ${colors.dusk};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: ${fontFamily};
    font-weight: bold;
    font-size: 1.6rem;
    cursor: pointer;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 20px;
    box-shadow: 0 0 5px ${colors.storm + '5c'};
    .loc-yours {
        text-align: left;
        width: 100%;
        align-self: flex-start;
        padding-left: 20px;
        margin-left: 20px;
        border-left: 1px solid ${colors.thunderhead + '5c'};
        padding-right: 20px;
        margin-right: 20px;
        border-right: 1px solid ${colors.thunderhead + '5c'};
    }
    .loc-close {
    }
    .loc-icon {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 18px;
        div {
            width: 25px;
            height: 2px;
            background: ${colors.dusk};
            &:first-child {
                width: 15px;
            }
            &:last-child {
                width: 15px;
                margin-left: 10px;
            }
        }
    }
`

const Driver = styled.div`
    pointer-events: all;
    width: 550px;
    max-width: 100%;
    background: ${colors.white};
    color: ${colors.dusk};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    font-family: ${fontFamily};
    font-weight: bold;
    font-size: 1.6rem;
    cursor: pointer;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 20px;
    box-shadow: 0 0 5px ${colors.storm + '5c'};
    height: 300px;
  h2 {
    color: ${colors.evening};
    font-size: 1.2rem;
    margin: 10px 0 0 0;
  }
  h3 {
    color: ${colors.thunderhead};
    font-size: 1.0rem;
    margin: 0;
  }
  .driver-img {
    width: 150px;
    height: 150px;
    box-sizing: border-box;
    background: ${colors.storm};
    background-image: linear-gradient(${colors.storm}, ${colors.evening});
    border-radius: 20px;
    img {
      object-fit: cover;
    }
    }
`


const SearchDrivers = () => {

   const [drivers, setDrivers] = useState();
    const { state, dispatch } = useContext(UserContext);

  useEffect(
    () => {
      const axiosGet = async () => {
       const res = await axios.get(`https://rideforlife.herokuapp.com/api/drivers/`);
        setDrivers(res.data);
        };
      axiosGet();
    },
    []
  );

  useEffect(
    () => {
      if (drivers) {
        console.log('Drivers object is : ', drivers);
        }
    },
    [drivers]
  );

return (
    <div>
    <OverlayDiv>
    <NavStyle style={{color: colors.dusk, pointerEvents: "all"}} to = '/'>←Home</NavStyle>
    <YourLocation>
    <div className="loc-icon"> <div></div> <div></div> <div></div> </div>
    <div className="loc-yours">Your Location</div>
    <div className="loc-close">X</div>
  </YourLocation>
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
    <TransitionButton style={{pointerEvents: "all"}} background={colors.antimatter} link='/confirm-pickup' text='Call an Ambulance'/>
    {drivers ? 
     <CarouselProvider style={{pointerEvents: "all", width: "800px", height: "260px", maxWidth: "100%", marginBottom: "50px"}}
        naturalSlideWidth={50}
        naturalSlideHeight={80}
        visibleSlides={3}
        totalSlides={drivers.length}>
        <Slider>
        {drivers.map((driver, idx) =>
            <Slide index={idx}><Driver>
            <img className="driver-img"></img>
            <h2>{driver.firstname} {driver.lastname}</h2>
            <h3>{driver.location}</h3>
            <h3>Price: {driver.price}</h3>
            </Driver>
            </Slide>)}
        </Slider>
        </CarouselProvider>
     : 
     <h1>Loading</h1>
    }
    </div>
    </OverlayDiv>
        <MapContainer drivers = {drivers}/>
    </div>
)
};

export default SearchDrivers;
