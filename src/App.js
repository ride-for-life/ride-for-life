import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import PhonePage from './PhonePage'
import TransitionButton from './components/TransitionButton'
import Phone1 from './components/Phone1'
import Phone2 from './components/Phone2'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <PhonePage />
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
