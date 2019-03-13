import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../UserContext';
import PhoneKey from './PhoneKey';
import Backspace from './Backspace';

// Extension/Area Codes may not be Ugandan? Rwandan numbers in Uganda and vice versa, apparently.

const KeyContainer = styled.div`
  display: grid;
  grid-template-columns: 3rem 3rem 3rem;
  grid-gap: 5px;
  background: #232530;
  max-width: 50%;
`;

const KeyPad = props => {

  let { state, dispatch } = useContext(UserContext);
  let reset = () => dispatch({ type: "reset" });

  const keyNums = [1,2,3,4,5,6,7,8,9,0]
  const keyMap = keyNums.map(keyNum => <PhoneKey keyNum={keyNum} />)

  return (
      <KeyContainer>
        {keyMap}
        <Backspace />
        <button onClick={reset}>Reset</button>
      </KeyContainer>
  );
};

export default KeyPad;
