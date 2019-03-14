import React, { useState, useEffect } from "react";
import axios from "axios";
import { PageContainerGrey, DriverStatsDiv, DriverBioDiv, DriverDiv, colors } from "../styles";
import DriverName from "./DriverName";
import DriverStats from "./DriverStats";
import DriverReview from "./DriverReview";
import DriverBio from "./DriverBio"
import {NavLink} from 'react-router-dom';
import { renderComponent } from "recompose";
import styled from 'styled-components';

const Body = styled.div`
  width: 100%;
  background: ${colors.cloud};
  background-image: linear-gradient(${colors.white}, ${colors.thunderhead + '09'})
`

const newID = (() => {
  let id = 0;
  return () => ++id;
})();

const DriverProfile1 = () => {

   const [driver, setDriver] = useState({});
   const drivername = `${driver.firstname} ${driver.lastname}`;
   const location = driver.location || "Not Available";
   const bioString = driver.username && driver.username.length > 20 ? driver.username.slice(20) : '';
   const rides = driver.total_rides || "0";
   const price = driver.price || 150; // FIXME
   const income = parseInt(rides) * price; // FIXME
   const reviews = driver.reviews ? driver.reviews.length : 0;
   const avgRating = (driver.reviews && driver.reviews.length > 0) ? (driver.reviews.reduce((acc, d) => acc + d.rating, 0) / driver.reviews.length) : 0;

useEffect(
        () => {
        const axiosGet = async () => {
        const id = 1;
        const res = await axios.get(`https://rideforlife.herokuapp.com/api/drivers/${id}`)
        setDriver(res.data);
        };
        axiosGet();
        },
        []
    );

return (
    <Body>
    <DriverDiv>
        <NavLink to = '/'>Home</NavLink>
        <DriverName name={drivername} location={location}/>
        <DriverStats driver={driver} rides={rides} income={income} reviews={reviews}/>
    {/*<DriverBio name={drivername} myBio={bioString} reviews={reviews} avgRating={avgRating}/>*/}
    <h2 style={{color: colors.storm}}>Reviews</h2>
    {(driver.reviews && driver.reviews.length !== 0) ?
     driver.reviews.map((review => 
                         <DriverReview name={review.name || "Anonymous"}
                         rating={review.rating + " stars"}
                         content={review["review_content"] || "No comment."}
                         key={newID()} />   
                        )): <h2>No Reviews</h2>}
        {console.log(driver)}
    </DriverDiv>
    </Body>
    )
};

export default DriverProfile1;
