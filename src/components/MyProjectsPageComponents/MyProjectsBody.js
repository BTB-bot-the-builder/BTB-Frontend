import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card";
import {NavLink} from 'react-router-dom';
let clr = ['#B7DCFF', '#CCFFD7', '#FFD0D0'];
let itr = 0;

class MyProjectBody extends React.Component {
    render() {
        return (
            <div className="my_projects_body">
                <h4>My Projects</h4>
                <Container fluid style={{padding: '0'}}>
                    <Row>
                        {this.props.projects.map((project, index) => (
                            <Col>
                                <Card ProjectName={project.name}
                                    description={project.description}
                                    date={project.date}
                                    key={project.name}
                                    color={clr[(itr++) % 3]} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default MyProjectBody;