import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../UserContext';

const NumberDisplay = props => {
  let { state, dispatch } = useContext(UserContext);
  return <p>{state.phoneNum}</p>
};

export default NumberDisplay;
