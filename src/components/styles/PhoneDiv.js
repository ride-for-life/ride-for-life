import styled from 'styled-components';
import { colors } from './Theme.js';

export const PhoneDiv = styled.div`
    /* color: #FFFFFF;
    * background: #2A2E43;
    * display: flex;
    * flex-direciton: column;
    * justify-content: space-between;
    * align-items: center;
    * width: 375px;
    * max-width: 100%;
    * height: 812px;
    * font-family: Gibson; */
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
`;
