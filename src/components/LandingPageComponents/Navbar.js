import React from "react";
import { Link, NavLink } from "react-router-dom";
import GoogleLoginButton from '../GoogleLoginComponent/GoogleLoginButton';
import LoginNavbar from '../MyProjectsPageComponents/LoginNavbar';
class NavBar extends React.Component {

    state = {
        isLoggedIn : false,
    };

    HandleUserLogin = (val) => {
        this.setState(
            {
                isLoggedIn : val
            }
        );
    }

    render() {
        return (
            <div>
                {this.state.isLoggedIn ? (
                    <LoginNavbar></LoginNavbar>
                ) : (
                    <div className='Navbar'>
                        <div className='left_content'>
                            <img className='logo' src='./images/logo.png'></img>
                            <p><NavLink id='remove-decoration' to="">Bot the Builder</NavLink></p>
                        </div>
                        <ul className='nav__links'>
                            <li><a href='#'>Features</a></li>
                            <GoogleLoginButton handleuserlogin={this.HandleUserLogin}/>
                        </ul>
                    </div>
                )}
            </div>
            
        );
    }
}

export default NavBar;