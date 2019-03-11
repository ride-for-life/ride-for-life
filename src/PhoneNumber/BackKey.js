import React, { useContext } from 'react';

const Backspace = props => {
  let { state, dispatch } = useContext(UserContext);
  let numPop = () => dispatch({ type: "numPop" });

  return <button onClick={numPop}>Back</button>
};

export default Backspace;
