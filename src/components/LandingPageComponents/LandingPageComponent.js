import React from 'react';
import Navbar from './Navbar'
import Body from './Body';
import CustomChatbot from './CustomChatbot';

const styleline = {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
}

class LandingPageComponent extends React.Component{

    render() {
        return (
            <div style={styleline}>
                <Navbar></Navbar>
                <Body></Body>
                <CustomChatbot></CustomChatbot>
            </div>
        );
    }
}

export default LandingPageComponent;