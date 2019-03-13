import React from 'react';
import { Route, Link } from 'react-router-dom';
import { WideCap } from './styles';

const TransitionButton = props => {
  // The mockups include Transition Animations but let's save those
       return (
               <Link to={props.link} style={{maxWidth: '100%'}}> 
                  <WideCap>
                    {props.text}
                  </WideCap>
                </Link>
    );
}

export default TransitionButton;
