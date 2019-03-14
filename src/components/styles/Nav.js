import { colors, fontFamily } from "./Theme.js";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const NavStyle = styled(NavLink)`
  position: absolute;
  left: 10%;
  top: 20px;
  color: ${colors.white};
  font-family: ${fontFamily};
  font-weight: bold;
  font-size: 1.3rem;
  &:link {
  text-decoration: none;
  }
`

