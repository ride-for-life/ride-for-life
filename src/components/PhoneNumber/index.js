import React from 'react';
import { PhoneDiv, colors } from '../styles';
import {Link} from 'react-router-dom';
import axios from 'axios';
import NumberDisplay from './NumberDisplay';
import KeyPad from './KeyPad';
import TransitionButton from '../TransitionButton';
import styled from 'styled-components';

// Page should include the following elements:
// The keypad
// A display for the phone number entry for verification
// format: + (###) ### ### ###
// COMPLICATION: apparently, sometimes area codes are 2 numbers, lovely!!!
// not included in design, but make there be a very slight space?
// every 3 nums, for readability, unless there is another standard in Africa
// STRETCH: area code dropdown to quickly select area code
// area code dropdown goes by nationality flag, wow if that isn't volatile
// emoji?
// Ideally an option to just type numbers as well as click through.

const Body = styled.div`
    width: 100%;
    background: ${ colors.dusk };
`

const PhoneNumber = props => {

  return (
      <Body>
          <PhoneDiv style={{paddingBottom: '0'}}>
              <h1 style={{color: 'white'}}>Enter your phone number:</h1>
              <NumberDisplay />
              {/* Need the transition button here.
                  And it needs to not work unless a number is in. */}
              <TransitionButton link='/info' text='NEXT STEP' />
              <KeyPad />
          </PhoneDiv>
      </Body>
  );
};

export default PhoneNumber;
