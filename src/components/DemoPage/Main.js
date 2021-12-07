import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Scrollspy from 'react-scrollspy'

class Main extends Component {

    render() {
        return (
            <Container className='demopage'>
                <div className='left_content'>
                    <img className='logo' src='./images/logo.png'></img>
                    <p><a id='remove-decoration' >Bot the Builder</a></p>
                </div>
                <Row>
                    <Col sm={3}>
                        <div className="sidebar">
                            <h2 style={{margin: '0px 0px 15px 46px'}}>Content</h2>
                            <Scrollspy items={['chatbot_api', 'chatbot_info', 'chatbot_chat', 'qa_intent', 'web_intent', 'redirect_intent', 'chatbot_ui']} currentClassName="is-current">
                                <ul>
                                    <li><a className='links' href='#chatbot_api'>Chatbot API</a></li>
                                    <ul>
                                        <li><a className='links' href='#chatbot_info'>Chatbot Info</a></li>
                                        <li><a className='links' href='#chatbot_chat'>Chatbot Chat</a></li>
                                        <ul>
                                            <li className='change'><a className='links' href='#qa_intent'>QA intent</a></li>
                                            <li><a className='links' href='#web_intent'>Web intent</a></li>
                                            <li><a className='links' href='#redirect_intent'>Redirect intent</a></li>
                                        </ul>
                                    </ul>
                                    <li><a className='links' href='#chatbot_ui'>Chatbot UI</a></li>
                                    <ul>
                                        <li><a className='links' href='https://reactjs.org/'>React JS</a></li>
                                    </ul>
                                </ul>
                            </Scrollspy>
                        </div>
                    </Col>
                    <Col sm={8} style={{
                            backgroundImage: 'url("https://cdn.discordapp.com/attachments/914484290484596737/914844985935945788/unknown.png")',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: '65% center',
                            backgroundSize: '536px 500px',
                            backgroundAttachment: 'fixed'
                        }}>
                        <div>
                            <h3 id='chatbot_api' style={{fontWeight: '500'}}>
                                Chatbot API
                            </h3>
                            <ul>
                                <li id='chatbot_info'>
                                    <span style={{fontWeight: '700'}}>Chatbot Info</span>
                                    <div style={{marginLeft: '30px', marginTop: '13px'}}>
                                        <p>All the information regarding the Chatbot including Bot name, bot description, bot avatar can be accessed via an API. This information is used to load the UI element of the chatbot.</p>
                                        <p style={{fontStyle: 'italic'}}>API - GET /api/chatbot/&#123;project_id&#125;/chat?api_key=&#123;api_key&#125;</p>
                                        <p style={{marginBottom: '0'}}>Response:</p>
                                        <p style={{marginBottom: '0'}}>&#123;</p>
                                        <div style={{marginLeft: '30px'}}>
                                            <p style={{marginBottom: '0'}}>&#34;status&#34;: &#34;200&#34;</p>
                                            <p style={{marginBottom: '0'}}>&#34;message&#34;: &#34;OK&#34;</p>
                                            <p style={{marginBottom: '0'}}>&#34;avatar&#34;: link</p>
                                            <p style={{marginBottom: '0'}}>&#34;botname&#34;: &#34;YOLO&#34;</p>
                                            <p style={{marginBottom: '0'}}>&#34;description&#34;: &#34;I am a chatbot&#34;</p>
                                        </div>
                                        <p>&#125;</p>
                                        <p>Note: Any invalid API call will give status other than 200 with an appropriate msg in the response</p>
                                    </div>
                                </li>
                                <li id='chatbot_chat'>
                                    <span style={{fontWeight: '700'}}>Chatbot Chat</span>
                                    <div style={{marginLeft: '30px', marginTop: '13px'}}>
                                        <p>Users can interact with the Chatbot deployed on Bot the builder via Chatbot Chat Api. For each message an API call is made and the response is recieved.</p>
                                        <p style={{fontStyle: 'italic'}}>API - GET /api/chatbot/&#123;project_id&#125;/chat?api_key=&#123;api_key&#125;&amp;message=&#123;message&#125;</p>
                                        <ul>
                                            <li id='qa_intent'>
                                                <span style={{fontWeight: '700'}}>QA intent</span>
                                                <p>When the chatbot finds the response from the dataset provided it returns the QA intent. The QA intent messages are displayed as general messages in chat.</p>
                                                <p style={{marginBottom: '0'}}>Response:</p>
                                                <p style={{marginBottom: '0'}}>&#123;</p>
                                                <div style={{marginLeft: '30px'}}>
                                                    <p style={{marginBottom: '0'}}>&#34;status&#34;: &#34;200&#34;</p>
                                                    <p style={{marginBottom: '0'}}>&#34;message&#34;: &#34;OK&#34;</p>
                                                    <p style={{marginBottom: '0'}}>&#34;intent&#34;: &#34;QA&#34;</p>
                                                    <p style={{marginBottom: '0'}}>&#34;answer&#34;: &#34;I am a chatbot&#34;</p>
                                                </div>
                                                <p>&#125;</p>
                                            </li>
                                            <li id='web_intent'>
                                                <span style={{fontWeight: '700'}}>Web intent</span>
                                                <p>If the chatbot doesn’t find the answer from provided dataset. It tries to look for the answer from the internet. If it finds an appropriate answer, it returns it to the frontend.</p>
                                                <p style={{marginBottom: '0'}}>Response:</p>
                                                <p style={{marginBottom: '0'}}>&#123;</p>
                                                <div style={{marginLeft: '30px'}}>
                                                    <p style={{marginBottom: '0'}}>&#34;status&#34;: &#34;200&#34;</p>
                                                    <p style={{marginBottom: '0'}}>&#34;message&#34;: &#34;OK&#34;</p>
                                                    <p style={{marginBottom: '0'}}>&#34;intent&#34;: &#34;web&#34;</p>
                                                    <p style={{marginBottom: '0'}}>&#34;title&#34;: &#34;Apple - Wikipedia&#34;</p>
                                                    <p style={{marginBottom: '0'}}>&#34;link&#34;: &#34;www.wikipedia.in/apple&#34;</p>
                                                    <p style={{marginBottom: '0'}}>&#34;data&#34;: &#34;Iphone is developed by Apple&#34;</p>
                                                </div>
                                                <p>&#125;</p>
                                            </li>
                                            <li id='redirect_intent'>
                                                <span style={{fontWeight: '700'}}>Redirect intent</span>
                                                <p>If the user wants to get to a certain webpage, the response intent will be of the type redirect. The response will include webpage name (action name) and link to the webpage.</p>
                                                <p style={{marginBottom: '0'}}>Response:</p>
                                                <p style={{marginBottom: '0'}}>&#123;</p>
                                                <div style={{marginLeft: '30px'}}>
                                                    <p style={{marginBottom: '0'}}>&#34;status&#34;: &#34;200&#34;</p>
                                                    <p style={{marginBottom: '0'}}>&#34;message&#34;: &#34;OK&#34;</p>
                                                    <p style={{marginBottom: '0'}}>&#34;intent&#34;: &#34;redirect&#34;</p>
                                                    <p style={{marginBottom: '0'}}>&#34;title&#34;: &#34;Apple - Wikipedia&#34;</p>
                                                    <p style={{marginBottom: '0'}}>&#34;webpage&#34;: &#34;Settings&#34;</p>
                                                    <p style={{marginBottom: '0'}}>&#34;link&#34;: &#34;www.google.com?q=settings&#34;</p>
                                                </div>
                                                <p>&#125;</p>
                                            </li>
                                        </ul>    
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 id='chatbot_ui' style={{fontWeight: '500'}}>
                                Chatbot UI
                            </h3>
                            <ul>
                                <li>React JS</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Main;