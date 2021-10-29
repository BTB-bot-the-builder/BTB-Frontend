import React from 'react';
import ProgressBar from './ProgressBar';
import MainPageBody from './MainPageBody';


class MainPageComponent extends React.Component{
    render(){
        return (
            <div>
                <ProgressBar></ProgressBar>
                <MainPageBody></MainPageBody>
            </div>
        );
    }
}

export default MainPageComponent;