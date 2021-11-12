import React from "react";

class Card extends React.Component{
    render() {
        var style = {
            backgroundColor : this.props.color
        };
        return (
            <div className='project_card' style={style}>
                <div className='header'>
                    <h1>YOLO</h1>
                    <img src = './images/avatar.png' alt = 'image here'></img>
                </div>
                <div className='content'>
                    <p className='description'>{ this.props.description }</p>
                    <h3>{ this.props.ProjectName }</h3>
                    <p className='date'>Created on: { this.props.date }</p>
                </div>
            </div>
        );
    }
}

export default Card;