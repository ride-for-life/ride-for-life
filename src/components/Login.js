import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WideCap } from './styles';

const Login = props => {
  const [click, setClick] = useState(0);




  return (
    <div>
      <WideCap onClick={() => setClick(click +1)}>
        Increase? {click}
      </WideCap>
    </div>
  )
};

export default Login;
