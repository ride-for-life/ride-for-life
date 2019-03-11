import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import PhoneKey from './PhoneKey';
import NumberDisplay from './NumberDisplay';
import KeyPad from './KeyPad';

// Page should include the following elements:
// The keypad
// A display for the phone number entry for verification
// format: + (###) ### ### ###
// not included in design, but make there be a very slight space?
// every 3 nums, for readability, unless there is another standard in Africa
// STRETCH: area code dropdown to quickly select area code
// area code dropdown goes by nationality flag, wow if that isn't volatile
// emoji?
// Ideally an option to just type numbers as well as click through.

const PhoneNumber = props => {

  return (
    <div>
      <NumberDisplay />
      <KeyPad />
    </div>
  );
};

export default PhoneNumber;
