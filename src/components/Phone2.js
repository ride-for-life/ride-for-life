import React from 'react'
import TransitionButton from './TransitionButton'
import BackButton from './BackButton'
import { NavLink } from 'react-router-dom'
import { PhoneDiv, NavStyle, HeadText, colors } from './styles';
import styled from 'styled-components';

const title = 'Do you want to:'

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
`
const Body = styled.div`
    width: 100%;
    background: ${ colors.dusk };
`
const Phone2 = () => {
    return (
        <Body>
            <PhoneDiv style={{position: "relative"}}>
            <NavStyle to='/'>←Home</NavStyle>
                <HeadText>{title}</HeadText>
                <ButtonContainer>
                    <TransitionButton link='/confirm-pickup' text='REQUEST RIDE' />
                    <TransitionButton link='/search' text='VIEW DRIVERS' />
                </ButtonContainer>
            </PhoneDiv>
        </Body>
    )
}

export default Phone2
