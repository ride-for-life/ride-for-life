import styled from 'styled-components';
import { PhoneDiv } from './PhoneDiv.js';
import { colors } from './Theme.js';

export const DriverDiv = styled(PhoneDiv)`
  background: none;
`;

export const DriverNameDiv = styled.div`
  text-align: center;
  img {
    width: 150px;
    height: 150px;
    background: ${colors.storm};
    background-image: linear-gradient(${colors.storm}, ${colors.evening});
    border-radius: 20px;
  }
  h1 {
    color: ${colors.evening};
  }
  h2 {
    color: ${colors.thunderhead};
  }
`

export const DriverStatsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 550px;
  max-width: 100%;
  padding: 20px 0;
  border-radius: 20px;
  box-shadow: 0 0 10px ${colors.thunderhead + '44'};
  margin: 20px auto;
  background: ${colors.white};
  div {
    h2 {
      color: ${colors.storm};
    }
    p {
      color: ${colors.thunderhead};
    }
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    border-right: 3px solid ${colors.cloud};
    &:last-child {
    border-right: none;
    }
  }
`

export const DriverBioDiv = styled.div`
  background: ${colors.eclipse};
  color: ${colors.white + 'AF'};
  box-sizing: border-box;
  padding: 25px;
  width: 550px;
  max-width: 100%;
  border-radius: 20px;
  position: relative;
  .caret {
    position: absolute;
    right: 20px;
    top: 20px;
    color: ${colors.thunderhead};
    cursor: pointer;
  }
  .driver-heading {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: 70px;
      height: 70px;
      background: ${colors.sand};
      border-radius: 100%;
      margin-right: 20px;
    }
    h3, p {
      margin: 0 !important; // FIXME
    }
    h3 {
      color: ${colors.white};
      margin-bottom: 5px !important;
    }
  }
  .driver-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${colors.evening};
    padding-top: 12px;
    font-weight: bold;
    svg {
      height: 15px;
      opacity: 0.50;
      cursor: pointer;
    }
  }
` 
