import React from 'react'
import TransitionButton from './TransitionButton'
import BackButton from './BackButton'
import { Route, Link } from 'react-router-dom'
import { PhoneDiv, HeadText } from './styles';

const title = 'Are you a:'

const header = {
    width: '100%',
    marginLeft: '24px',
}

const all = {
    color: '#FFFFFF',
    background: '#2A2E43',
    display: 'flex',
    justifyContent: 'center',
    width: '375px',
    flexWrap: 'wrap',
    height: '812px',
    fontFamily: 'Gibson' //need to add fontfamily
}


const Phone1 = () => {
    return (
        <PhoneDiv>
            <BackButton />
            <HeadText>{title}</HeadText>
            <TransitionButton link='/driver' text='DRIVER' />
            <TransitionButton link='/mom-to-be' route='' text='PREGNANT MOM' />
            <TransitionButton link='/caregiver' route='' text='CAREGIVER' />
        </PhoneDiv>
    )
}


export default Phone1
