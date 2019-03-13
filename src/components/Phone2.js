import React from 'react'
import TransitionButton from './TransitionButton'
import BackButton from './BackButton'
import { Route, Link } from 'react-router-dom'
import { PhoneDiv, HeadText } from './styles';
import styled from 'styled-components';

const title = 'Do you want to:'

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
`
const Phone2 = () => {
    return (
        <PhoneDiv>
            <BackButton />
            <HeadText>{title}</HeadText>
            <ButtonContainer>
                <TransitionButton link='/request-ride' route='somecomponent' text='REQUEST RIDE' />
                <TransitionButton link='/view-drivers' route='somecomponent' text='VIEW DRIVERS' />
            </ButtonContainer>
        </PhoneDiv>
    )
}

export default Phone2
