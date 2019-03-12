import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import { GhostCap } from '../styles';

const Backspace = props => {
  let { state, dispatch } = useContext(UserContext);
  let numPop = () => dispatch({ type: "numPop" });

  return <GhostCap onClick={numPop}>Back</GhostCap>
};

export default Backspace;
