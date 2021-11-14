import React from 'react';
import {Link} from 'react-router-dom';


let Background = "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Female-Face-FG-1-brunette-icon.png";

class MainPageBody2 extends React.Component {
    render() {
        return (
            <div className='main'>
                <div className='form'>
                    <form>
                        <div className='fileUpload'>
                            <label>
                                <span>Upload:</span>
                                <input type='file' name='fileUpload'></input>
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
                        <Link to='create-bot-step3'><button style={{top: '5%', right: '2%'}}>Next</button></Link>
                    </form>
                </div>
                <div className='image'>
                    <img src='https://www.insegment.com/blog/wp-content/uploads/2020/11/chatbot-marketing.gif' alt='gif here'></img>
                </div>
            </div>
        );
    }
}

export default MainPageBody2;