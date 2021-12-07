import React, { Component } from 'react'
import Navbar from './Navbar'
import Body from './body';
import MyChatbot from '../LandingPageComponents/MyChatbot';
import { useLocation } from 'react-router-dom';

const MainPageOfYolo = () => {
    const location = useLocation()
    const { data } = location.state;
        return (
            <div>
                <Navbar data={data}></Navbar>
                <Body data={data}></Body>
                <MyChatbot></MyChatbot>
            </div>
        );

}

export default MainPageOfYolo;