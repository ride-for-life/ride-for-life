import React, { useState, useEffect, useContext } from "react";
import { withRouter } from 'react-router-dom'
import axios from "axios";
import { UserContext } from './UserContext';
import { WideCap, Input, Inputs, colors, NavStyle, FormContainer } from "./styles";
import styled from 'styled-components';

const Body = styled.div`
  overflow: hidden;
  position: relative;
  min-height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  justify-content: space-around;
  align-items: center;
  * {
    margin: 20px 0;
  }
`;

const Login = props => {
  const [name, setName] = useState("cool?");
  const [pass, setPass] = useState("awesome!");
  const [result, setResult] = useState("Awaiting results?");
  const { state, dispatch } = useContext(UserContext);
  const id = 6;

 const driverLogin = (event) => {
   event.preventDefault();
   const assembleQuery = { loginQuery: name , password:  pass  };
   axios.post('https://rideforlife.herokuapp.com/api/drivers/login', assembleQuery)
    .then(res => {
      dispatch({type: "loginSuccess", payload: res.data.token });
      setResult(JSON.stringify(res))})
    .catch(error => setResult(JSON.stringify(error)))

    // so the next step is to take the token when it comes back, dispatch an update of "user is logged in" to Context, and then move to the Driver Profile page, use localstorage for the token for nnnnoooow maybe?
    // this needs protected route implementation
    // we need to start being able to put edit a driver's profile.
 };

 // Method Url: /api/drivers/:id

 return (
   <Body>
     <FormContainer style={{paddingTop: "10%"}}>
           <NavStyle style={{color: colors.dusk}} to = '/'>←Home</NavStyle>
   <Form>
    <Input type="text" onChange={event => setName(event.target.value)} value={name} />
    <Input type="password" onChange={event => setPass(event.target.value)} value={pass} />
    <WideCap onClick={driverLogin} background={colors.thunderhead}>LOGIN</WideCap>
   </Form>
    <p>{name}</p>
    <p>{pass}</p>
    <p>{result}</p>
     </FormContainer>
   </Body>
 );
};

export default Login;
