import React from 'react';
import { Route, Link } from 'react-router-dom';
import { WideCap } from './styles';

const TransitionButton = props => {
  // The mockups include Transition Animations but let's save those
       return (
           <Link to={props.link} style={Object.assign({maxWidth: '100%'}, props.style)}> 
           <WideCap background={props.background} color={props.color}>
                    {props.text}
                  </WideCap>
                </Link>
    );
}

export default TransitionButton;
