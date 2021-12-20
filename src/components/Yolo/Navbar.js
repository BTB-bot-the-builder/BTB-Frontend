import React from "react";
import { Container, Row } from "react-bootstrap";

class NavBar extends React.Component {
    render() {
        return (
            <div className='Yolo-navbar'>
                <Container style={{display: 'flex', justifyContent: 'space-between'}} fluid>
                    <Row className="leftContent">
                        <h1>{ this.props.projectName }</h1>
                        <h3>{this.props.botName}</h3>
                        <p>{this.props.description}</p>
                    </Row>
                    <Row className='rightContent'>
                        <img src={this.props.avatarUrl}/>
                        <p>Created on: {this.props.date}</p>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default NavBar;