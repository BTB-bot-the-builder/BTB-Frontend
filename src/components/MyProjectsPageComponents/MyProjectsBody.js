import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card";
import {Grid} from '@mui/material';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

let clr = ['#B7DCFF', '#CCFFD7', '#FFD0D0'];
let itr = 0;

class MyProjectBody extends React.Component {
    render() {
        return (
            <div className="my_projects_body">
                <h4>My Projects</h4>
                <Grid container rowSpacing={2} columnSpacing={8} columns={{ xs: 4, sm: 8, md: 10 }}>
                    {this.props.projects.map((project, index) => (
                        <Grid item xs={2} sm={4} md={2} key={index}>
                            <Card
                                ProjectName={project.projectName.length > 12 ? project.projectName.substring(0,13)+"..." : project.projectName}
                                description={project.description ? project.description : "No Description"}
                                date={project.date}
                                avatarUrl={project.avatarUrl}
                                api={project.api}
                                color={clr[(itr++) % 3]}
                                botName={project.botName ? project.botName : "No name"}
                                key={index} 
                                projectId={project.projectId}/>          
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default MyProjectBody;