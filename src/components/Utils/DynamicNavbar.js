import React from "react";
import { Link, NavLink } from "react-router-dom";
import GoogleLoginButton from '../GoogleLoginComponent/GoogleLoginButton';
import CreateModal from "./Modal";

class DynamicNavbar extends React.Component {

    state = {
        isLoggedIn: false,
        showModal: undefined
    };

    HandleUserLogin = () => {
        this.setState(() => {
            return {
                isLoggedIn: true
            }
        })
    }

    HandleUserLogout = () => {
        this.setState(() => {
            return {
                isLoggedIn: false
            }
        })
    }

    handleShowModal = () => {
        this.setState(() => {
            return {
                showModal: 1
            }
        })
    }

    handleCloseModal = () => {
        this.setState(() => {
            return {
                showModal: undefined
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.isLoggedIn ? (
                    <div className='LoginNavbar'>
                        <CreateModal handleCloseModal={this.handleCloseModal} showModal={this.state.showModal} />
                        <div className='left_content'>
                            <img className='logo' src='./images/logo.png'></img>
                            <p><NavLink id='remove-decoration' to="">Bot the Builder</NavLink></p>
                        </div>
                        <ul className='nav__links'>
                            <li><Link to='/'>Documentation</Link></li>
                            <button onClick={this.handleShowModal}>Create a Project</button>
                            <li><Link to='my-projects'>My Projects</Link></li>
                            <li className='googleButton'><GoogleLoginButton HandleUserLogout={this.HandleUserLogout} /></li>
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
                            <GoogleLoginButton HandleUserLogin={this.HandleUserLogin} />
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default DynamicNavbar;