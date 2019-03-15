import React, { useContext } from 'react';
import { TextDisplay } from '../styles';
import { UserContext } from '../UserContext';

const NumberDisplay = props => {
  let { state, dispatch } = useContext(UserContext);
  return <TextDisplay>{state.inputPhoneNum}</TextDisplay>
};

export default NumberDisplay;
