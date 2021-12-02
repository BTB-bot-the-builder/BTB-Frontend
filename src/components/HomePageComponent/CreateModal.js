import React from "react";
import Modal from 'react-modal';
import { useEffect } from 'react';
import axios from "axios";

Modal.setAppElement('#app');

const Contact = (props) => {

    console.log(props);
  
    useEffect(() => {
      window.location.href = 'create-bot-step1';
    }, []);
  
    return (
      <div>
        <h2>Contact</h2>
      </div>
    );
  }

class CreateModal extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            formSubmitted : false,
        };
        this.HandleFormSubmit = this.HandleFormSubmit.bind(this);
    }

    HandleFormSubmit(e){
        e.preventDefault();
        const project_name = e.target.elements.project_name.value.trim();
        const api_url = "http://localhost:8081/user/" + this.props.userID + "/project";
        const data = {
            projectName: project_name,
        };
        const headers = {
            Authorization: "Bearer " + this.props.jwt_token,
        };
        axios.post(api_url, data, {
            headers: headers
        })
        .then(res => {
            if(res.status == "200"){
                this.props.HandleNewProjectID(res.data.projectId);
                this.setState(() => {
                    return {
                        formSubmitted : true,
                    };
                });
            }
        });
    }

    render(){
        return(
            <div>
            {this.state.formSubmitted ? (
                <Contact></Contact>
            ) 
            : (
                <Modal
                isOpen={!!this.props.showModal}
                onRequestClose={this.props.handleCloseModal}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0)'
                    },
                    content: {
                        position: 'relative',
                        maxHeight: '165px',
                        maxWidth: '330px',
                        margin: '54px 0 0 54%',
                        borderRadius: '12px',
                        boxShadow: '0 0 4px 0 black'
                    }
                }}
            >
                <form onSubmit={this.HandleFormSubmit} style={{display: 'flex', flexDirection: 'column'}}>
                    <label style={{fontSize: '19px'}} htmlFor='project_name'>
                        Name of Project:
                    </label>
                    <input style={{margin: '5px 0px 0px 0px', padding: '3px 0px 3px 9px'}} type='text' id='project_name' name='project_name' placeholder='Enter Project Name' />
                    <button style={{margin: '20px 90px 0 90px', padding: '7px 0', borderRadius: '5px', backgroundColor: '#2E9AFD', color: 'white', border: '0px'}}>Submit</button>
                </form>
            </Modal>
            )}
            </div>
        );
    }
}

export default CreateModal;