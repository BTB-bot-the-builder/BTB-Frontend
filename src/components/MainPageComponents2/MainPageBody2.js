import React from 'react';
import { post } from 'axios';
import { useEffect } from 'react';

const Contact = (props) => {

    useEffect(() => {
        window.location.href = 'create-bot-step3';
    }, []);

    return (
        <div>
            <h2></h2>
        </div>
    );
}

class MainPageBody2 extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            file: null,
            formSubmitted: false,
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
    }

    onFormSubmit(e){
        e.preventDefault();
        this.fileUpload(this.state.file).then((response)=>{
          if(response.status == "200"){
            this.setState(() => {
                return {
                    formSubmitted: true,
                };
            });
          }
        })
    }

    fileUpload(file){
        const url = "http://localhost:8081/user/" + this.props.userID + "/projects/" + this.props.projectID + "/data";
        const formData = new FormData();
        formData.append('file',file)
        const config = {
            headers: {
                Authorization: "Bearer " + this.props.jwt_token,
            }
        }
        return  post(url, formData,config);
    }

    onChange(e) {
        this.setState({file: e.target.files[0]});
    }

    render() {
        return (
            <div>
                {this.state.formSubmitted ? (
                    <Contact></Contact>
                ) 
                : (
                    <div className='main'>
                        <div className='form'>
                            <form onSubmit={this.onFormSubmit}>
                                <div className='fileUpload'>
                                    <label>
                                        <span>Upload:</span>
                                        <input type='file' name='fileUpload' onChange={this.onChange}></input>
                                    </label>
                                </div>
                                <div className='help_text'>
                                    <p>Please note:</p>
                                    <p>The structure of your json file should be like </p>
                                    <img src='./images/example.png' alt='image here'></img>
                                    <p style={{marginTop: '10px'}}>Your JSON file should be less than 5 MB.</p>
                                    <p>For better results, make sure that the questions belong to a specific domain.</p>
                                    <p>Number of question answer pairs in the json should be large to get better performance</p>
                                </div>
                                <button style={{top: '12%', right: '3%'}}>Next</button>
                            </form>
                        </div>
                        <img src='https://www.ramco.com/hubfs/chatbot.gif' alt='gif here'></img>
                    </div>
                )}
            </div>
        );
    }
}

export default MainPageBody2;