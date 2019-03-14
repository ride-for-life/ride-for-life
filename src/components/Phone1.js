import React from 'react'
import TransitionButton from './TransitionButton'
import BackButton from './BackButton'
import { Route, Link } from 'react-router-dom'
import { PhoneDiv, HeadText } from './styles';
import styled from 'styled-components';

const title = 'Are you a:'

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
`

const Phone1 = () => {
    return (
        <PhoneDiv>
            <BackButton />
            <HeadText>{title}</HeadText>
            <ButtonContainer>
                <TransitionButton link='/sign-up' text='DRIVER' />
                <TransitionButton link='/mom-to-be' route='' text='PREGNANT MOM' />
                <TransitionButton link='/caregiver' route='' text='CAREGIVER' />
            </ButtonContainer>
        </PhoneDiv>
    )
}


export default Phone1
