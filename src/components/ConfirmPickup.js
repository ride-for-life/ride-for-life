import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { colors, fontFamily, NavStyle, OverlayDiv, WideCap } from './styles';
import TransitionButton from './TransitionButton.js';
import styled from 'styled-components';

// import MyGreatPlace from './my_great_place.jsx';
// import {greatPlaceStyle} from './my_great_place_styles.js';
import CurrentLocation from './maps/Map';


const APIkey = process.env.REACT_APP_API_KEY;

// FIXME: The render happens twice, probably because of async stuff, so we have
// to absolutely position this div so that the two resultant elements are on top of
// each other, which is a horrible hack to prevent the appearance of a bug.
const OverlayHack = styled(OverlayDiv)`
position: absolute;
top: 40px;
width: 100%;
padding-top: 0;
`;

const Trip = styled.div`
    pointer-events: all;        
    width: 550px;
    max-width: 100%;
    background: ${colors.white};
    color: ${colors.dusk};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: ${fontFamily};
    font-weight: bold;
    font-size: 1.2rem;
    padding: 20px 20px 20px 80px;
    box-sizing: border-box;
    border-radius: 20px;
    box-shadow: 0 0 5px ${colors.storm + '5c'};
    position: relative;
    &:before {
    content: "";
        width: 0px;
        height: 70px;
        border: 2px dashed ${colors.sky +'8F'};
        position: absolute;
        left: 43px;
        top: 55px;
    }
    .panel {
        cursor: pointer;
        width: 100%;
        position: relative;
        &:before {
            position: absolute;
            left: -40px;
            top: 22px;
            content: "";
            width: 10px;
            height: 10px;
            border-radius: 100%; 
            background: ${colors.thunderhead};
        }
        &:first-child {
            border-bottom: 1px solid ${colors.thunderhead + '5c'};
        }
        .address {
            width: 100%;
            box-sizing: border-box;
            padding: 20px 0;
            color: ${colors.storm};
            h1, h4 {
                margin: 0;
            }
            h1 {
                font-size: 1.4rem;
                margin-top: 5px;
            }
            h4 {
                font-size: 1.0rem;
                color: ${colors.thunderhead};
                font-weight: normal;
            }
        }
    }
`;
const Ride = styled.div`
    pointer-events: all;        
    width: 100vw;
    max-width: 600px;
    background: ${colors.dusk};
    color: ${colors.white};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: ${fontFamily};
    font-size: 1.2rem;
    padding: 20px 40px 20px 40px;
    box-sizing: border-box;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-bottom: -20px; // Fixme
    h1 {
    font-size: 1.8rem;
    margin: 5px 0;
    }
    h2 {
    font-size: 1.3rem;
    margin: 5px 0;
    font-weight: normal;
    color: ${colors.cloud + 'AF'};
    }
    h4 {
    font-size: 1.1rem;
    margin: 5px 0;
    font-weight: normal;
    color: ${colors.cloud};
    }
`



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
        <OverlayHack>
        <NavStyle style={{color: colors.dusk, pointerEvents: "all"}} to = '/'>←Home</NavStyle>
        <Trip>
        <div className='panel'>
        <div className='address'>
            <h4>Pickup Location</h4>
            <h1>Your Address</h1>
        </div>
        </div>
        <div className='panel'>
        <div className='address'>
            <h4>Destination Location</h4>
            <h1>Hospital</h1>
        </div>
        </div>
        </Trip>
      <Ride>
          <h4>Estimated Pickup Time: 8 Mins</h4>
          <h1> $10 </h1>
          <h2> Fare Estimate</h2>
          <WideCap background={colors.sand} style={{width: "100%"}}>Send Request</WideCap>
          
      </Ride>
        </OverlayHack>
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

</div>

    ); //end return
  }
}

console.log(APIkey);
export default GoogleApiWrapper({
  apiKey: APIkey
})(MapContainer);
