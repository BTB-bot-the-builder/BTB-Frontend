import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import LandingPageComponent from './components/LandingPageComponents/LandingPageComponent';
import MainPageComponent from './components/MainPageComponents/MainPageComponent';
import MainPageComponent2 from './components/MainPageComponents2/MainPageComponent2';
import MainPageComponent3 from './components/MainPageComponents3/MainPageComponent3';
import LoginNavbar from './components/MyProjectsPageComponents/LoginNavbar';
import MyProjectsPageComponent from './components/MyProjectsPageComponents/MyProjectsPageComponent';

// ReactDOM.render(<LandingPageComponent/>, document.getElementById("app"));
// ReactDOM.render(<MainPageComponent/>, document.getElementById("app"));
// ReactDOM.render(<MainPageComponent2/>, document.getElementById("app"));
// ReactDOM.render(<MainPageComponent3/>, document.getElementById("app"));
ReactDOM.render(<MyProjectsPageComponent/>, document.getElementById("app"));