import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  NavLink, Link,
  Route

} from 'react-router-dom';
import axios from 'axios';
import './index.css';
import { Input, Inputs, SignUpButtons, ContinueButton, Button } from '../styles';

const Body = styled.div`
// width: 559pt;
// margin-right: 50%;
width: 550pt;
display: flex;
 margin: 0 auto;
 margin-top: 4%;
//  margin-right: 30%;\
border: solid grey;
`;



const SignUpPage = props => {

  let { state, dispatch } = useContext(UserContext);





  return (
    <Body>

      <div>
        <SignUpButtons>
           <NavLink className = 'nav-link' to = '/'>Home</NavLink>
           <NavLink to = '/'>Home</NavLink>
           <Button>SIGN IN </Button>
           <Button primary>SIGN UP</Button>
        </SignUpButtons>


           <form /*onSubmit = {this.addSmurf}*/>
           <Inputs>
             <Input  style = {{color: "green"}}
                     type="text"
                     name="name"
                    //  value={this.state.name}
                    //  onChange={this.handleChanges}
                     placeholder="Name"
              />
              <Input
                     type="text"
                     name="location"
                    //  value={this.state.age}
                    //  onChange={this.handleChanges}
                     placeholder="Location"
              />
              <Input
                     type="text"
                     name="price"
                    //  value={this.state.height}
                    //  onChange={this.handleChanges}
                     placeholder="Price"
              />
              <Input
                     type="text"
                     name="photo"
                    //  value={this.state.height}
                    //  onChange={this.handleChanges}
                     placeholder="Upload Photo"
              />
              <ContinueButton> CONTINUE </ContinueButton>
               </Inputs>
            </form>

      </div>
    </Body>
  );
};

export default SignUpPage;
