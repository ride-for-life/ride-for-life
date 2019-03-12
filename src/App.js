import React, { Component } from 'react';
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGoogleMap from "react-google-map";
import MapDirectionRenderer from './MapDirectionRenderer';

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
    <Router>
      <div>
        {
          this.state.myArray.map((a,index) => {
            return <MapDirectionRenderer
              direction={a}
              key={index}
            />
          })
        }
      </div>

       <div>
        {/* <Link to='/'><Phone1 /></Link> */}
        <Route exact path='/' component={Phone1} />
        <Route exact path='/mom-to-be' component={Phone2} />
        <Route exact path='/caregiver' component={Phone2} />
        </div>
      </Router>
    );
  }
}

export default App;