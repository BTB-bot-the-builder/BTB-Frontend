import React from 'react';

let Background = "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Female-Face-FG-1-brunette-icon.png";

class MainPageBody extends React.Component {
    render() {
        return (
            <div className='main'>
                <div className='form'>
                    <form>
                        <div className='name'>
                            <label>
                                <span>Name your bot:</span>
                                <input type='text' name='name' size='30'></input>
                            </label>
                        </div>
                        <div className='description'>
                            <label>
                                <span>Description:</span>
                                <textarea name="description" rows="3" cols="33"></textarea>
                            </label>
                        </div>
                        <div className='avatar'>
                            <div>
                                <span >Avatar:</span>
                            </div>
                            <div className='icons'>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='1' />
                                    <div className='square'>
                                        <div className="image"></div>
                                    </div>
                                </label>

                                <label className="radio-img">
                                    <input type="radio" name="layout" value='2' />
                                    <div className='square'>
                                        <div className="image"></div>
                                    </div>
                                </label>

                                <label className="radio-img">
                                    <input type="radio" name="layout" value='3' />
                                    <div className='square'>
                                        <div className="image"></div>
                                    </div>
                                </label>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='3' />
                                    <div className='square'>
                                        <div className="image"></div>
                                    </div>
                                </label>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='3' />
                                    <div className='square'>
                                        <div className="image"></div>
                                    </div>
                                </label>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='3' />
                                    <div className='square'>
                                        <div className="image"></div>
                                    </div>
                                </label>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='3' />
                                    <div className='square'>
                                        <div className="image"></div>
                                    </div>
                                </label>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='3' />
                                    <div className='square'>
                                        <div className="image"></div>
                                    </div>
                                </label>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='3' />
                                    <div className='square'>
                                        <div className="image"></div>
                                    </div>
                                </label>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='3' />
                                    <div className='square'>
                                        <div className="image"></div>
                                    </div>
                                </label>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='3' />
                                    <div className='square'>
                                        <div className="image"></div>
                                    </div>
                                </label>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='3' />
                                    <div className='square'>
                                        <div className="image"></div>
                                    </div>
                                </label>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='3' />
                                    <div className='square'>
                                        <div className="image"></div>
                                    </div>
                                </label>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='3' />
                                    <div className='square'>
                                        <div className="image"></div>
                                    </div>
                                </label>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='3' />
                                    <div className='square'>
                                        <div className="image"></div>
                                    </div>
                                </label>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='3' />
                                    <div className='square'>
                                        <div className="image"></div>
                                    </div>
                                </label>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='3' />
                                    <div className='square'>
                                        <div className="image"></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <br></br>
                        <div className='button'>
                            <button>Next</button>
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

export default MainPageBody;