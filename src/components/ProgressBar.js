import React from 'react';

class ProgressBar extends React.Component{
    render(){
        return (
            <div className='progress_bar'>
                <p className='step_number number1'>1</p>   <p className='label'>Configure your bot</p>  
                <p className='step_number number2'>2</p>   <p className='label'>Set behaviour</p> 
                <p className='step_number number3'>3</p>   <p className='label'>Set actions</p>
                <img id = 'logo' src = './images/logo.png' alt = 'image here'></img>
            </div>
        );
    }
}

export default ProgressBar;