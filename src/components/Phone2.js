import React from 'react'
import TransitionButton from './TransitionButton'
import BackButton from './BackButton'
import { Route, Link } from 'react-router-dom'

const title = 'Do you want to:'

const header = {
    width: '100%',
    marginLeft: '24px'
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


const Phone2 = () => {
    return (
        <div style={all}>
            <BackButton />
            <h1 style={header}>{title}</h1>
            <TransitionButton link='/request-ride' route='somecomponent' text='REQUEST RIDE' />
            <TransitionButton link='/view-drivers' route='somecomponent' text='VIEW DRIVERS' />
        </div>
    )
}

export default Phone2