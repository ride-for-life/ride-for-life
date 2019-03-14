import styled from 'styled-components';
import { colors } from './Theme.js';

export const Inputs = styled.div`
  height: 700pt;
  margin: 0 auto;
  width: 550pt;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  max-width: 100%;
`;


// TODO: Create div wrapper to house an after with the box shadow with a z index
// such that is under the inputs and under the circle.
export const Input = styled.input`
  height: 80px;
  width: 100%;
  box-sizing: border-box;
  max-width: 100%;
  box-shadow: 0 5px 2px ${colors.midnight + '22'};
  color: ${colors.thunderhead};
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  border-radius: 20px;
  border: solid white;
  font-size: 1.6rem;
  font-weight: 600;
  color: #78849E;
  text-align: left;
  padding-left: 25px;
`;

// export const Input = styled.input`
//   height: 80px;
//   width: 100%;
//   box-sizing: border-box;
//   max-width: 100%;
//   color: ${colors.thunderhead};
//   display: flex;
//   justify-content: flex-end;
//   margin: 0 auto;
//   border-radius: 20px;
//   border: solid white;
//   font-size: 18pt;
//   font-weight: 600;
//   color: #78849E;
//   text-align: left;
//   padding-left: 10%;
// `;

export const FormContainer = styled.div`
  position: relative;
  width: 800px;
  max-width: 100%;
  display: flex;
  margin: 0 auto;
  margin-top: 4%;
  padding: 0 5%;
  flex-direction: column;
  box-sizing: border-box;
   &:before {
    content: "";
    position: absolute;
    top: 35%;
    left: 50%;
    width: 80vh;
    height: 80vh;
    border-radius: 100%;
    background: ${colors.forest};
    z-index: -1;
  }
`;
