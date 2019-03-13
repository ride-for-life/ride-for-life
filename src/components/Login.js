import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WideCap } from './styles';

const Login = props => {
  const [click, setClick] = useState(0);
  useEffect(() => {
    axios.get('https://rideforlife.herokuapp.com/api/'), [count]
  }

}, [click]);


  return (
    <WideCap onClick={() => setCount(count +1)}
      {click}
    </WideCap>
  )
};

export default Login;
