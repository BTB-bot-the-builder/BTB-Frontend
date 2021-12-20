import React from 'react';

const botStyle = {
    margin: '10px 20px',
    display: 'inline-block',
    wordBreak: 'break-all',
    color: 'white',
    padding: '10px',
    background: '#2E9AFD',
    borderRadius: '10px',
}

const userStyle = {
    display: 'inline-block',
    float: 'right',
    wordBreak: 'break-all',
    margin: '10px 20px',
    color: 'black',
    padding: '10px',
    background: '#E5E5E5',
    borderRadius: '10px',
}

class MessageComponent extends React.Component{
    render() {
        const len = this.props.message.length;
        console.log(len);
        return (
            <div>
                {this.props.idx % 2 == 0 ?
                    (len > 1 ? (
                        // Bot Web
                        <div style={{ background: '#2E9AFD', borderRadius: '10px', padding: '10px', margin: '10px 50px 0 20px', display: 'inline-block' }}>
                            <h5 style={{color: 'white', wordBreak: 'break-all'}}>{this.props.message[0]}</h5>
                            <p style={{color: 'white', margin: '0', wordBreak: 'break-all'}}>{this.props.message[1]}</p>
                            <a href={this.props.message[2]} style={{textDecoration: 'none', color: 'white', wordBreak: 'break-all'}}> See more </a>
                        </div>
                        )
                        :
                        //Bot Not Web
                        (<div style={botStyle}>{this.props.message[0]}</div>))
                    :
                    //User message
                    (<div style={userStyle}>{this.props.message[0]}</div>)
                }
            </div>
        );
    }
}

export default MessageComponent;