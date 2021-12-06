import React from 'react';
import ProgressBar3 from './ProgressBar3';
import MainPageBody3 from './MainPageBody3';
class MainPageComponent3 extends React.Component{
    render(){
        return (
            <div className='Main'>
                <ProgressBar3></ProgressBar3>
                <MainPageBody3 jwt_token={this.props.jwt_token} userID={this.props.userID} projectID={this.props.projectID}></MainPageBody3>
            </div>
        );
    }
}

export default MainPageComponent3;