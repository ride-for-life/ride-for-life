import styled from 'styled-components';
import { colors, fontFamily } from './Theme.js';

export const TextDisplay = styled.p`
  box-shadow: 0 0 5px ${colors.black + '33'};
  background: ${colors.storm};
  color: ${colors.white};
  font-size: 1.6rem;
  line-height: 72px;
  font-weight: bold;
  font-family; ${fontFamily};
  box-sizing: border-box;
  border-radius: 12px;
  min-height: 72px;
  width: 330px;
  max-width: 100%;
  padding: 0 15px;
`;
