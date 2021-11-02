import React from 'react';
import ProgressBar2 from './ProgressBar2';
import MainPageBody2 from './MainPageBody2';

class MainPageComponent2 extends React.Component{
    render(){
        return (
            <div className='Main'>
                <ProgressBar2></ProgressBar2>
                <MainPageBody2></MainPageBody2>
            </div>
        );
    }
}

export default MainPageComponent2;