import React from "react";

class Navbar extends React.Component{
    render() {
        return (
            <div className='navbar'>
                <img id = 'logo' src = './images/logo.png' alt = 'image here'></img>
                <h3>Bot the Builder</h3>
                <button id = 'features_button'>Features</button>
                <button id = 'get_started_button'>Get Started</button>
            </div>
        );
    }
}

export default Navbar;