import React from 'react';

class MessageComponent extends React.Component{
    render(){
        return (
            <div>
                <p>{ this.props.message }</p>
            </div>
        );
    }
}

export default MessageComponent;