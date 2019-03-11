import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../UserContext';


  // const  = styled.a`
  //   /* This renders the buttons above... Edit me! */
  //   display: inline-block;
  //   border-radius: 3px;
  //   padding: 0.5rem 0;
  //   margin: 0.5rem 1rem;
  //   width: 11rem;
  //   background: transparent;
  //   color: white;
  //   border: 2px solid white;
  //
  //   /* The GitHub button is a primary button
  //    * edit this to target it specifically! */
  //   ${props => props.primary && css`
  //     background: white;
  //     color: palevioletred;
  //   `}
  // `

  const KeyCap = styled.button`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem;
    width: 3rem;
    background: #454F63;
    color: white;
    box-shadow: 1px 1px 1px 1px black;
    border: 0px;
  `;

const PhoneKey = props => {
  let { state, dispatch } = useContext(UserContext);

  let numPush = num => () => dispatch({ type: "numPush", payload: num });

  return <KeyCap onClick={numPush(props.keyNum)}>{props.keyNum}</KeyCap>
};



export default PhoneKey;
