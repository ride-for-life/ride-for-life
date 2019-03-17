import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../UserContext';
import styled from 'styled-components';
import TransitionButton from '../TransitionButton'
import {
  BrowserRouter as Router,
  NavLink, Link,
  Route

} from 'react-router-dom';
import axios from 'axios';
import '../../index.css';
import { colors, Input, Inputs, SignUpButtons, ContinueButton, Button, NavStyle, FormContainer, OverlayDiv } from '../styles';
import { randFiller } from '../dice';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const Body = styled.div`
  overflow: hidden;
  position: relative;
`;


const SignUpPage = props => {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ pass, setPass ] = useState("");
  const [ location, setLocation ] = useState("");
  const [ price, setPrice ] = useState("");
  const { state, dispatch } = useContext(UserContext);
  const [ phone, setPhone ] = useState("");

  useEffect(
    () => {
      if (phone) {
        dispatch({ type: "phoneUserUpdate", payload: phone })
      }
    },
    [phone]
  );


  const driverSignUp = (event) => {
    event.preventDefault();
    const phoneNumFromContext = state.inputPhoneNum;
    const parsedPrice = parseInt(price);
    const registrationWrapper = {
      firstname: firstName,
      lastname: lastName,
      username: `__${randFiller(16)}__`,
      phone: phoneNumFromContext,
      email: `__${randFiller(16)}__`,
      password: pass,
      price: parsedPrice,
      vehicle_type: "mu",
      location: location
    };
    axios.post('https://rideforlife.herokuapp.com/api/drivers/register', registrationWrapper)
     .then(res => {
       console.log(res);
       dispatch({type: "driverRegisterSuccess", payload: res.data });
       setTimeout(props.history.push('/my-profile'), 1000);
     })
     .catch(error => console.log(error));
  }; // driverSignUp function

  return (
    <Body>
      <FormContainer>
      <div>
        <SignUpButtons>
           <NavStyle style={{color: colors.dusk}} to = '/'>←Home</NavStyle>

        </SignUpButtons>


           <form onSubmit={driverSignUp}>
           <Inputs>
             <PhoneInput
                placeholder="Enter phone number"
                value={state.inputPhoneNum}
                onChange={ phone => setPhone(phone) } />

             <Input  style = {{color: "green"}}
                     type="text"
                     name="firstName"
                     value={firstName}
                     onChange={event => setFirstName(event.target.value)}
                     placeholder="First Name?"
              />

              <Input  style = {{color: "green"}}
                      type="text"
                      name="lastName"
                      value={lastName}

                      onChange={event => setLastName(event.target.value)}
                      placeholder="Last Name?"
               />
               <Input
                      type="password"
                      name="pass"
                      onChange={event => setPass(event.target.value)}
                      value={pass}
                      placeholder="Password"
               />
              <Input
                     type="text"
                     name="location"
                     onChange={event => setLocation(event.target.value)}
                     value={location}
                     placeholder="Location"
              />
              <Input
                     type="text"
                     name="price"
                     onChange={event => setPrice(event.target.value)}
                     value={price}
                     placeholder="Price"
              />

              <ContinueButton> CONTINUE </ContinueButton>
               </Inputs>
            </form>

      <OverlayDiv style={{minHeight: "200px", pointerEvents: "all"}}>
      <h2 style={{color: colors.dusk}}>Already have an account?</h2>
      <TransitionButton link="/login" background={colors.thunderhead} text="LOGIN"> </TransitionButton>
    </OverlayDiv>
      </div>
      </FormContainer>
    </Body>
  );
};

export default SignUpPage;

// <Link to='/profile'></Link>
