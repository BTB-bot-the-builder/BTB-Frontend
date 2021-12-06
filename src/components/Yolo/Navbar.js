import React from "react";
import { Container, Row } from "react-bootstrap";

class NavBar extends React.Component {
    render() {

        return (
            <div className='Yolo-navbar'>
                <Container style={{display: 'flex', justifyContent: 'space-between'}} fluid>
                    <Row className="leftContent">
                        <h1>{this.props.data[0].ProjectName}</h1>
                        <h3>{this.props.data[0].botName}</h3>
                        <p>{this.props.data[0].description}</p>
                    </Row>
                    <Row className='rightContent'>
                        <img src={this.props.data[0].avatarUrl}/>
                        <p>Created on: {this.props.data[0].date}</p>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default NavBar;