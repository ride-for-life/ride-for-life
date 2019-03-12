import React from 'react'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"

export default class MapDirectionRenderer extends React.Component {
  render() {
    return (
      <div>
        <MyMapComponent
          key={this.props.key}
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{height: `100%`}}/>}
          containerElement={<div style={{height: `400px`}}/>}
          mapElement={<div style={{height: `50%`}}/>}
          direction={this.props.direction}
        />
      </div>
    )
  }
}


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{lat: props.direction.lat, lng: props.direction.lng}}
  >
    {props.isMarkerShown && <Marker position={{lat: -34.397, lng: 150.644}}/>}
  </GoogleMap>
));



// const { compose, withProps, lifecycle } = require("recompose");
// const {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   DirectionsRenderer,
// } = require("react-google-maps");

// const MapWithADirectionsRenderer = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap,
//   lifecycle({
//     componentDidMount() {
//       const DirectionsService = new google.maps.DirectionsService();

//       DirectionsService.route({
//         origin: new google.maps.LatLng(41.8507300, -87.6512600),
//         destination: new google.maps.LatLng(41.8525800, -87.6514100),
//         travelMode: google.maps.TravelMode.DRIVING,
//       }, (result, status) => {
//         if (status === google.maps.DirectionsStatus.OK) {
//           this.setState({
//             directions: result,
//           });
//         } else {
//           console.error(`error fetching directions ${result}`);
//         }
//       });
//     }
//   })
// )(props =>
//   <GoogleMap
//     defaultZoom={7}
//     defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
//   >
//     {props.directions && <DirectionsRenderer directions={props.directions} />}
//   </GoogleMap>
// );

// <MapWithADirectionsRenderer />