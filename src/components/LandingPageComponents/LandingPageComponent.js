import React from 'react';
import NavBar from './Navbar'
import Body from './Body';
import CustomChatbot from './CustomChatbot';
import Footer from '../Utils/Footer';
import DynamicNavbar from '../Navbar/DynamicNavbar';
import MyChatbot from './MyChatbot';
const styleline = {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
}

class LandingPageComponent extends React.Component{

    render() {
        return (
            <div style={styleline}>
                <DynamicNavbar></DynamicNavbar>
                <Body></Body>
                <Footer></Footer>
                <MyChatbot></MyChatbot>
            </div>
        );
    }
}

export default LandingPageComponent;