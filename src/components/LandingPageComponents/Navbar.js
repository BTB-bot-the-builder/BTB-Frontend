import React from "react";

class Navbar extends React.Component{
    render() {
        return (
            <div className='Navbar'>
                <img className='logo' src='./images/logo.png'></img>
                <p>Bot the Builder</p>
                <ul>
                    <li><a href='#'>Feature</a></li>
                    <li><a href='#'>Login</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;