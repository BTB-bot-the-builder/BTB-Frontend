import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

class ProgressBar2 extends React.Component {
    render() {
        return (
            <div className='progress_bar'>
                <Container fluid>
                    <Row>
                        <Col className='one'>
                            <span className='circle' style={{background: '#56AC00'}}>
                                <span className='numbers' style={{color: '#56AC00'}}>1</span>
                            </span>
                            <span className='text'>Configure your bot</span>
                        </Col>
                        <Col className='two'>
                            <span className='circle' style={{background: '#3E3E3E'}}>
                                <span className='numbers'>2</span>
                            </span>
                            <span className='text'>Set behaviour</span>
                        </Col>
                        <Col className='three'>
                            <span className='circle' style={{background: '#B0B0B0'}}>
                                <span className='numbers'>3</span>
                            </span>
                            <span className='text'>Set actions</span>
                        </Col>
                        <Col className='four'>
                            <NavLink to='/'><img className='logo' src='./images/logo.png' alt='image here'></img></NavLink>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ProgressBar2;