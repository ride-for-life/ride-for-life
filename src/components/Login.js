import React, { useState, useEffect, useContext } from "react";
import { withRouter } from 'react-router-dom'
import axios from "axios";
import {UserContext } from './UserContext';
import { WideCap, Input, Inputs } from "./styles";

const Login = props => {
  const [name, setName] = useState("cool?");
  const [pass, setPass] = useState("awesome!");
  const [result, setResult] = useState("Awaiting results?");
  let { state, dispatch } = useContext(UserContext);

 useEffect(
    () => {
      const axiosGet = async () => {
        const data = await axios.get(
          `https://rideforlife.herokuapp.com/api/drivers`
        );
        setResult(JSON.stringify(data));
      };
      axiosGet();
    },
    []
  );

 const driverLogin = (event) => {
   event.preventDefault();
   const assembleQuery = { loginQuery: name , password:  pass  };
   axios.post('https://rideforlife.herokuapp.com/api/drivers/login', assembleQuery)
    .then(data => setResult(JSON.stringify(data)))
    .catch(error => setResult(JSON.stringify(error)))
    // so the next step is to take the token when it comes back, dispatch an update of "user is logged in" to Context, and then move to the Driver Profile page, use localstorage for the token for nnnnoooow maybe?
    // this needs protected route implementation
    // we need to start being able to put edit a driver's profile.
 };

 // Method Url: /api/drivers/:id

 return (
   <form>
    <Input type="text" onChange={event => setName(event.target.value)} value={name} />
    <Input type="text" onChange={event => setPass(event.target.value)} value={pass} />
    <WideCap onClick={driverLogin}>Attempt Login</WideCap>
    <p>{name}</p>
    <p>{pass}</p>
    <p>{result}</p>
   </form>
 );
};

export default Login;
