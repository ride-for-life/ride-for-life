import React, { Component } from 'react';
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGoogleMap from "react-google-map";
import SignUpPage from './components/SignUpPage'
// import PhoneNumber from './components/PhoneNumber'

import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import TransitionButton from './components/TransitionButton';
import Phone1 from './components/Phone1';
import Phone2 from './components/Phone2';
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myArray: [
        {lat: -34.397, lng: 150.644},
        {lat: -24.397, lng: 140.644},
        {lat: -14.397, lng: 130.644},
      ]
    };
  };

    render() {  return (
      <div>
        <NavLink className='tab' to='/Phone1'>Phone1</NavLink>
        <NavLink className='tab' to='/Phone2'>Phone2</NavLink>
        <NavLink className='tab' to='/PhoneNumber'>Phone Number</NavLink>
        <NavLink className='tab' to='/SignUp'>Sign Up</NavLink>
        <NavLink className='tab' to='/DriverProfile'>Driver Profile</NavLink>
        <NavLink className='tab' to='/DriverProfile1'>Driver Profile - 1</NavLink>
        <NavLink className='tab' to='/SearchResult'>Search Result</NavLink>
        <NavLink className='tab' to='/ConfirmPickup'>Confirm Pickup</NavLink>
        <NavLink className='tab' to='/SubmitRating'>Submit Rating</NavLink>

        <Route exact path='/SignUp' component={SignUpPage} />
        <Route exact path='/Phone1' component={Phone1} />
        <Route exact path='/Phone2' component={Phone2} />
        {/* <Route exact path='/PhoneNumber' component={PhoneNumber} /> */}

        {/* <SignUpPage /> */}
        <Route exact path='/' component={Phone1} />
        <Route exact path='/mom-to-be' component={Phone2} />
        <Route exact path='/caregiver' component={Phone2} />
        </div>
    );
  }
}


// {
//   this.state.myArray.map((a,index) => {
//     return <MapDirectionRenderer
//       direction={a}
//       key={index}
//     />
//   })
// }
