import React from "react";
import MyProjectBody from "./MyProjectsBody";
import CreateModal from "../HomePageComponent/CreateModal";
import { NavLink,Link } from 'react-router-dom';
import GoogleLoginButton from '../GoogleLoginComponent/GoogleLoginButton';
import axios from "axios";
import { Button } from '@mui/material';

class MyProjectsPageComponent extends React.Component{
    state = {
        showModal: undefined,
        projects: []
    };

    componentDidMount(){
        const api_url = "http://localhost:8081/user/" + this.props.userID + "/projects";
        const headers = {
            Authorization: "Bearer " + this.props.jwt_token,
        };
        
        axios.get(api_url,{
            headers: headers
        })
        .then(res => {
            if(res.status == "200"){
                this.setState(() => {
                    return {
                        projects: res.data.projects,
                    };
                })
            }
        });
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
            <div className='my_project_page_main'>
                <div className='LoginNavbar'>
                    <CreateModal handleCloseModal={this.handleCloseModal} showModal={this.state.showModal} />
                    <div className='left_content'>
                        <img className='logo' src='./images/logo.png'></img>
                        <p><NavLink to='/' id='remove-decoration' to="">Bot the Builder</NavLink></p>
                    </div>
                    <ul className='nav__links'>
                        <li><Link to='/documentation'>Documentation</Link></li>
                        <Button onClick={this.handleShowModal} sx={{fontSize:'19px', paddingTop: '5px', textTransform: 'capitalize', paddingBottom: '2px' }} variant="outlined">Create a Project</Button>   
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