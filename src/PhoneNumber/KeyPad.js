import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import PhoneKey from './PhoneKey';

// TBD: Implement Ugandan telephone length ( 12 )
// Extension/Area Codes may not be Ugandan? Rwandan numbers in Uganda and vice versa, apparently.

// KeyContainer styled component

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

const KeyPad = props => {

  let { state, dispatch } = useContext(UserContext);

  let numPush = num => () => dispatch({ type: "numPush", payload: num });
  let numPop = () => dispatch({ type: "numPop" });
  let reset = () => dispatch({ type: "reset" });

  const keyNums = [1,2,3,4,5,6,7,8,9,0]
  const keyMap = keyNums.map(keyNum => <PhoneKey keyNum={keyNum} />)

  return (
      <div>
        {keyMap}
        <button onClick={numPop}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
  );
};

export default KeyPad;
