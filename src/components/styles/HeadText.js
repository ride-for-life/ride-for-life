import styled from 'styled-components';
import { fontFamily } from './Theme.js';

export const HeadText = styled.h1`
  width: 100%;
  max-width: 100%;
  text-align: left;
  /* FIXME: This is a hack. Reflow PhoneDiv and use correct width */
  padding-left: 25px;
  font-family: ${fontFamily};
`
