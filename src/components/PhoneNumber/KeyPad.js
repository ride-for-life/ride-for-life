import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../UserContext';
import PhoneKey from './PhoneKey';
import Backspace from './Backspace';
import { KeyCap } from '../styles/KeyCaps.js';
import { colors } from '../styles/Theme.js';

// Extension/Area Codes may not be Ugandan? Rwandan numbers in Uganda and vice versa, apparently.

const KeyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  background: ${colors.midnight};
  width: 100vw;
  height: 100%;
  max-width: 800px;
  padding: 25px;
  // FIXME: No idea why not having this results in a gap
  margin-bottom: -25px;
  box-sizing: border-box;
`;

const KeyPad = props => {

  let { state, dispatch } = useContext(UserContext);
  let reset = () => dispatch({ type: "reset" });

  const keyNums = [1,2,3,4,5,6,7,8,9]
  const keyMap = keyNums.map(keyNum => <PhoneKey keyNum={keyNum} key={keyNum} />)

  return (
      <KeyContainer>
        {keyMap}
        <Backspace />
        <PhoneKey keyNum='0' />
        <KeyCap onClick={reset} color='colors.thunderhead' background='colors.white'>Reset</KeyCap>
      </KeyContainer>
  );
};

export default KeyPad;
