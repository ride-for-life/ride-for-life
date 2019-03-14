import React, { useState } from 'react';
import { PhoneDiv, colors } from '../styles';
import {Link} from 'react-router-dom';
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
    background: ${ colors.dusk } ;
    min-height: 100vh;
    .react-phone-number-input {
        margin-left: -35px;
        svg {
            fill: white;
        }
        input {
            height: 80px;
            width: 100%;
            box-sizing: border-box;
            max-width: 100%;
            box-shadow: 0 5px 2px ${colors.midnight + '22'};
            color: ${colors.thunderhead};
            display: flex;
            justify-content: flex-end;
            margin: 0 auto;
            border-radius: 20px;
            border: solid white;
            font-size: 1.6rem;
            font-weight: 600;
            color: #78849E;
            text-align: left;
            padding-left: 25px;
        }
    }
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
      <PhoneDiv style={{minHeight: "600px"}}>
        <PhoneInput
          placeholder="Enter phone number"
            value={ this.state.phone }
            onChange={ phone => this.setState({ phone }) } />
                            <TransitionButton link='/info' text='NEXT STEP' />
              {/* Need the transition button here.
                  And it needs to not work unless a number is in. */}
    {/*<KeyPad />*/}
      </PhoneDiv>
      </Body>
  );
};
};

export default PhoneNumber;

// <PhoneDiv style={{paddingBottom: '0'}}>
