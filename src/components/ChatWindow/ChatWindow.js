import React from 'react';
import MessageComponent from './MessageComponent';
import axios from 'axios';
import { useEffect } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';


const Contact = (props) => {

    console.log(props);

    useEffect(() => {
        window.location.href = "https://" + props.link;
    }, []);

    return (
        <div>
            <h2>Contact</h2>
        </div>
    );
}

class ChatWindow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: ["How can I help you?",],
            json_messages: ["How can I help you?",],
            redirect: false,
            link: "",
            format: false,
        };
        this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this);
        this.addBotMessage = this.addBotMessage.bind(this);
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.scrollToMyRef = this.scrollToMyRef.bind(this);
    }

    chatContainer = React.createRef();

    scrollToMyRef = () => {
        const scroll =
            this.chatContainer.current.scrollHeight -
            this.chatContainer.current.clientHeight;
        this.chatContainer.current.scrollTo(0, scroll);
    };

    addBotMessage(newMessage) {
        var api_link = "http://localhost:5000/api/chatbot/36/chat?api_key=BTBhJsg6i7GzOkAOPjhPeQBBk%5EjFjWvEl1oB1%S9b8egwxy$6g&question=" + newMessage;
        axios.get(api_link)
            .then(res => {
                if (res.data.intent === 'QA') {
                    this.setState((prevState) => {
                        return {
                            messages: prevState.messages.concat([newMessage, res.data.answer]),
                            json_messages: prevState.json_messages.concat([newMessage, JSON.stringify(res.data)]),
                        }
                    }, () => this.scrollToMyRef());
                }
                else if (res.data.intent === 'web') {
                    this.setState((prevState) => {
                        return {
                            messages: prevState.messages.concat([newMessage, res.data.data, res.data.link]),
                            json_messages: prevState.json_messages.concat([newMessage, JSON.stringify(res.data)]),
                        }
                    }, () => this.scrollToMyRef());
                }
                else if (res.data.intent === 'redirect') {
                    this.setState((prevState) => {
                        return {
                            messages: prevState.messages.concat([newMessage]),
                            json_messages: prevState.json_messages.concat([newMessage]),
                            redirect: true,
                            link: res.data.link
                        }
                    }, () => this.scrollToMyRef());
                }
            });
    }

    handleUserFormSubmit(e) {
        e.preventDefault();
        var user_message = e.target.elements.message.value;
        e.target.elements.message.value = "";
        this.addBotMessage(user_message);
    }

    handleFormatChange(e) {
        if (e.target.value == 1) {
            this.setState(() => {
                return {
                    format: true,
                };
            })
        }
        else {
            this.setState(() => {
                return {
                    format: false,
                };
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.redirect ?
                    (<Contact link={this.state.link}></Contact>)
                    :
                    (
                        <div style={{ border: '2px solid black', maxWidth: '22%', margin: '50px' }}>
                            <div style={{ display: 'flex', alignItems: 'end', background: '#2E9AFD', color: 'white' }}>
                                <img style={{ width: '70px', height: '70px', padding: "6px" }} src={this.props.avatarUrl}></img>
                                <div>
                                    <h2 style={{ margin: '0' }}>{this.props.botName}</h2>
                                    <p style={{ margin: '0' }}>Hi i am AI powered bot</p>
                                </div>
                            </div>
                            <div ref={this.chatContainer} style={{minHeight: '300px', maxHeight: '300px', overflowY: 'scroll'}}>
                                {this.state.format ?
                                    (
                                        this.state.json_messages.map((message, index) => (
                                            <MessageComponent message={message} key={index}></MessageComponent>
                                        ))
                                    )
                                    :
                                    (
                                        this.state.messages.map((message, index) => (
                                            <MessageComponent message={message} key={index}></MessageComponent>
                                        ))
                                    )}
                            </div>
                            <div>
                                <form onSubmit={this.handleUserFormSubmit}>
                                    <div>
                                        <input className='radio' type='radio' value='1' name='option' id='radio1' onChange={this.handleFormatChange} />
                                        <label htmlFor='radio1'>Raw</label>
                                        <input className='radio' type='radio' value='2' name='option' id='radio2' onChange={this.handleFormatChange} />
                                        <label htmlFor='radio2'>Parsed</label>
                                    </div>
                                    <div style={{margin: '8px'}}>
                                        <input style={{width: '83%', padding: '3px', marginRight: '9px'}} type="text" name="message" placeholder='Enter text'></input>
                                        <button style={{width: '14%', border: '0'}} type="submit">Enter</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
            </div>
        );
    }
}

export default ChatWindow;