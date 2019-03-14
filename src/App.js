import React, { Component } from 'react';
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGoogleMap from "react-google-map";
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import SignUpPage from './components/SignUp/SignUpPage'
import PhoneNumber from './components/PhoneNumber'
import NavBar from './components/NavBar'
import Phone1 from './components/Phone1';
import Phone2 from './components/Phone2';
import MapContainer from './components/maps/MapContainer'
import SubmitRating from './components/Review';
import ConfirmPickup from './components/ConfirmPickup';
import DriverProfile from './components/DriverProfile';



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

    render() {
      return (
        <div>
          <NavBar />
          <Route exact path='/' component={PhoneNumber} />
          <Route exact path='/info' component={Phone1} />
          <Route exact path='/mom-to-be' component={Phone2} />
          <Route exact path='/caregiver' component={Phone2} />
          <Route exact path='/sign-up' component={SignUpPage} />
          <Route exact path='/search' component={MapContainer} />
          <Route exact path='/submit-rating' component={SubmitRating} />
          <Route exact path='/confirm-pickup' component={ConfirmPickup} />
          <Route exact path='/profile' component={DriverProfile} />
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
