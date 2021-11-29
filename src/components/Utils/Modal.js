import React from "react";
import Modal from 'react-modal';

Modal.setAppElement('#app');

const CreateModal = (props) => (
    <Modal
        isOpen={!!props.showModal}
        onRequestClose={props.handleCloseModal}
        // className='modal'
    >
        <form action='/' method='POST'>
            <label>
                Name:
                <input type='text' name='project_name' placeholder='Enter Project Name'/>
            </label>
            <button>Submit</button>
        </form>
    </Modal>
);

export default CreateModal;