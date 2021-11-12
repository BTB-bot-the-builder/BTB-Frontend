import React from 'react';
import NavBar from './Navbar'
import Body from './Body';
import CustomChatbot from './CustomChatbot';
import Footer from '../Utils/Footer'

const styleline = {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
}

class LandingPageComponent extends React.Component{

    render() {
        return (
            <div style={styleline}>
                <NavBar></NavBar>
                <Body></Body>
                <Footer></Footer>
                <CustomChatbot></CustomChatbot>
            </div>
        );
    }
}

export default LandingPageComponent;