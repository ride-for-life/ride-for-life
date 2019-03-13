import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom'
import axios from "axios";
import { WideCap, Input, Inputs } from "./styles";

const Login = props => {
  const [name, setName] = useState("cool?");
  const [pass, setPass] = useState("awesome!");
  const [result, setResult] = useState("Awaiting results?");

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
   axios.post('https://rideforlife.herokuapp.com/api/drivers/login', { loginQuery: "Mariane.OKon", password: "password" })
    .then(data => setResult(JSON.stringify(data)))
    .catch(error => setResult(JSON.stringify(error)))
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
