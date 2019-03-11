import React from 'react';
import styled from 'styled-components';

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

const PageContainer = styled.section`
  background: #2A2E43;
  color: white;
`;

const PhoneNumber = props => {

  return (
    <PageContainer>
      <h1>Enter your phone number:</h1>
      <NumberDisplay />
      {/* Need the transition button here.
        It needs to not work unless a number is in. */}
      <KeyPad />
    </PageContainer>
  );
};

export default PhoneNumber;
