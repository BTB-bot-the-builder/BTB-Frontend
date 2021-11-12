import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const Footer = (props) => {
    return (
        <div className='footer'>
            <Container>
                <Row className="Row">
                    <Col>
                        <h4>Contact</h4>
                        <p>botbuilder@gmail.com</p>
                        <p>7015854780</p>
                        <p>9876543210</p>
                        <p>8649243763</p>
                    </Col>
                    <Col>
                        <h4>Address</h4>
                        <p>House No. 534</p>
                        <p>Phase 7, Mohali</p>
                        <p>Punjab</p>
                        <p>India</p>
                    </Col>
                    <Col>
                        <h4>Connect</h4>
                        <p>Youtube</p>
                        <p>LinkedIn</p>
                        <p>Facebook</p>
                        <p>Instagram</p>
                    </Col>
                    <Col>
                        <h4>Developer</h4>
                        <p>Kanishka Tiwari</p>
                        <p>Navdeep Kumar</p>
                        <p>Priyanshu Kaushal</p>
                        <p>Daksh Verma</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;