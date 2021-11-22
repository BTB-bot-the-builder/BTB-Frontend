import React from "react";
import LoginNavbar from "./LoginNavbar";
import MyProjectBody from "./MyProjectsBody";

class MyProjectsPageComponent extends React.Component{
    state = {
        projects: [
            {name : "Name1", description : "Description1", date : "Date1"},
            {name : "Name2", description : "Description2", date : "Date2"},
            {name : "Name3", description : "Description3", date : "Date3"},
            {name : "Name4", description : "Description4", date : "Date4"},
            {name : "Name5", description : "Description5", date : "Date5"},
            {name : "Name6", description : "Description6", date : "Date6"},
            {name : "Name7", description : "Description7", date : "Date7"},
            {name : "Name8", description : "Description8", date : "Date8"},
            {name : "Name9", description : "Description9", date : "Date9"},
            {name: "Name10", description: "Description10", date: "Date10"},
            {name : "Name5", description : "Description5", date : "Date5"},
            {name : "Name6", description : "Description6", date : "Date6"},
            {name : "Name7", description : "Description7", date : "Date7"},
            {name : "Name8", description : "Description8", date : "Date8"},
            {name : "Name9", description : "Description9", date : "Date9"},
            {name : "Name10", description : "Description10", date : "Date10"}
        ]
    };
    render() {
        return (
            <div className='my_project_page_main'>
                <LoginNavbar></LoginNavbar>
                <MyProjectBody projects = {this.state.projects}></MyProjectBody>
            </div>
        );
    }
}

export default MyProjectsPageComponent;