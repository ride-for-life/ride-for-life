import React from 'react';
import ReactDOM from 'react-dom';


import { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom'
import axios from "axios";


import './maps.css';

// const driversdata = props => {
//   const [drivers, setDriver] = useState("cool?");
//   const [pass, setPass] = useState("awesome!");
//   const [result, setResult] = useState("Awaiting results?");

//  useEffect(
//     () => {
//       const axiosGet = async () => {
//         const data = await axios.get(
//           `https://rideforlife.herokuapp.com/api/drivers`
//         );
//         setResult(JSON.stringify(data));
//       };
//       axiosGet();
//     },
//     []
//   );

//  const driverLogin = (event) => {
//    event.preventDefault();
//    const assembleQuery = { loginQuery: name , password:  pass  };
//    axios.post('https://rideforlife.herokuapp.com/api/drivers/login', assembleQuery)
//     .then(data => setResult(JSON.stringify(data)))
//     .catch(error => setResult(JSON.stringify(error)))
//  };





const mapStyles = {
  map: {

    position: 'absolute',    
    width: '550pt',
    height: '80%',
    margin: '0 auto',
    marginTop: '15%',

  }
};
export class CurrentLocation extends React.Component {
  constructor(props) {
    super(props);

    const { lat, lng } = this.props.initialCenter;
    this.state = {
      drivers: [],
      currentLocation: {
        lat: lat,
        lng: lng
      }
    };
  }
  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          const coords = pos.coords;
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          });
        });
      }
    }
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      console.log(`componentDidUpdate prevlocation, currentLocation = ` , prevState.currentLocation, this.state.currentLocation);

      var origin = this.state.currentLocation;
    //var origin1 = new this.props.google.maps.LatLng(38.5633565, -121.4708225);
    //var origin2 = 'Greenwich, England';
   // var destinationA = new this.props.google.maps.LatLng(34.887692, -121.921150);
    var destinationB = new this.props.google.maps.LatLng(40.087692, -122.421150);
    var destinationC = 'San mateo, CA';
    var destination = new this.props.google.maps.LatLng(37.5633565, -121.4708225);
    

    var service = new this.props.google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
  {
    origins: [/*origin1, origin2*/ origin],
    destinations: [/*destinationA, */destinationB, destination, destinationC],
    travelMode: 'DRIVING',
    unitSystem: this.props.google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: false
  }, function(response, status) {
    if (status !== 'OK') {
      alert('Error was: ' + status);
    } else {
        console.log(response); 
        console.log(response.rows);
      let shortestRoute = response.rows.map(dest => dest.elements) // get all routes
          .reduce((a, b) => a + b) // merge routes into single array
          .reduce((min, cur) => min.duration.value <= cur.duration.value ? min : cur); // min duration
      // shortestRoute = { distance { text value } duration { text value } status}
      console.log("shortest route:", shortestRoute.duration.text);
        //console.log(response.rows[1].elements[0].duration);
      // var originList = response.originAddresses;
      // var destinationList = response.destinationAddresses;
      // var outputDiv = document.getElementById('output');
      // outputDiv.innerHTML = '';
      // deleteMarkers(markersArray);

    }
  })
      this.recenterMap();
    }
  }

  loadMap() {

    

    if (this.props && this.props.google) {
      console.log(`in loadmap() with this.props =` , this.props);
      // checks if google is available
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;

      // reference to the actual DOM element
      const node = ReactDOM.findDOMNode(mapRef);

      let { zoom } = this.props;
      const { lat, lng } = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom
        }
      );
      // maps.Map() is constructor that instantiates the map
      this.map = new maps.Map(node, mapConfig);

    }
  }

  recenterMap() {
    const map = this.map;
    const current = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
      let center = new maps.LatLng(current.lat, current.lng);
      map.panTo(center);
    }
  }

  renderChildren() {
    const { children } = this.props;

    if (!children) return;

    return React.Children.map(children, c => {
      if (!c) return;
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    });
  }

  render() {
    const style = Object.assign({}, mapStyles.map);

    return (
      <div className = 'mapcontainer'>
        <div style={style} ref="map">
          Loading map...
        </div>
        {this.renderChildren()}
      </div>
    );
  }
}
export default CurrentLocation;

CurrentLocation.defaultProps = {
  zoom: 11,
  initialCenter: { 
    lat: -1.2884,
    lng: 36.8233
  },
  centerAroundCurrentLocation: false,
  visible: true
};
