import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../UserContext';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  NavLink, Link,
  Route

} from 'react-router-dom';
import axios from 'axios';
import '../../index.css';
import { colors, Input, Inputs, SignUpButtons, ContinueButton, Button } from '../styles';

const Body = styled.div`
  overflow: hidden;
  position: relative;
`;

const Container = styled.div`
  width: 800px;
  max-width: 100%;
  display: flex;
  margin: 0 auto;
  margin-top: 4%;
  flex-direction: column;
   &:before {
    content: "";
    position: absolute;
    top: 35%;
    left: 50%;
    width: 80vh;
    height: 80vh;
    border-radius: 100%;
    background: ${colors.forest};
    z-index: -1;
  }
`;


const SignUpPage = props => {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ pass, setPass ] = useState("");
  const [ location, setLocation ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ result, setResult ] = useState("");

  const { state, dispatch } = useContext(UserContext);

  const driverSignUp = (event) => {
    event.preventDefault();
    const phoneContext = state.phoneNum.join("");
    const parsedPrice = parseInt(price);
    // const registrationWrapper = {
    //   firstname: firstName,
    //   lastname: lastName,
    //   username: bracedRand,
    //   phone: phoneContext,
    //   email: phoneContext,
    //   password: pass,
    //   price: parsedPrice,
    //   vehicle_type: "test"
    // };
    const registrationTester = {
      firstname: 'Cool',
      lastname: 'Guy',
      username: `__${Math.random().toString().slice(2,19)}__`,
      phone: `__${Math.random().toString().slice(2,19)}__`,
      email: `__${Math.random().toString().slice(2,19)}__`,
      password: 'password',
      price: 100,
      vehicle_type: "test"
    };
    axios.post('https://rideforlife.herokuapp.com/api/drivers/register', registrationTester)
     .then(res => {
       setResult(JSON.stringify(res));
       dispatch({type: "loginSuccess", payload: res.data.token });
     })
     .catch(error => setResult(JSON.stringify(error)));
  }; // driverSignUp function

  return (
    <Body>
      {result}
      <Container>
      <div>
        <SignUpButtons>
           <NavLink className = 'nav-link' to = '/'>Home</NavLink>
           <NavLink to = '/'>Home</NavLink>

           <Button style={{border: 'none', height: '50px', borderRadius: '18px'}} color={colors.thunderhead} background={colors.white}>SIGN IN </Button>
           <Button style={{border: 'none', height: '50px', borderRadius: '18px'}} background={colors.forest}>SIGN UP</Button>
        </SignUpButtons>


           <form onSubmit={driverSignUp}>
            <ContinueButton>Pow!</ContinueButton>
           <Inputs>
             <Input  style = {{color: "green"}}
                     type="text"
                     name="lastName"
                     value={firstName}

                     onChange={event => setFirstName(event.target.value)}
                     placeholder="First?"
              />
              <Input  style = {{color: "green"}}
                      type="text"
                      name="firstName"
                      value={lastName}

                      onChange={event => setLastName(event.target.value)}
                      placeholder="Last?"
               />
               <Input
                      type="text"
                      name="pass"
                      onChange={event => setPass(event.target.value)}
                      value={pass}
                      placeholder="Password?"
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
                     placeholder="Price?"
              />

              <ContinueButton> CONTINUE </ContinueButton>
               </Inputs>
            </form>

      </div>
      </Container>
    </Body>
  );
};

export default SignUpPage;
