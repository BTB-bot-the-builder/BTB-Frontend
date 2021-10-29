import React from 'react';

var Background = "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Female-Face-FG-1-brunette-icon.png";

class MainPageBody extends React.Component{
    render(){
        return (
            <div className='main_page_body'>
                <div className='bot_description_form'>
                    <form>
                        <label>Name your bot:   <input type='text'></input></label> <br/>
                        <label>Description:    <input type='text'></input></label> <br/>
                        <label>Avatar:    </label>
                        <label><img src="./images/avatar.png" alt="I'm sad" /><input type="radio" name="avatar" id='1' className="input-hidden" /></label>
                        <label><img src="./images/avatar.png" alt="I'm happy" /><input type="radio" name="avatar" id='2' className="input-hidden" /></label><br/>
                        <button>Submit</button>
                    </form>
                </div>
                <img src='https://www.insegment.com/blog/wp-content/uploads/2020/11/chatbot-marketing.gif' alt='gif here'></img>
            </div>
        );
    }
}

export default MainPageBody;