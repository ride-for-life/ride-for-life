import styled from 'styled-components';
import { colors, fontFamily } from './Theme.js';

export const PhoneDiv = styled.div`
    display: flex;
    padding: 10% 5%;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 800px;
    max-width: 100%;
    background: ${colors.dusk};
    min-height: 100vh;
    margin: 0 auto;
    font-family: ${fontFamily};
`;
