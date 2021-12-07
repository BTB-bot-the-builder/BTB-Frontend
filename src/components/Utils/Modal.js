import React from "react";
import Modal from 'react-modal';

Modal.setAppElement('#app');

const CreateModal = (props) => (

    <Modal
        isOpen={!!props.showModal}
        onRequestClose={props.handleCloseModal}
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
        <form action='/create-bot-step1' style={{display: 'flex', flexDirection: 'column'}}>
            <label style={{fontSize: '19px'}} for='project_name'>
                Name of Project:
            </label>
            <input style={{margin: '5px 0px 0px 0px', padding: '3px 0px 3px 9px'}} type='text' id='project_name' name='project_name' placeholder='Enter Project Name' />
            <button style={{margin: '20px 90px 0 90px', padding: '7px 0', borderRadius: '5px', backgroundColor: '#2E9AFD', color: 'white', border: '0px'}}>Submit</button>
        </form>
    </Modal>
);

export default CreateModal;