import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

let Background = "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Female-Face-FG-1-brunette-icon.png";

class MainPageBody extends React.Component {
    render() {
        return (
            <div className='main'>
                <div className='form'>
                    <form style={{minWidth: '513px'}}>
                        <div className='name'>
                            <label>
                                <span>Name your bot:</span>
                                <input type='text' name='name' size='31'></input>
                            </label>
                        </div>
                        <div className='description'>
                            <label>
                                <span>Description:</span>
                                <textarea name="description" rows="3" cols="33"></textarea>
                            </label>
                        </div>
                        <div className='avatar'>
                            <span >Avatar:</span>
                            <div className='icons'>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='1' />
                                    <div className='square'>
                                        <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'/>
                                        {/* <img src='https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg'/> */}
                                        {/* <div className="image"></div> */}
                                    </div>
                                </label>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='2' />
                                    <div className='square'>
                                        <img src='https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Prescription02&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&graphicType=Skull&eyeType=Squint&eyebrowType=Default&mouthType=Default&skinColor=Light'/>
                                        {/* <img src='https://img.freepik.com/free-vector/man-avatar-portrait-man-minimalist-flat-illustration_186332-435.jpg?size=338&ext=jpg' /> */}
                                        {/* <div className="image"></div> */}
                                    </div>
                                </label>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='3' />
                                    <div className='square'>
                                        <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Prescription01&hairColor=Black&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'/>
                                        {/* <img src='https://static.vecteezy.com/system/resources/previews/002/002/332/non_2x/ablack-man-avatar-character-isolated-icon-free-vector.jpg' /> */}
                                        {/* <div className="image"></div> */}
                                    </div>
                                </label>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='4' />
                                    <div className='square'>
                                        <img src='https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Prescription02&hatColor=Blue03&hairColor=Black&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Squint&eyebrowType=Default&mouthType=Default&skinColor=Light'/>
                                        {/* <img src='https://freesvg.org/img/Male-Avatar.png' /> */}
                                        {/* <div className="image"></div> */}
                                    </div>
                                </label>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='5' />
                                    <div className='square'>
                                        <img src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Blank&hatColor=Red&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Gray01&eyeType=Squint&eyebrowType=Default&mouthType=Default&skinColor=Light'/>
                                        {/* <img src='https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png' /> */}
                                        {/* <div className="image"></div> */}
                                    </div>
                                </label>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='6' />
                                    <div className='square'>
                                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Squint&eyebrowType=Default&mouthType=Default&skinColor=Light'
/>
                                        {/* <img src='https://w1.pngwing.com/pngs/726/597/png-transparent-graphic-design-icon-customer-service-avatar-icon-design-call-centre-yellow-smile-forehead.png' /> */}
                                        {/* <div className="image"></div> */}
                                    </div>
                                </label>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='7' />
                                    <div className='square'>
                                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Squint&eyebrowType=Default&mouthType=Serious&skinColor=Black'
/>
                                        {/* <img src='https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg' /> */}
                                        {/* <div className="image"></div> */}
                                    </div>
                                </label>

                                <label className="radio-img">
                                    <input type="radio" name="layout" value='8' />
                                    <div className='square'>
                                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=Eyepatch&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=PastelRed&eyeType=Squint&eyebrowType=Default&mouthType=Twinkle&skinColor=Pale'
/>
                                        {/* <img style={{'width': '50px', 'height':'50px'}} src='https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg'/> */}
                                        {/* <img src='https://static.vecteezy.com/system/resources/thumbnails/002/002/280/small_2x/old-man-with-beard-wearing-glasses-avatar-character-free-vector.jpg' /> */}
                                        {/* <div className="image"></div> */}
                                    </div>
                                </label>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='9' />
                                    <div className='square'>
                                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Red&eyeType=Squint&eyebrowType=Default&mouthType=Smile&skinColor=Pale'
/>
                                        {/* <img src='https://cdn.imgbin.com/5/23/13/imgbin-professional-computer-icons-avatar-job-avatar-0hfFf9P1VgAL1RC0tr4BtykCz.jpg' /> */}
                                        {/* <div className="image"></div> */}
                                    </div>
                                </label>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='10' />
                                    <div className='square'>
                                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Blank&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Pink&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Pale'
/>
                                        {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJTsXeW4YKA1CZXwfiOMa3wC1jNRIuQfN705eEUimicEWl8Dq5sNnpbc8hT1i53F0Jbuc&usqp=CAU' /> */}
                                        {/* <div className="image"></div> */}
                                    </div>
                                </label>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='10' />
                                    <div className='square'>
                                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairFroBand&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=PastelGreen&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Pale'
/>
                                        {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJTsXeW4YKA1CZXwfiOMa3wC1jNRIuQfN705eEUimicEWl8Dq5sNnpbc8hT1i53F0Jbuc&usqp=CAU' /> */}
                                        {/* <div className="image"></div> */}
                                    </div>
                                </label>
                                <label className="radio-img">
                                    <input type="radio" name="layout" value='10' />
                                    <div className='square'>
                                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Heather&eyeType=Hearts&eyebrowType=Default&mouthType=Smile&skinColor=Pale'
/>
                                        {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJTsXeW4YKA1CZXwfiOMa3wC1jNRIuQfN705eEUimicEWl8Dq5sNnpbc8hT1i53F0Jbuc&usqp=CAU' /> */}
                                        {/* <div className="image"></div> */}
                                    </div>
                                </label>
                            </div>
                        </div>
                        <NavLink to='create-bot-step2'><button>Next</button></NavLink>
                    </form>
                </div>
                <img src='https://www.ramco.com/hubfs/chatbot.gif' alt='gif here'></img>
            </div>
        );
    }
}

export default MainPageBody;