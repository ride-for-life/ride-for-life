import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../UserContext';

const TextDisplay = styled.p`
  box-shadow: 0 3pt 15pt #000000;
  background: #454F63;
  min-width: 7rem;
  min-height: 1rem;
  max-width: 50%;
`;

const NumberDisplay = props => {
  let { state, dispatch } = useContext(UserContext);
  return <TextDisplay>{state.phoneNum}</TextDisplay>
};

export default NumberDisplay;
