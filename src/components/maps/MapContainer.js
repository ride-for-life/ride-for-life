import React, { Component } from 'react';
import { GoogleApiWrapper, Map, DirectionsService, InfoWindow, Marker } from 'google-maps-react';
//import GoogleMap from 'google-map-react';

import  { compose, withProps, lifecycle } from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from 'react-google-maps'

// import MyGreatPlace from './my_great_place.jsx';
// import {greatPlaceStyle} from './my_great_place_styles.js';
import CurrentLocation from './Map';


const APIkey = process.env.API_KEY;

const mapStyles = {
  map: {
    position: 'absolute',
    marginTop: '15%',
    width: '100%',
    height: '80%'
  }
};

let nairobi = {lat: -1, lng: 36};
let driverLocation = {lat: -1.2, lng: 36.6};
let davisLocation = {lat: 38.5633565, lng: -121.6708225};

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
    selectedPlace: {}
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
           { /** CurrentLocation created in ./map **/}
      <CurrentLocation centerAroundCurrentLocation = {true} google={this.props.google}>
        <Marker onClick={this.onMarkerClick} name={'Your Location'} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          {/* <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div> */}
        </InfoWindow>
        <Marker  onClick={this.onMarkerClick}
                 name = {'Hospital Location'}
                 position = {davisLocation}
               //text = {'There he is'}
        />

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
