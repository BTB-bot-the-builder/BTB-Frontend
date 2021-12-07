import React from 'react';
import UserURLComponent from './UserUrlComponent';
import axios from 'axios';
import { useEffect } from 'react';

const Contact = (props) => {

    useEffect(() => {
        window.location.href = '/my-projects';
    }, []);

    return (
        <div>
            <h2></h2>
        </div>
    );
}

class MainPageBody3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_urls: [],
            isDeployed: false,
        };
        this.HandleAddURL = this.HandleAddURL.bind(this);
        this.HandleDeleteUrl = this.HandleDeleteUrl.bind(this);
        this.HandleDeployProject = this.HandleDeployProject.bind(this);
        this.CallDeployAPI = this.CallDeployAPI.bind(this);
        this.CallDeployAPI = this.CallDeployAPI.bind(this);
    }

    HandleDeployProject() {
        const api_url = "http://localhost:8081/user/" + this.props.userID + "/projects/" + this.props.projectID + "/actions";
        const data = {
            actionList: this.state.user_urls,
        };
        const headers = {
            Authorization: "Bearer " + this.props.jwt_token,
        };
        axios.post(api_url, data, {
            headers: headers
        })
            .then(res => {
                if (res.status == "200") {
                    this.CallDeployAPI(this.props.userID, this.props.projectID);
                }
            });
    }

    CallDeployAPI(uid, pid) {
        const api_url = "http://localhost:8990/chatbot/" + pid;
        const headers = {
            Authorization: "Bearer " + this.props.jwt_token,
        };
        axios.post(api_url, {
            headers: headers
        })
            .then(res => {
                if (res.status == "200") {
                    this.setState(() => {
                        return {
                            isDeployed: true,
                        };
                    });
                }
            });
    }

    HandleDeleteUrl(urlToBeDeleted) {
        var length = this.state.user_urls.length;
        if (length == 1) {
            this.setState(() => {
                return {
                    user_urls: [],
                };
            });
        }
        else {
            var index = -1;
            for (var idx = 0; idx < length; idx++) {
                if (this.state.user_urls[idx].actionName == urlToBeDeleted) {
                    index = idx;
                    break;
                }
            }
            if (index != -1) {
                this.setState((prevState) => {
                    prevState.user_urls.splice(index, 1);
                    return {
                        user_urls: prevState.user_urls,
                    };
                });
            }
        }
    }

    HandleAddURL(e) {
        e.preventDefault();
        const name = e.target.elements.url_name.value;
        const url = e.target.elements.url.value;
        e.target.elements.url_name.value = "";
        e.target.elements.url.value = "";
        const new_url = [{ actionName: name, actionUrl: url },];
        var ispresent = false;
        var length = this.state.user_urls.length;
        for (var idx = 0; idx < length; idx++) {
            if (this.state.user_urls[idx].actionName == new_url[0].actionName) {
                ispresent = true;
                break;
            }
        }
        if (!ispresent) {
            this.setState((prevState) => {
                return {
                    user_urls: prevState.user_urls.concat(new_url),
                };
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.isDeployed ?
                    (<Contact></Contact>) :
                    (
                        <div className='main' style={{ alignItems: 'flex-start'}}>
                            <div className='form'>
                                <form onSubmit={this.HandleAddURL}>
                                    <div className="main_page_form3">
                                        <div className='page_names'>
                                            <span className="input_label1">Name</span>
                                            <input type='text' name='url_name' size='15' placeholder="Home" ></input>
                                        </div>
                                        <div className='page_urls'>
                                            <span className="input_label2">URL</span>
                                            <input type='url' name='url' size='40' placeholder="www.home.com"></input>
                                        </div>
                                    </div>
                                    <div className='add-button'>
                                        <button>Add</button>
                                    </div>
                                </form>
                                <UserURLComponent user_urls={this.state.user_urls} HandleDeleteUrl={this.HandleDeleteUrl}></UserURLComponent>
                                <button onClick={this.HandleDeployProject} style={{ position: 'fixed', top: '82%', left: '40%', padding: '7px 32px' }}>Deploy</button>
                            </div>
                            <img src='https://www.ramco.com/hubfs/chatbot.gif' alt='gif here'></img>
                        </div>
                    )}
            </div>
        );
    }
}

export default MainPageBody3;