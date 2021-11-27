import React from 'react';

let Background = "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Female-Face-FG-1-brunette-icon.png";

class MainPageBody3 extends React.Component {
    render() {
        return (
            <div className='main' style={{alignItems: 'flex-start'}}>
                <div className='form' style={{marginTop: '18px', paddingBottom: '235px'}}>
                    <form>
                        <div className="main_page_form3">
                            <div className='page_names'>
                                <span className="input_label1">Name</span>
                                <textarea type='text' name='home' rows='5' cols='20' placeholder="Home" ></textarea>
                            </div>
                            <div className='page_urls'>
                                <span className="input_label2">URL</span>
                                <textarea type='url' name='home_url' rows='5' cols='45' placeholder="www.home.com"></textarea>
                            </div>
                        </div>
                        <div className='add-button'>
                            <button>Add</button>
                        </div>
                        <button style={{position: 'relative', top: '83%'}}>Deploy</button>
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