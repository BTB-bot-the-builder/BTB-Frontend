import React from 'react';
import Navbar from './Navbar';
import Container from './Container';

class StartPage extends React.Component{
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Container></Container>
            </div>
        );
    }
}

export default StartPage;