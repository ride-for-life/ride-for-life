import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  NavLink, Link,
  Route

} from 'react-router-dom';
import axios from 'axios';
import '../../index.css';
import { Input, Inputs, SignUpButtons, ContinueButton, Button } from '../styles';

const Body = styled.div`
// width: 559pt;
// margin-right: 50%;
width: 550pt;
display: flex;
 margin: 0 auto;
 margin-top: 4%;
//  margin-right: 30%;\
border: solid grey;
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
    axios.post('https://rideforlife.herokuapp.com/api/drivers/register', { firstname: "1", lastname: "1", username: "1", password: "1", phone: "1", vehicle_type: "bodaboda" })
     .then(data => setResult(JSON.stringify(data)))
     .catch(error => setResult(JSON.stringify(error)))
  };



  return (
    <Body>
      {result}
      <div>
        <SignUpButtons>
           <NavLink className = 'nav-link' to = '/'>Home</NavLink>
           <NavLink to = '/'>Home</NavLink>
           <Button>SIGN IN </Button>
           <Button primary>SIGN UP</Button>
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
    </Body>
  );
};

export default SignUpPage;
