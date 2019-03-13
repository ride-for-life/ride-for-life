import styled from 'styled-components';
import { colors, fontFamily } from './Theme.js'

export const Button = styled.button`
  color: ${props => props.color || colors.white};
  background: ${props => props.primary ? colors.white : (props.background || colors.thunderhead)}
  box-sizing: border-box;
  font-size: 15pt;
  text-align: center;
  height: 52pt;
  width: 100pt;
  max-width: 100%;
  margin: 20px 0;
  border: 4px solid ${props => props.background || colors.thunderhead};
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  font-family: ${fontFamily};
  box-shadow: inset 0 0 15px ${props => props.primary ? 'none' : (props.background || colors.thunderhead)};
  transition: color 0.3s, background 0.3s, box-shadow 0.3s;
  &:hover, &:focus {
    color: ${props => props.background || colors.thunderhead};
    background: ${props => props.color || colors.white};
    box-shadow: inset 0 0 0 ${props => props.primary ? 'none' : (props.background || colors.thunderhead)};
  }
`;

export const SignUpButtons = styled.div`
  height: 44pt;
  width: 550pt;
  display: flex;
  justify-content: space-evenly;
`;

export const ContinueButton = styled(Button).attrs(({ color, background }) => ({
    color: color || colors.white,
    background: background || colors.sand,
}))`
  height: 80px;
  width: 100%;
  margin: 0 auto;
`

export const KeyCap = styled(Button).attrs(({ color, background }) => ({
    color: color || colors.white,
    background: background || colors.storm,
}))`
  border: none;
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem;
  height: auto;
  width: 3rem;
  box-shadow: 1px 1px 1px 1px black;
  font-size: 10pt;
  &:hover, &:focus {
    box-shadow: 1px 1px 1px 1px black;
  }
`

export const GhostCap = styled(KeyCap).attrs(({ color, background }) => ({
    color: color || colors.white,
    background: 'transparent',
}))`
  &:hover, &:focus {
    color: ${props => props.color};
    background: ${props => props.background};
  }
`

export const WideCap = styled(Button).attrs(({ color, background }) => ({
    color: color || colors.white,
    background: background || colors.forest,
}))`
  height: 72px;
  width: 327px;
  font-size: 25px;
  margin: 20px 0;
`
