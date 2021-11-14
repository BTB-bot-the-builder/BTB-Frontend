import React from "react";

const styles = {
    padding: '3px 19px'
}

class LoginNavbar extends React.Component{
    
    
    render() {
        return (
            <div className='LoginNavbar'>
                <div className='left_content'>
                    <img className='logo' src='./images/logo.png'></img>
                    <p>Bot the Builder</p>
                </div>
                <ul className='nav__links'>
                    <li><a href='#'>Documentation</a></li>
                    <li><a href='#'>Create a Project</a></li>
                    <li><a href='#'>My Projects</a></li>
                    <li><a href='#'>Logout</a></li>
                </ul>
            </div>
        );
    }
}

export default LoginNavbar;