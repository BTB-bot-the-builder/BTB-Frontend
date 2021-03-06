import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Body extends React.Component {
    render() {
        return (
            <div className="body">
                <Container style={{ padding: '0' }}>
                    <Row className='first'>
                        <Col className='left-content'>
                            <div>
                                <h2 id='HeadingMarketingText'>Build your own Chatbot in minutes!</h2>
                                <p className='TextMarketingText'>Take your business to next level by creating a AI generated chatbot in minutes without writing a single line of code.</p>
                                <p className='TextMarketingText'>With our bot builder you can easily integrate you business application to a chatbot using APIs and let your business grow.</p>
                            </div>
                        </Col>
                        <Col className='right-content'>
                            <img src='https://www.insegment.com/blog/wp-content/uploads/2020/11/chatbot-marketing.gif' alt='gif here'></img>
                        </Col>
                    </Row>
                    <Row className='features'>Features</Row>
                    <Row className='second'>
                        <Col className='left-content'>
                            <img src='https://trymondo.com/wp-content/uploads/2020/11/Chatbot.gif' alt='chatDemo'></img>
                        </Col>
                        <Col className='right-content'>
                            <div>
                                <h2 id='HeadingMarketingText' >Easy to use interface<span className='Number'>01</span></h2>
                                <p className='TextMarketingText'>Description of the feature will be here in detail and will tell user clearly about the features we are providing</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className='third'>
                        <Col className='left-content'>
                            <div>
                                <h2 id='HeadingMarketingText'><span className='Number'>02</span>Easy to integrate bots</h2>
                                <p className='TextMarketingText'>Description of the feature will be here in detail and will tell user clearly about the features we are providing</p>
                            </div>
                        </Col>
                        <Col className='right-content'>
                            <img src='https://media1.giphy.com/media/ZgTR3UQ9XAWDvqy9jv/giphy.gif?cid=790b76113a0d53ebf4a9c16c2ad8c0b93ffb1b509e6af8ee&rid=giphy.gif&ct=g' alt='chatDemo'></img>
                        </Col>
                    </Row>

                    <Row className='fourth'>
                        <Col className='left-content'>
                            <img src='images/chatDemo.png' alt='chatDemo'></img>
                        </Col>
                        <Col className='right-content'>
                            <div>
                                <h2 id='HeadingMarketingText'>Test your bots<span className='Number'>03</span></h2>
                                <p className='TextMarketingText'>Description of the feature will be here in detail and will tell user clearly about the features we are providing</p>
                            </div>
                        </Col>
                    </Row>

                    <div className='fifth'>
                        <h2>Build a Chatbot</h2>
                        <div>
                            <button>
                                <a href=''>Get Started</a>
                            </button>
                        </div>
                    </div>

                </Container>
            </div>
        );
    }
}

export default Body;