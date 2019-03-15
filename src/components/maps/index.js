import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import MapContainer from './MapContainer';
import styled from 'styled-components';
import { colors, fontFamily, NavStyle, OverlayDiv } from '../styles';
import TransitionButton from '../TransitionButton.js';

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


const SearchDrivers = () => {

   const [drivers, setDrivers] = useState();

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
    <TransitionButton style={{pointerEvents: "all"}} background={colors.antimatter} link='/confirm-pickup' text='Call an Ambulance'/>
    </OverlayDiv>
        <MapContainer drivers = {drivers}/>
    </div>
)
};

export default SearchDrivers;
