import React from 'react';
import Navbar from './Navbar';
import Container from './Container';
import CustomChatbot from './CustomChatbot';
class StartPage extends React.Component{
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Container></Container>
                <CustomChatbot></CustomChatbot>
            </div>
        );
    }
}

export default StartPage;