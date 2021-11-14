import React from "react";
import Card from "./Card";
let clr = ['#B7DCFF', '#CCFFD7', '#FFD0D0'];
let itr = 0;
class MyProjectBody extends React.Component{
    render() {
        return (
            <div className="my_projects_body">
                <h4>My Projects</h4>
                <div className='cards'>
                    {this.props.projects.map((project, index) => (
                        <Card   ProjectName={project.name}
                                description={project.description}
                                date={project.date}
                                key={project.name}
                                color={clr[(itr++)%3]}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default MyProjectBody;