import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card";
import {NavLink,Link} from 'react-router-dom';
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
                            <Col key={index}>
                                <Card
                                    ProjectName={project.projectName}
                                    description={project.description ? project.description : "No Description"}
                                    date={project.date}
                                    avatarUrl={project.avatarUrl}
                                    api={project.api}
                                    color={clr[(itr++) % 3]}
                                    botName={project.botName ? project.botName : "No name"}
                                    key={index}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default MyProjectBody;