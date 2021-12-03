import React from 'react';
import Body from './Body';
import Footer from '../Utils/Footer';
import MyChatbot from './MyChatbot';
import { Link,NavLink } from 'react-router-dom';
import GoogleLoginButton from '../GoogleLoginComponent/GoogleLoginButton';
const styleline = {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
}

class LandingPageComponent extends React.Component{

    constructor(props) {
        super(props);
        this.HandleUserLogin = this.HandleUserLogin.bind(this);
    }

    HandleUserLogin(token, uid){
        this.props.HandleUserLoginMain(token, uid);
    }

    render() {
        return (
            <div style={styleline}>
                
                <div className='Navbar'>
                        <div className='left_content'>
                            <img className='logo' src='./images/logo.png'></img>
                            <p><NavLink id='remove-decoration' to="">Bot the Builder</NavLink></p>
                        </div>
                        <ul className='nav__links'>
                            <li><a href='#'>Documentation</a></li>
                            <GoogleLoginButton HandleUserLoginMain={this.HandleUserLogin}/>
                        </ul>
                </div>
                <Body></Body>
                <Footer></Footer>
                <MyChatbot></MyChatbot>
            </div>
        );
    }
}

export default LandingPageComponent;