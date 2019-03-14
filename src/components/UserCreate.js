import React, { useState, useEffect, useContext } from "react";
import { withRouter } from 'react-router-dom'
import axios from "axios";
import { UserContext } from './UserContext';
import { WideCap, Input, Inputs, colors } from "./styles";
import styled from 'styled-components';

const Body = styled.div`
  overflow: hidden;
  position: relative;
  min-height: 100vh;
`;

const Container = styled.div`
  width: 800px;
  max-width: 100%;
  display: flex;
  margin: 0 auto;
  margin-top: 4%;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
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

const UserCreate = props => {
  const [name, setName] = useState("userpage?");
  const [pass, setPass] = useState("awesome!");
  const [result, setResult] = useState("Awaiting results?");
  const { state, dispatch } = useContext(UserContext);
  const id = 1;

 useEffect(
    () => {
      const axiosGet = async () => {
        const data = await axios.get(
          `https://rideforlife.herokuapp.com/api/users/`
        );
        console.log(data);
      };
      axiosGet();
    },
    []
  );

 const userLogs = (event) => {
   event.preventDefault();
   console.log("started!");
   const registrationTester = {
     firstname: 'Cool',
     lastname: 'Guy',
     username: `__${Math.random().toString().slice(2,19)}__`,
     phone: `__${Math.random().toString().slice(2,19)}__`,
     email: `__${Math.random().toString().slice(2,19)}__`,
     password: 'password',
     price: 100,
     user: "test"
   };
   const phone = name;
   axios.post('https://rideforlife.herokuapp.com/api/users/register', phone)
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
     <Container>
   <Form>
    <Input type="text" onChange={event => setName(event.target.value)} value={name} />
    <Input type="text" onChange={event => setPass(event.target.value)} value={pass} />
    <WideCap onClick={userLogs} background={colors.thunderhead}>LOGIN</WideCap>
   </Form>
    <p>{name}</p>
    <p>{pass}</p>
    <p>{result}</p>
     </Container>
   </Body>
 );
};

export default UserCreate;
