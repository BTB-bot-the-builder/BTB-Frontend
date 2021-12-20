import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios';
import { useEffect } from 'react';
import { Grid, Paper } from '@mui/material';
import MessageComponent from '../ChatWindow/MessageComponent';



const Contact = (props) => {


    useEffect(() => {
        window.location.href = props.link;
    }, []);

    return (
        <div>
            <h2>Contact</h2>
        </div>
    );
}

class Body extends Component {

    // OLD
    // constructor(props) {
    //     super(props);
    // }

    // NEW
    constructor(props) {
        super(props);
        this.state = {
            messages: [["How can I help you? ",],],
            json_messages: [["How can I help you?",],],
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
                            messages: prevState.messages.concat([[newMessage,],[res.data.answer],]),
                            json_messages: prevState.json_messages.concat([[newMessage,], [JSON.stringify(res.data)]]),
                        }
                    }, () => this.scrollToMyRef());
                }
                else if (res.data.intent === 'web') {
                    this.setState((prevState) => {
                        return {
                            messages: prevState.messages.concat([[newMessage,],[res.data.title, res.data.data, res.data.link]]),
                            json_messages: prevState.json_messages.concat([[newMessage,], [JSON.stringify(res.data)]]),
                        }
                    }, () => this.scrollToMyRef());
                }
                else if (res.data.intent === 'redirect') {
                    this.setState((prevState) => {
                        return {
                            messages: prevState.messages.concat([[newMessage,],]),
                            json_messages: prevState.json_messages.concat([[newMessage]]),
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
            <div className='yolo-body'>
                <Container fluid>
                    <Row style={{ marginTop: '20px' }}>
                        <h5 style={{ fontWeight: '400', fontSize: '18px' }}>API URL:<span style={{ marginLeft: '100px' }}></span>{this.props.api}</h5>
                        <h5 style={{ fontWeight: '400', fontSize: '18px' }}>API KEY:<span style={{ marginLeft: '100px' }}></span>{this.props.apiKey ? this.props.apiKey : "None"}</h5>
                    </Row>
                    <Row>
                        <Col xs={7}>
                            <h3 style={{ margin: '17px 0' }}>Statistics:</h3>
                            <Grid container sx={{ padding: '0 0 0 5%' }} rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: -3 }}>
                                <Grid item xs={12} md={6}>
                                    <Paper style={{ paddingTop: '55px' }} className='paper'>
                                        <h3>Total Requests</h3>
                                        <p>{this.props.totalRequests ? this.props.totalRequests : 0}</p>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Paper className='paper'>
                                        <h3>Failed Percentage</h3>
                                        <p>0.0%</p>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Paper className='paper'>
                                        <h3>Average Rating</h3>
                                        <p>{this.props.sumRatings ? this.props.sumRatings : 0}</p>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Paper className='paper'>
                                        <h3>Total Rating</h3>
                                        <p>{this.props.totalRatings ? this.props.totalRatings : 0}</p>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Col>
                        {/* NEW */}
                        <Col xs={5}>
                            <div>
                                {this.state.redirect ?
                                    (<Contact link={this.state.link}></Contact>)
                                    :
                                    (
                                        <div className='Chatbox'>
                                            <div style={{ padding: '5px', borderRadius: '10px 10px 0 0', display: 'flex', alignItems: 'end', background: '#2E9AFD', color: 'white' }}>
                                                <img style={{ width: '70px', height: '70px', padding: "6px" }} src={this.props.avatarUrl}></img>
                                                <div>
                                                    <h2 style={{ margin: '0' }}>{this.props.botName}</h2>
                                                    <p style={{ margin: '0 0 5px 0' }}>Hi i am AI powered bot</p>
                                                </div>
                                            </div>
                                            <div ref={this.chatContainer} className='Autoscroll'>
                                                {this.state.format ?
                                                    (
                                                        this.state.json_messages.map((message, index) => (
                                                            <MessageComponent message={message} key={index} idx={index} json={true}></MessageComponent>
                                                        ))
                                                    )
                                                    :
                                                    (
                                                        this.state.messages.map((message, index) => (
                                                            <MessageComponent message={message} key={index} idx={index} json={false}></MessageComponent>
                                                        ))
                                                    )}
                                            </div>
                                            <div>
                                                <form onSubmit={this.handleUserFormSubmit}>
                                                    <div style={{marginTop: '10px'}}>
                                                        <input className='radio' type='radio' value='1' name='option' id='radio1' onChange={this.handleFormatChange} />
                                                        <label htmlFor='radio1' style={{borderRadius: '5px', border: '1px solid #2E9AFD'}}>Raw</label>
                                                        <input className='radio' type='radio' value='0' name='option' id='radio2' onChange={this.handleFormatChange} />
                                                        <label htmlFor='radio2' style={{borderRadius: '5px', border: '1px solid #2E9AFD', marginRight: '2px'}}>Parsed</label>
                                                    </div>
                                                    <div style={{ margin: '8px' }}>
                                                        <input style={{ width: '73%', padding: '3px 3px 3px 10px', marginRight: '9px', borderRadius: '10px' }} type="text" name="message" placeholder='Enter text'></input>
                                                        <button style={{ width: '24%', color: 'white', background: '#56ac00', borderRadius: '10px', border: '0', padding: '4px 0'}} type="submit">Send</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Body;