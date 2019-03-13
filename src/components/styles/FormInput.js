import styled from 'styled-components';
import { colors } from './Theme.js';

export const Inputs = styled.div`
  background-image: url('https://cdn3.imggmi.com/uploads/2019/3/12/b4248d8e1fba7fb20e1f019363b88592-full.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 700pt;
  margin: 0 auto;
  width: 550pt;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  max-width: 100%;
`;


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
  font-size: 18pt;
  font-weight: 600;
  color: #78849E;
  text-align: left;
  padding-left: 10%;
`;
