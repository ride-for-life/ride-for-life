
import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  NavLink, Link,
  Route
  
} from 'react-router-dom';

import './index.css';

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




const Button = styled.button`
    background: ${props => props.primary ? "#4C6A2D" : "white"};
    color: ${props => props.primary ? "white" : "#78849E"};
    font-size: 15pt;
    text-align: center;
    height: 52pt;
    width: 100pt;
    margin: 20px 0;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 600;
    // font-family: Montserrat;

`;

const SignUpButtons = styled.div`
  height: 44pt;
  width: 550pt;
  display: flex;
  justify-content: space-evenly;
`;

const Inputs = styled.div`
  background-image: url('https://cdn3.imggmi.com/uploads/2019/3/12/b4248d8e1fba7fb20e1f019363b88592-full.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 700pt;
  margin-top: 0pt;
  width: 550pt;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const Input = styled.input`
  height: 75pt;
  width: 75%;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  border-radius: 20px;
  border: solid white;
  font-size: 18pt;
  font-weight: 600;
  color: #78849E;
  font-color: green;
  text-align: left;
  padding-left: 10%;
`;

const ContinueButton = styled.button`
  height: 75pt;
  width: 85%;
  display: flex;
  background: #A39280;
  border: solid #A39280;
  justify-content: center;
  margin: 0 auto;
  border-radius: 20px;
  font-size: 15pt;
  font-weight: 600;
  color: white;
  font-color: green;
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


