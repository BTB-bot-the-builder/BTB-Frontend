import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import GoogleLoginButton from '../GoogleLoginComponent/GoogleLoginButton';

class NavBar extends React.Component {
    render() {

        return (
            <div className='Yolo-navbar'>
                <Container style={{display: 'flex', justifyContent: 'space-between'}} fluid>
                    <Row>
                        <h3>Project Name</h3>
                        <h5>YOLO</h5>
                        <p>Hi, I am AI generated bot.</p>
                    </Row>
                    <Row style={{display: 'flex', justifyContent: 'end', alignContent: 'end'}}>
                        <div className="image"></div>
                        <p>Created on: 25-6-2021</p>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default NavBar;