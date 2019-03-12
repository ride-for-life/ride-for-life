import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGoogleMap from "react-google-map"
import React from 'react';
import ReactDOM from 'react-dom';

const Map = () => 
{  return (
    <ReactGoogleMapLoader
        params={{
            key: "AIzaSyCI3cDduwloUnVSfREo-6wuRYTMjOHcQjc",
            libraries: "places,geometry",
        }}
        render={googleMaps =>
            googleMaps && (
              <div style={{height: "300px"}}>
                <ReactGoogleMap
                  googleMaps={googleMaps}
                  center={{lat: 0.31628, lng: 32.58219}}
                  zoom={8}
                />
              </div>
            )}
    />
)};
    export default Map;