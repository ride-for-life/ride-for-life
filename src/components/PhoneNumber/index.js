import React, { useState } from 'react';
import { PhoneDiv, colors } from '../styles';
import axios from 'axios';
import NumberDisplay from './NumberDisplay';
import KeyPad from './KeyPad';
import TransitionButton from '../TransitionButton';
import styled from 'styled-components';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

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

class PhoneNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
  return (
      <Body>
        <PhoneInput
          placeholder="Enter phone number"
            value={ this.state.phone }
            onChange={ phone => this.setState({ phone }) } />
              <TransitionButton link='/PhoneNumber' route='somecomponent' text='NEXT STEP' />
              <KeyPad />
      </Body>
  );
};
};

export default PhoneNumber;
