import styled from 'styled-components';

export const Button = styled.button`
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

export const SignUpButtons = styled.div`
  height: 44pt;
  width: 550pt;
  display: flex;
  justify-content: space-evenly;
`;


export const ContinueButton = styled.button`
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

export const KeyCap = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem;
  width: 3rem;
  background: #454F63;
  color: white;
  box-shadow: 1px 1px 1px 1px black;
  border: 0px;
`;


export const GhostCap = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem;
  width: 3rem;
  background: transparent;
  color: white;
  border: 0px;
`;

export const WideCap = styled.button`
    background: #4C6A2D;
    font-size: 30px;
    text-align: center;
    height: 72px;
    width: 327px;
    color: #FFFFFF;
    margin: 20px 0;
    border: none;
    border-radius: 12px;
    cursor: pointer;
`
