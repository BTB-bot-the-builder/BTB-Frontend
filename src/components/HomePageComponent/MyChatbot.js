import React, { Component } from 'react';
import { Chat, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-popup';
import avatar from '../images/avatar.png';
import axios from 'axios';
import { useEffect } from 'react';

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

class MyChatbot extends Component {
  state = {
    link: "",
    redirect: false
  }


  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }


  handleNewUserMessage = (newMessage) => {
    var api_link = "http://localhost:5000/api/chatbot/1/chat?api_key=1234&question=" + newMessage;
    axios.get(api_link)
      .then(res => {
        if (res.data.intent === 'QA') {
          addResponseMessage(res.data.answer);
        }
        else if (res.data.intent === 'web') {
          addLinkSnippet(
            {
              title: res.data.data,
              link: res.data.link,
              target: '_blank'
            }
          )
        }
        else if (res.data.intent === 'redirect') {
          this.setState({
            redirect: true,
            link: res.data.link
          })
        }
      });
  }

  render() {
    return (
      <div className="MyChatbot">
        {this.state.redirect ? (<Contact link={this.state.link}></Contact>)
          :
          (<Chat
            handleNewUserMessage={this.handleNewUserMessage}
            title="Bot the Builder"
            subtitle="AI Bot"
            profileAvatar={avatar}
          />)
        }
      </div>
    );
  }
}

export default MyChatbot;