import React from 'react'
import TransitionButton from './TransitionButton'
import { PhoneDiv, HeadText, NavStyle, colors, } from './styles';
import styled from 'styled-components';

const title = 'Are you a:'

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

const Phone1 = () => {
    return (
        <Body>
        <PhoneDiv style={{position: "relative"}}>
            <NavStyle to='/'>←Home</NavStyle>
            <HeadText>{title}</HeadText>
            <ButtonContainer>
                <TransitionButton link='/sign-up' text='DRIVER' />
                <TransitionButton link='/mom-to-be' route='' text='PREGNANT MOM' />
                <TransitionButton link='/caregiver' route='' text='CAREGIVER' />
            </ButtonContainer>
        </PhoneDiv>
        </Body>
    )
}


export default Phone1
