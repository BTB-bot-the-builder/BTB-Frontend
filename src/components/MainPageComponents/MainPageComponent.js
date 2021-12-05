import React from 'react';
import ProgressBar from './ProgressBar';
import MainPageBody from './MainPageBody';

class MainPageComponent extends React.Component{
    render(){
        return (
            <div className='Main'>
                <ProgressBar></ProgressBar>
                <MainPageBody jwt_token={this.props.jwt_token} userID={this.props.userID} projectID={this.props.projectID}></MainPageBody>
            </div>
        );
    }
}

export default MainPageComponent;