import React from 'react'
import TransitionButton from './TransitionButton'
import BackButton from './BackButton'
import { Route, Link } from 'react-router-dom'
import { PhoneDiv, HeadText, colors } from './styles';
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
            <PhoneDiv>
                <BackButton />
                <HeadText>{title}</HeadText>
                <ButtonContainer>
                    <TransitionButton link='/request-ride' route='somecomponent' text='REQUEST RIDE' />
                    <TransitionButton link='/view-drivers' route='somecomponent' text='VIEW DRIVERS' />
                </ButtonContainer>
            </PhoneDiv>
        </Body>
    )
}

export default Phone2
