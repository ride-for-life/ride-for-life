import styled from 'styled-components';
import { colors, fontFamily } from './Theme.js';

export const HeadText = styled.h1`
  width: 327px;
  max-width: 100%;
  text-align: left;
  /* FIXME: This is a hack. Reflow PhoneDiv and use correct width */
  color: ${colors.white};
  font-family: ${fontFamily};
`
