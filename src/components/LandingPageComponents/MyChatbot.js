import React, { Component } from 'react';
import { Chat, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-popup';
import avatar from '../images/avatar.png';
import axios from 'axios';
class MyChatbot extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
    // addLinkSnippet({
    //     title: 'My awesome link',
    //     link: 'https://github.com/Wolox/react-chat-popup',
    //     target: '_blank'
    //   });
  }


  handleNewUserMessage = (newMessage) => {
    var api_link = "http://localhost:5000/api/chatbot/1/chat?api_key=1234&question=" + newMessage;
    const response = axios.get(api_link);
    console.log(response);
    addResponseMessage("waegsn");
  }
 
  render() {
    return (
      <div className="MyChatbot">
        <Chat
          handleNewUserMessage={this.handleNewUserMessage}
          title="Bot the Builder"
          subtitle="AI Bot"
          profileAvatar={avatar}
        />
      </div>
    );
  }
}
 
export default MyChatbot;