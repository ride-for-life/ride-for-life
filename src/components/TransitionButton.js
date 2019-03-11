import React from 'react'
import { Route, Link } from 'react-router-dom'
import PhonePage from '../PhonePage'


const button = {
    background: '#4C6A2D',
    fontSize: '30px',
    textAlign: 'center',
    height: '72px',
    width: '327px',
    color: '#FFFFFF',
    margin: '20px 0',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer'
}

class TransitionButton extends React.Component {
    constructor(props) {
        super(props)
        this.buttonClick = this.buttonClick.bind(this)
    }

    buttonClick() {
        console.log('hello, this button has been clicked')
    }

    render() {
       return (
            <div>
                <button style={button} onClick={this.buttonClick}>
                    {this.props.text}
                </button>
            </div>
    )}
}

export default TransitionButton
