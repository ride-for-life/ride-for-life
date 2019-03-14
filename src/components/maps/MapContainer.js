import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
//import GoogleMap from 'google-map-react';

import  { compose, withProps, lifecycle } from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from 'react-google-maps'

// import MyGreatPlace from './my_great_place.jsx';
// import {greatPlaceStyle} from './my_great_place_styles.js';
import CurrentLocation from './Map';


const APIkey = process.env.REACT_APP_API_KEY;

// const mapStyles = {
//   map: {
//     position: 'absolute',
//     marginTop: '15%',
//     width: '100%',
//     height: '30%'
//   }
// };

let nairobi = {lat: -1, lng: 36};
let driverLocation = {lat: -1.2, lng: 36.6};
let davisLocation = {lat: 38.5633565, lng: -121.6708225};
let davisLocation1 = {lat: 38.7633565, lng: -121.4708225};
let davisLocation2 = {lat: 38.4633565, lng: -121.7708225};

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
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    drivers: [{name:1, loc: {lat: 38.5633565, lng: -121.6708225}},
              {name:2, loc: {lat: 38.3633565, lng: -121.6908225}},
              {name:3, loc: {lat: 38.4133565, lng: -121.7108225}},
              {name:4, loc: {lat: 38.4333565, lng: -121.2458225}},
              {name:5, loc: {lat: 38.6533565, lng: -121.1308225}} 
            ,{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},]
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
      console.log( Object.values(this.props.drivers), typeof this.props.drivers);
      console.log( this.props.drivers[0].location );
      console.log( parseFloat(this.props.drivers[0].location ));
      console.log(this.props.drivers[0].location.replace(',',' '));
      console.log( parseFloat(this.props.drivers[0].location.replace(',',' '))  )
    };

  render() {
    return (
      <div>
           { /** Map loaded and centered on browser's current location **/}
      <CurrentLocation centerAroundCurrentLocation = {true} google={this.props.google} drivers = {this.props.drivers}   >
 
           { /** Marker showing users current location **/}
        <Marker onClick={this.onMarkerClick} name={'Your Location'} position = {this.props.CurrentLocation} />
        <InfoWindow
                marker  = {this.state.activeMarker}
                visible = {this.state.showingInfoWindow}
                onClose = {this.onClose}
                content = '<div id="content"><h1 id="firstHeading" class="firstHeading">Uluru</h1></div>'

        ><div><h2>{this.state.selectedPlace.name}</h2></div>
       </InfoWindow>

       { /** Generate markers for all drivers NOTE: DRIVERS ARE NOT THE REAL DRIVERS OBTAINED FROM SERVER **/}
        {Object.values(this.props.drivers).map( (driver , index) => <Marker onClick={this.onMarkerClick} name={`Driver ${driver.firstname}`} position = {this.state.drivers[index].loc}/>
        )}
           
            { /** Displays a window showing drivers name when clicked **/}
        <InfoWindow
                marker  = {this.state.activeMarker}
                visible = {this.state.showingInfoWindow}
                onClose = {this.onClose}
                content = '<div id="content"><h1 id="firstHeading" class="firstHeading">Uluru</h1></div>'

        ><div><h2>{this.state.selectedPlace.name}</h2></div>
        </InfoWindow>
       
        
      </CurrentLocation>

</div>

    ); //end return
  }
}

console.log(APIkey);
export default GoogleApiWrapper({
  apiKey: APIkey
})(MapContainer);
