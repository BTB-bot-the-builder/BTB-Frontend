import React from "react";
// import NavBar from "./Navbar";
// import LoginNavbar from "./LoginNavbar";
import { Link, NavLink } from "react-router-dom";
import GoogleLoginButton from '../GoogleLoginComponent/GoogleLoginButton';
import { Redirect } from "react-router";



class DynamicNavbar extends React.Component{

    state = {
        isLoggedIn : false,
    };

    HandleUserClickGoogleButton = (prevState) => {
        this.setState(
            {
                isLoggedIn : !prevState.isLoggedIn
            }
        );
    }


    render(){
        return (
            <div>
            {this.state.isLoggedIn ? (
                <div className='LoginNavbar'>
                    <div className='left_content'>
                        <img className='logo' src='./images/logo.png'></img>
                        <p><NavLink id='remove-decoration' to="">Bot the Builder</NavLink></p>
                    </div>
                    <ul className='nav__links'>
                        <li><Link to='/'>Documentation</Link></li>
                        <li><Link to='create-bot-step1'>Create a Project</Link></li>
                        <li><Link to='my-projects'>My Projects</Link></li>
                        <li className='googleButton'><GoogleLoginButton HandleUserClickGoogleButton={this.HandleUserClickGoogleButton}/></li>
                    </ul>
                </div>
                
            ) : (
                <div className='Navbar'>
                    <div className='left_content'>
                        <img className='logo' src='./images/logo.png'></img>
                        <p><NavLink id='remove-decoration' to="">Bot the Builder</NavLink></p>
                    </div>
                    <ul className='nav__links'>
                        <li><a href='#'>Documentation</a></li>
                        <GoogleLoginButton HandleUserClickGoogleButton={this.HandleUserClickGoogleButton}/>
                    </ul>
                </div>
            )}
            </div>
        );
    }
}

export default DynamicNavbar;