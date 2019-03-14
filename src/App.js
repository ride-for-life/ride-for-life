import React, { Component } from 'react';
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGoogleMap from "react-google-map";
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import TransitionButton from './components/TransitionButton';
import SignUpPage from './components/SignUpPage'
import Login from './components/Login'
import PhoneNumber from './components/PhoneNumber'
import NavBar from './components/NavBar'
import Phone1 from './components/Phone1';
import Phone2 from './components/Phone2';
import MapContainer from './components/maps/MapContainer'
import SubmitRating from './components/Review';


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
          <Route exact path='/sign-in' component={Login} />
          <Route exact path='/search-result' component={MapContainer} />
          <Route exact path='/submit-rating' component={SubmitRating} />

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
