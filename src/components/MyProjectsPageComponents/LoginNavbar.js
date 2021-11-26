import React from "react";
import { Link, NavLink } from "react-router-dom";
import GoogleLoginButton from '../GoogleLoginComponent/GoogleLoginButton';

const styles = {
    padding: '3px 19px'
}

class LoginNavbar extends React.Component{
    
    
    render() {
        return (
            <div className='LoginNavbar'>
                <div className='left_content'>
                    <img className='logo' src='./images/logo.png'></img>
                    <p><NavLink id='remove-decoration' to="">Bot the Builder</NavLink></p>
                </div>
                <ul className='nav__links'>
                    <li><a href='#'>Documentation</a></li>
                    <li><a href='#'>Create a Project</a></li>
                    <li><a href='#'>My Projects</a></li>
                    <li className='googleButton'><GoogleLoginButton /></li>
                </ul>
            </div>
        );
    }
}

export default LoginNavbar;