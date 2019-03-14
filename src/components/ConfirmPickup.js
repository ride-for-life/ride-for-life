import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

// import MyGreatPlace from './my_great_place.jsx';
// import {greatPlaceStyle} from './my_great_place_styles.js';
import CurrentLocation from './maps/Map';


const APIkey = process.env.REACT_APP_API_KEY;



function createMapOptions(maps) {
  // next props are exposed at maps
  // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
  // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
  // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
  // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
  // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
  return {
    zoomControlOptions: {
      position: maps.ControlPosition.RIGHT_CENTER,
      style: maps.ZoomControlStyle.SMALL
    },
    mapTypeControlOptions: {
      position: maps.ControlPosition.TOP_RIGHT
    },
    mapTypeControl: true
    // mapTypeID: 'satellite'
  };
}


export class MapContainer extends Component {

  state = {
    showingInfoWindow: true,
    activeMarker: {},
    selectedPlace: {},
    
  }


  onMarkerClick = (props, marker, e) =>
    this.setState ({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true

    });

    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
      
    };

  render() {
    return (
      <div>
        <div className = "location-info">
            <h4>Pickup Location</h4>
            <h1>Your Address</h1>
            <h4>Destination Location</h4>
            <h1>Hospital</h1>
        </div>
           { /** Map loaded and centered on browser's current location **/}
      <CurrentLocation centerAroundCurrentLocation = {true} google={this.props.google} drivers = {this.props.drivers} zoom= {18}  >
 
           { /** Marker showing users current location **/}
        <Marker onClick={this.onMarkerClick} name={'Your Location'} position = {this.props.CurrentLocation} />
        <InfoWindow
                marker  = {this.state.activeMarker}
                visible = {this.state.showingInfoWindow}
                onClose = {this.onClose}
               
        ><div><h2>{this.state.selectedPlace.name}</h2></div>
       </InfoWindow>

      </CurrentLocation>
      <div className = 'ride-info'>
          <h4>Estimated Pickup Time : 8 Mins</h4>
          <h1> $10 </h1>
          <h2> Fare Estimate</h2>
          <button className = 'request-ride'><h2>Send Request</h2></button>
          
      </div>

</div>

    ); //end return
  }
}

console.log(APIkey);
export default GoogleApiWrapper({
  apiKey: APIkey
})(MapContainer);
