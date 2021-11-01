import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import LandingPageComponent from './components/LandingPageComponents/LandingPageComponent'
import MainPageComponent from './components/MainPageComponents/MainPageComponent'


// ReactDOM.render(<MainPageComponent />, document.getElementById("app"));
ReactDOM.render(<LandingPageComponent/>, document.getElementById("app"));