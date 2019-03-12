import React from 'react'
import '../App.css';
import SignUpPage from './SignUpPage'
import {Route, Link, NavLink} from 'react-router-dom';
import Phone1 from './Phone1';
import Phone2 from './Phone2';



const NavBar = () => {
    return (
        <div>
        <NavLink className='tab' to='/Phone1'>Phone1</NavLink>
        <NavLink className='tab' to='/Phone2'>Phone2</NavLink>
        <NavLink className='tab' to='/PhoneNumber'>Phone Number</NavLink>
        <NavLink className='tab' to='/SignUp'>Sign Up</NavLink>
        <NavLink className='tab' to='/DriverProfile'>Driver Profile</NavLink>
        <NavLink className='tab' to='/DriverProfile1'>Driver Profile - 1</NavLink>
        <NavLink className='tab' to='/SearchResult'>Search Result</NavLink>
        <NavLink className='tab' to='/ConfirmPickup'>Confirm Pickup</NavLink>
        <NavLink className='tab' to='/SubmitRating'>Submit Rating</NavLink>

        <Route exact path='/SignUp' component={SignUpPage} />
        <Route exact path='/Phone1' component={Phone1} />
        <Route exact path='/Phone2' component={Phone2} />
        {/* <Route exact path='/PhoneNumber' component={PhoneNumber} /> */}

        </div>
    )
}

export default NavBar