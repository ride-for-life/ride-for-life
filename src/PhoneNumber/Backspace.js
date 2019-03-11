import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import styled from 'styled-components';

const GhostCap = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem;
  width: 3rem;
  background: transparent;
  color: white;
  border: 0px;
`;

const Backspace = props => {
  let { state, dispatch } = useContext(UserContext);
  let numPop = () => dispatch({ type: "numPop" });

  return <GhostCap onClick={numPop}>Back</GhostCap>
};

export default Backspace;
