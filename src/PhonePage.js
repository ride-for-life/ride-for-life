import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const PhonePage = props => {

  let { state, dispatch } = useContext(UserContext);

  let numPush = num => () => dispatch({ type: "numPush", payload: num });
  let numPop = () => dispatch({ type: "numPop" });
  let reset = () => dispatch({ type: "reset" });




  return (
    <div>
      <p>{state.phoneNum}</p>
      <div>
        <button onClick={numPush(1)}>One</button>
        <button onClick={numPush(2)}>Two</button>
        <button onClick={numPop}>Back</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default PhonePage;
