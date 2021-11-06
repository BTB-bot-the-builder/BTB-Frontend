import React from "react";

class Navbar extends React.Component{
    render() {
        return (
            <div className='Navbar'>
                <div className='left_content'>
                    <img className='logo' src='./images/logo.png'></img>
                    <p>Bot the Builder</p>
                </div>
                <ul className='nav__links'>
                    <li><a href='#'>Features</a></li>
                    <li><a href='#'>Login</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;