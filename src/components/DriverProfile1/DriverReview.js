import React from "react";
import { DriverBioDiv } from "../styles";
import { ReactComponent as Share } from "../DriverProfile/share.svg";
import { ReactComponent as Comment } from "../DriverProfile/speech-bubble-line.svg";
import { ReactComponent as StarSVG } from "../Review/star.svg";
import styled from 'styled-components';

const Star = styled(StarSVG)`
  polygon {
    fill: white;
  }
`

const DriverReview = props => {
 return (
     <DriverBioDiv style={{marginBottom: "20px"}}>
     <div className="driver-heading">
         <img src='' alt={props.name} />
         <div>
             <h3>{props.name}</h3>
     <p>{props.rating}
   </p>
         </div>
     </div>
     <p>{props.content}</p>
     <div className="driver-footer">
     <div><Share /></div> </div>
   </DriverBioDiv>
 );
};

export default DriverReview;
