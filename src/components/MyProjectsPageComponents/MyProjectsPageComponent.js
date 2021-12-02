import React from "react";
import MyProjectBody from "./MyProjectsBody";
import CreateModal from "../HomePageComponent/Modal";
import { NavLink,Link } from 'react-router-dom';
import GoogleLoginButton from '../GoogleLoginComponent/GoogleLoginButton';

const buttonStyle = {
    fontSize: '22px',
    fontFamily: 'inherit',
    background: '#2E9AFD',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '4px 14px'
}


class MyProjectsPageComponent extends React.Component{
    state = {
        showModal: undefined,
        projects: [
            {name : "Name1", description : "Description1", date : "Date1"},
            {name : "Name2", description : "Description2", date : "Date2"},
            {name : "Name3", description : "Description3", date : "Date3"},
            {name : "Name4", description : "Description4", date : "Date4"},
            {name : "Name5", description : "Description5", date : "Date5"},
            {name : "Name6", description : "Description6", date : "Date6"},
            {name : "Name7", description : "Description7", date : "Date7"},
            {name : "Name8", description : "Description8", date : "Date8"},
            {name : "Name9", description : "Description9", date : "Date9"},
            {name: "Name10", description: "Description10", date: "Date10"},
            {name : "Name5", description : "Description5", date : "Date5"},
            {name : "Name6", description : "Description6", date : "Date6"},
            {name : "Name7", description : "Description7", date : "Date7"},
            {name : "Name8", description : "Description8", date : "Date8"},
            {name : "Name9", description : "Description9", date : "Date9"},
            {name : "Name10", description : "Description10", date : "Date10"}
        ]
    };

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
            <div className='my_project_page_main'>
                <div className='LoginNavbar'>
                    <CreateModal handleCloseModal={this.handleCloseModal} showModal={this.state.showModal} />
                    <div className='left_content'>
                        <img className='logo' src='./images/logo.png'></img>
                        <p><NavLink to='/' id='remove-decoration' to="">Bot the Builder</NavLink></p>
                    </div>
                    <ul className='nav__links'>
                        <li><Link to='/'>Documentation</Link></li>
                        <button style={buttonStyle} onClick={this.handleShowModal}>Create a Project</button>
                        <li><Link to='/my-projects'>My Projects</Link></li>
                        <li className='googleButton'><GoogleLoginButton HandleUserLogoutMain={this.HandleUserLogout} /></li>
                    </ul>
                </div>
                <MyProjectBody projects = {this.state.projects}></MyProjectBody>
            </div>
        );
    }
}

export default MyProjectsPageComponent;