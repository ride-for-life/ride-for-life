import React from "react";
import { DriverBioDiv } from "../styles";
import { ReactComponent as Share } from "./share.svg";
import { ReactComponent as Comment } from "./speech-bubble-line.svg";
import { ReactComponent as Heart } from "./heart-line.svg";

const DriverBio = props => {
 return (
   <DriverBioDiv>
     <div className="caret">V</div>
     <div className="driver-heading">
         <img />
         <div>
             <h3>{props.name}</h3>
             <p>Driving for 2 years</p>
         </div>
     </div>
     <p>I am trained in defensive driving and drive the ambulances.
       I hope to help you by providing a fair price and responding quickly
     </p>
     <div className="driver-footer">
     <div><Share /></div> <div>39<Comment />    125<Heart /></div>
     </div>
   </DriverBioDiv>
 );
};

export default DriverBio;
