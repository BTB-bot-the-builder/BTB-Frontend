import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MarketingText from './MarketingText';

class Body extends React.Component{
    render(){
        return (
            <div className="body">
                <Container fluid className='hello'>
                    <Row>
                        <Col className='left-content'>
                            <MarketingText></MarketingText>
                        </Col>
                        <Col className='right-content'>
                            <img src='https://www.insegment.com/blog/wp-content/uploads/2020/11/chatbot-marketing.gif' alt='gif here'></img>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Body;