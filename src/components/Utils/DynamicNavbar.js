import React from "react";
import { Link, NavLink } from "react-router-dom";
import GoogleLoginButton from '../GoogleLoginComponent/GoogleLoginButton';
import CreateModal from "./Modal";

const buttonStyle = {
    fontSize: '22px',
    fontFamily: 'inherit',
    background: '#2E9AFD',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '4px 14px'
}

class DynamicNavbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            showModal: undefined
        };
        this.HandleUserLogin = this.HandleUserLogin.bind(this);
        this.HandleUserLogout = this.HandleUserLogout.bind(this);
    }

    HandleUserLogin(){
        this.setState(() => {
            return {
                isLoggedIn: true
            }
        });
        this.props.HandleUserLoginMain();
    }

    HandleUserLogout(){
        this.setState(() => {
            return {
                isLoggedIn: false
            }
        });
        this.props.HandleUserLogoutMain();
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
                            <button style={buttonStyle} onClick={this.handleShowModal}>Create a Project</button>
                            <li><Link to='my-projects'>My Projects</Link></li>
                            <li className='googleButton'><GoogleLoginButton HandleUserLoginMain={this.HandleUserLogin} HandleUserLogoutMain={this.HandleUserLogout} /></li>
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
                            <GoogleLoginButton HandleUserLoginMain={this.HandleUserLogin} HandleUserLogoutMain={this.HandleUserLogout}/>
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default DynamicNavbar;