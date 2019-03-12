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
        this.state = {
            link: '',
        }
        this.eventHandler = this.eventHandler.bind(this)
    }

    eventHandler() {
        console.log('hello, hover has changed state')
        this.setState({ 
            link: this.props.link,
        })
    }

    render() {
       return (
            <div>
                {console.log(this.state.link)}
                <Link to={this.state.link}> 
                <button style={button} onMouseEnter={this.eventHandler}>
                    {this.props.text}
                </button></Link>
            </div>
    )}
}

export default TransitionButton
