
import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import styled from 'styled-components';
import {BrowserRouter as Router, NavLink, Link, Route} from 'react-router-dom';
import { Button, ContinueButton } from './styles/KeyCaps.js';
import { colors } from './styles/Theme.js';

const Body = styled.div`
  overflow: hidden;
  position: relative;
`;

const Container = styled.div`
  width: 800px;
  display: flex;
  margin: 0 auto;
  margin-top: 4%;
  flex-direction: column;
   &:before {
    content: "";
    position: absolute;
    top: 35%;
    left: 50%;
    width: 80vh;
    height: 80vh;
    border-radius: 100%;
    background: ${colors.forest};
    z-index: -1;
  }
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

// TODO: Create div wrapper to house an after with the box shadow with a z index
// such that is under the inputs and under the circle.
const Input = styled.input`
  height: 80px;
  width: 100%;
  box-sizing: border-box;
  max-width: 100%;
  box-shadow: 0 5px 10px ${colors.turbulence};
  color: ${colors.thunderhead};
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  border-radius: 20px;
  border: solid white;
  font-size: 18pt;
  font-weight: 600;
  color: #78849E;
  text-align: left;
  padding-left: 10%;
`;

const SignUpPage = props => {

  let { state, dispatch } = useContext(UserContext);

  return (
    <Body>

      <Container>
        <SignUpButtons>
           <NavLink className = 'nav-link' to = '/'>Home</NavLink>
           <NavLink to = '/'>Home</NavLink>
           <Button style={{border: 'none', height: '50px', borderRadius: '18px'}} color={colors.thunderhead} background={colors.white}><Link to='/sign-in'>SIGN IN</Link></Button>
           <Button style={{border: 'none', height: '50px', borderRadius: '18px'}} background={colors.forest}>SIGN UP</Button>
        </SignUpButtons>


           <form /*onSubmit = {this.addSmurf}*/>
           <Inputs>
             <Input type="text"
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

      </Container>
    </Body>
  );
};

export default SignUpPage;
