import React from 'react'
import TransitionButton from './TransitionButton'
import BackButton from './BackButton'
import { Route, Link } from 'react-router-dom'
import { PhoneDiv, HeadText } from './styles';

const title = 'Do you want to:'


 //need to add fontfamily?

const Phone2 = () => {
    return (
        <PhoneDiv>
            <BackButton />
            <HeadText>{title}</HeadText>
            <TransitionButton link='/request-ride' route='somecomponent' text='REQUEST RIDE' />
            <TransitionButton link='/view-drivers' route='somecomponent' text='VIEW DRIVERS' />
        </PhoneDiv>
    )
}

export default Phone2
