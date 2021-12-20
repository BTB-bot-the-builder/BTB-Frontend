import React from 'react';
import Body from './Body';
import Footer from '../Utils/Footer';
import MyChatbot from './MyChatbot';
import { NavLink, Link } from 'react-router-dom';
import GoogleLoginButton from '../GoogleLoginComponent/GoogleLoginButton';
import CreateModal from "./CreateModal";
import { Button } from '@mui/material';

const styleline = {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
}

const buttonStyle = {
    fontSize: '22px',
    fontFamily: 'inherit',
    background: '#2E9AFD',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '4px 14px'
}

class HomePageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            showModal: undefined
        };
        this.HandleUserLogout = this.HandleUserLogout.bind(this);
    }

    HandleUserLogout() {
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
            <div style={styleline}>

                <div className='LoginNavbar'>
                    <CreateModal userID={this.props.userID} HandleNewProjectID={this.props.HandleNewProjectID} jwt_token={this.props.jwt_token} handleCloseModal={this.handleCloseModal} showModal={this.state.showModal} />
                    <div className='left_content'>
                        <img className='logo' src='./images/logo.png'></img>
                        <p><NavLink id='remove-decoration' to="">Bot the Builder</NavLink></p>
                    </div>
                    <ul className='nav__links'>
                        <li><Link to='/documentation'>Documentation</Link></li>
                        <Button onClick={this.handleShowModal} sx={{fontSize:'19px', paddingTop: '5px', textTransform: 'capitalize', paddingBottom: '2px' }} variant="outlined">New Project</Button>
                        <li><Link to='my-projects'>My Projects</Link></li>
                        <li className='googleButton'><GoogleLoginButton HandleUserLogoutMain={this.HandleUserLogout} /></li>
                    </ul>
                </div>
                <Body></Body>
                <Footer></Footer>
            </div>
        );
    }
}

export default HomePageComponent;