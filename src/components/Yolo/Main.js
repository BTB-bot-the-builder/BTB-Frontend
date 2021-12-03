import React, { Component } from 'react'
import Navbar from './Navbar'
import Body from './body';
import MyChatbot from '../LandingPageComponents/MyChatbot'

class Main extends Component{
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Body></Body>
                <MyChatbot></MyChatbot>
            </div>
        )
    }
}

export default Main;