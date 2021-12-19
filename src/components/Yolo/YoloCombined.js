import React from 'react'
import Navbar from './Navbar'
import Body from './body';
import MyChatbot from '../LandingPageComponents/MyChatbot';
import axios from 'axios';
import ChatWindow from '../ChatWindow/ChatWindow';
class YoloCombined extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            api : "",
            apiKey : "",
            avatarUrl : "",
            botName : "",
            date : "",
            description : "",
            projectName : "",
            sumRatings : "",
            totalRatings : "",
            totalRequests : "",
        };
    }

    componentDidMount(){
        const api_url = "http://localhost:8081/user/" + this.props.userID + "/projects/" + this.props.id;
            
            axios.get(api_url)
            .then(res => {
                if(res.status == "200"){
                    this.setState(() => {
                        return {
                            api: res.data.api,
                            apiKey: res.data.apiKey,
                            avatarUrl: res.data.avatarUrl,
                            botName: res.data.botName,
                            date: res.data.date,
                            description: res.data.description,
                            projectName: res.data.projectName,
                            sumRatings: res.data.sumRatings,
                            totalRatings: res.data.totalRatings,
                            totalRequests: res.data.totalRequests,
                        };
                    });
                }
            });
    }

    render(){
        return (
            <div>
                <Navbar projectName={this.state.projectName} botName={this.state.botName} description={this.state.description} date={this.state.date} avatarUrl={this.state.avatarUrl}></Navbar>
                <Body api={this.state.api} apiKey={this.state.apiKey} sumRatings={this.state.sumRatings} totalRatings={this.state.totalRatings} totalRequests={this.state.totalRequests}></Body>
                <ChatWindow api={this.state.api} projectName={this.state.projectName} botName={this.state.botName} avatarUrl={this.state.avatarUrl}></ChatWindow>
            </div>
        );
    }

}


export default YoloCombined;