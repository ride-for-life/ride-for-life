// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react'
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGoogleMap from "react-google-map"
import MapDirectionRenderer from './MapDirectionRenderer'

export default class App extends React.Component {
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
        {
          this.state.myArray.map((a,index) => {
            return <MapDirectionRenderer
              direction={a}
              key={index}
            />
          })
        }
      </div>
    );
  }
}