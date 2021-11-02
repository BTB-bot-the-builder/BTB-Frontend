import React from 'react';

let Background = "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Female-Face-FG-1-brunette-icon.png";

class MainPageBody3 extends React.Component {
    render() {
        return (
            <div className='main'>
                <div className='form'>
                    <form>
                        <div className="main_page_form3">
                            <div className='page_names'>
                                    <span className="input_label1">Name</span>
                                    <input type='text' name='home' size='20' placeholder="Home"></input>
                            </div>
                            <div className='page_urls'>
                                <span className="input_label2">URL</span>
                                <input type='url' name='home_url' size='60' placeholder="www.home.com"></input>
                            </div>
                        </div>
                        <div className='add-button'>
                            <button><p>Add</p></button>
                        </div>
                        <div id='main_page_button3' className='button'>
                            <button><p>Deploy</p></button>
                        </div>
                    </form>
                </div>
                <div className='image'>
                    <img src='https://www.insegment.com/blog/wp-content/uploads/2020/11/chatbot-marketing.gif' alt='gif here'></img>
                </div>
            </div>
        );
    }
}

export default MainPageBody3;