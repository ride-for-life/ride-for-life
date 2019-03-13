import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import styled from 'styled-components';
import { colors } from '../styles/Theme.js';
import {
  BrowserRouter as Router,
  NavLink, Link,
  Route

} from 'react-router-dom';
import axios from 'axios';
import '../../index.css';
import { Input, Inputs, SignUpButtons, ContinueButton, Button } from '../styles';

const Body = styled.div`
<<<<<<< 000d848b544df41ca839402f08b1ab2f8c2c3471
 width: 559pt;
 margin-right: 50%;
width: 550pt;
display: flex;
 margin: 0 auto;
 margin-top: 4%;
margin-right: 30%;
border: solid grey;
=======
  overflow: hidden;
  position: relative;
>>>>>>> Fix signup styling
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
  const [ location, setLocation ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ result, setResult ] = useState("");

  let { state, dispatch } = useContext(UserContext);

  const driverSignUp = event => {
    event.preventDefault();
    axios.post('https://rideforlife.herokuapp.com/api/drivers/register', { firstname: "1", lastname: "1", username: "1", password: "1", email: "1", phone: "1", vehicle_type: "bodaboda" })
     .then(data => setResult(JSON.stringify(data)))
     .catch(error => setResult(JSON.stringify(error)))
  };



  return (
    <Body>
      <Container>
      {result}
      <div>
        <SignUpButtons>
           {/* <NavLink className = 'nav-link' to = '/'>Home</NavLink>
           <NavLink to = '/'>Home</NavLink> */}
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

      </div>
      </Container>
    </Body>
  );
};

export default SignUpPage;
