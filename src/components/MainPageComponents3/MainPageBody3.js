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
                                <input type='text' name='home' size='15' placeholder="Home" ></input>
                            </div>
                            <div className='page_urls'>
                                <span className="input_label2">URL</span>
                                <input type='url' name='home_url' size='40' placeholder="www.home.com"></input>
                            </div>
                        </div>
                        <div className='add-button'>
                            <button>Add</button>
                        </div>
                        <button style={{position: 'relative', top: '83%'}}>Deploy</button>
                    </form>
                </div>
                <img src='https://www.ramco.com/hubfs/chatbot.gif' alt='gif here'></img>
            </div>
        );
    }
}

export default MainPageBody3;