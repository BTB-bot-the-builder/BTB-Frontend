import React from 'react';
import MessageComponent from './MessageComponent';
import axios from 'axios';
import { useEffect } from 'react';
import { fabClasses } from '@mui/material';

const Contact = (props) => {

    console.log(props);
  
    useEffect(() => {
      window.location.href = "https://"+props.link;
    }, []);
  
    return (
      <div>
        <h2>Contact</h2>
      </div>
    );
}


class ChatWindow extends React.Component{

    constructor(props){
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
    }

    addBotMessage(newMessage){
        var api_link = "http://localhost:5000/api/chatbot/36/chat?api_key=BTBhJsg6i7GzOkAOPjhPeQBBk%5EjFjWvEl1oB1%S9b8egwxy$6g&question=" + newMessage;
        axios.get(api_link)
        .then(res => {
            if (res.data.intent === 'QA') {
                this.setState((prevState) => {
                    return {
                        messages: prevState.messages.concat([newMessage, res.data.answer]),
                        json_messages: prevState.json_messages.concat([newMessage, JSON.stringify(res.data)]),
                    }
                });
            }
            else if (res.data.intent === 'web') {
                this.setState((prevState) => {
                    return {
                        messages: prevState.messages.concat([newMessage, res.data.data, res.data.link]),
                        json_messages: prevState.json_messages.concat([newMessage, JSON.stringify(res.data)]),
                    }
                });
            }
            else if (res.data.intent === 'redirect') {
                this.setState((prevState) => {
                    return {
                        messages: prevState.messages.concat([newMessage]),
                        json_messages: prevState.json_messages.concat([newMessage]),
                        redirect: true,
                        link: res.data.link
                    }
                });
            }
        });
    }

    handleUserFormSubmit(e){
        e.preventDefault();
        var user_message = e.target.elements.message.value;
        e.target.elements.message.value = "";
        this.addBotMessage(user_message);
    }

    handleFormatChange(e){
        if(e.target.value == 1){
            this.setState(() => {
                return {
                    format: true,
                };
            })
        }
        else{
            this.setState(() => {
                return {
                    format: false,
                };
            })
        }
    }

    render(){
        return (
            <div>
                {this.state.redirect ? 
                    (<Contact link={this.state.link}></Contact>) 
                    : 
                    (
                        <div>
                            <div>
                                <img src={this.props.avatarUrl}></img>
                                <h2>{this.props.botName}</h2>
                                <p>Hi i am AI powered bot</p>
                            </div>
                            <div>
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
                                    <label>Parsed<input type="radio" onChange={this.handleFormatChange} name="option" value="0"></input></label>
                                    <label>Raw<input type="radio" onChange={this.handleFormatChange} name="option" value="1"></input></label>
                                    <input type="text" name="message"></input>
                                    <button type="submit">submit</button>
                                </form>
                            </div>
                        </div>
                    )}
            </div>
        );
    }
}

export default ChatWindow;