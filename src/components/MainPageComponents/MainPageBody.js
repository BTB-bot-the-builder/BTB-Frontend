import React from 'react';
import axios from "axios";
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const avatarArray = [
    "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
    "https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Prescription02&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&graphicType=Skull&eyeType=Squint&eyebrowType=Default&mouthType=Default&skinColor=Light",
    "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Prescription01&hairColor=Black&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
    "https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Prescription02&hatColor=Blue03&hairColor=Black&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Squint&eyebrowType=Default&mouthType=Default&skinColor=Light'",
    "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Blank&hatColor=Red&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Gray01&eyeType=Squint&eyebrowType=Default&mouthType=Default&skinColor=Light'",
    "https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Squint&eyebrowType=Default&mouthType=Default&skinColor=Light",
    "https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Squint&eyebrowType=Default&mouthType=Serious&skinColor=Black",
    "https://avataaars.io/?avatarStyle=Circle&topType=Eyepatch&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=PastelRed&eyeType=Squint&eyebrowType=Default&mouthType=Twinkle&skinColor=Pale",
    "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Red&eyeType=Squint&eyebrowType=Default&mouthType=Smile&skinColor=Pale",
    "https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Blank&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Pink&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Pale",
    "https://avataaars.io/?avatarStyle=Circle&topType=LongHairFroBand&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=PastelGreen&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Pale",
    "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Heather&eyeType=Hearts&eyebrowType=Default&mouthType=Smile&skinColor=Pale",
];

const Contact = (props) => {

    useEffect(() => {
        window.location.href = 'create-bot-step2';
    }, []);

    return (
        <div>
            <h2></h2>
        </div>
    );
}

const Validation = (e) => {
    const name = e.target.elements.name.value.trim();
    const desc = e.target.elements.description.value.trim();
    const avatar = e.target.elements.layout.value;

    let error = [];

    if (name.length === 0) {
        toast.error('Please Enter name!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        })
        e.target.elements.name.value = "";
        return false;
    }
    if (desc.length === 0) {
        toast.error('Please Enter description!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        })
        e.target.elements.description.value = "";
        return false;
    }
    if (avatar === undefined) {
        toast.error('Please select avatar!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        })
        e.target.elements.description.value = "";
        return false;
    }
    return true;
}
class MainPageBody extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formSubmitted: false,
        };
        this.HandleFormSubmit = this.HandleFormSubmit.bind(this);
    }

    HandleFormSubmit(e) {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const desc = e.target.elements.description.value;
        const avatar = avatarArray[parseInt(e.target.elements.layout.value, 10)];
        if (!Validation(e)) {
            return false;
        }
        const api_url = "http://localhost:8081/user/" + this.props.userID + "/projects/" + this.props.projectID + "/configure";
        const data = {
            botName: name,
            description: desc,
            avatarUrl: avatar
        };
        const headers = {
            Authorization: "Bearer " + this.props.jwt_token,
        };
        axios.post(api_url, data, {
            headers: headers
        })
            .then(res => {
                if (res.status == "200") {
                    this.setState(() => {
                        return {
                            formSubmitted: true,
                        };
                    });
                }
            });
    }


    render() {
        return (
            <div>
                {this.state.formSubmitted ? (
                    <Contact></Contact>
                )
                    :
                    (
                        <div className='main'>
                            <div className='form'>
                                <form onSubmit={this.HandleFormSubmit} style={{ minWidth: '513px' }}>
                                    <div className='name'>
                                        <label>
                                            <span>Name your bot:</span>
                                            <input style={{ margin: '5px 0px 0px 0px', padding: '3px 0px 3px 9px' }} type='text' name='name' size='31'></input>
                                        </label>
                                    </div>
                                    <div className='description'>
                                        <label>
                                            <span>Description:</span>
                                            <textarea style={{ margin: '5px 0px 0px 0px', padding: '3px 0px 3px 9px' }} name="description" rows="3" cols="33"></textarea>
                                        </label>
                                    </div>
                                    <div className='avatar'>
                                        <span >Avatar:</span>
                                        <div className='icons'>
                                            <label className="radio-img">
                                                <input type="radio" name="layout" value='1' />
                                                <div className='square'>
                                                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light' />
                                                </div>
                                            </label>
                                            <label className="radio-img">
                                                <input type="radio" name="layout" value='2' />
                                                <div className='square'>
                                                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Prescription02&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&graphicType=Skull&eyeType=Squint&eyebrowType=Default&mouthType=Default&skinColor=Light' />
                                                </div>
                                            </label>
                                            <label className="radio-img">
                                                <input type="radio" name="layout" value='3' />
                                                <div className='square'>
                                                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Prescription01&hairColor=Black&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light' />
                                                </div>
                                            </label>
                                            <label className="radio-img">
                                                <input type="radio" name="layout" value='4' />
                                                <div className='square'>
                                                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Prescription02&hatColor=Blue03&hairColor=Black&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Squint&eyebrowType=Default&mouthType=Default&skinColor=Light' />
                                                </div>
                                            </label>
                                            <label className="radio-img">
                                                <input type="radio" name="layout" value='5' />
                                                <div className='square'>
                                                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Blank&hatColor=Red&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Gray01&eyeType=Squint&eyebrowType=Default&mouthType=Default&skinColor=Light' />
                                                </div>
                                            </label>
                                            <label className="radio-img">
                                                <input type="radio" name="layout" value='6' />
                                                <div className='square'>
                                                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Squint&eyebrowType=Default&mouthType=Default&skinColor=Light'
                                                    />
                                                </div>
                                            </label>
                                            <label className="radio-img">
                                                <input type="radio" name="layout" value='7' />
                                                <div className='square'>
                                                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Squint&eyebrowType=Default&mouthType=Serious&skinColor=Black'
                                                    />
                                                </div>
                                            </label>

                                            <label className="radio-img">
                                                <input type="radio" name="layout" value='8' />
                                                <div className='square'>
                                                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=Eyepatch&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=PastelRed&eyeType=Squint&eyebrowType=Default&mouthType=Twinkle&skinColor=Pale'
                                                    />
                                                </div>
                                            </label>
                                            <label className="radio-img">
                                                <input type="radio" name="layout" value='9' />
                                                <div className='square'>
                                                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Red&eyeType=Squint&eyebrowType=Default&mouthType=Smile&skinColor=Pale'
                                                    />
                                                </div>
                                            </label>
                                            <label className="radio-img">
                                                <input type="radio" name="layout" value='10' />
                                                <div className='square'>
                                                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Blank&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Pink&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Pale'
                                                    />
                                                </div>
                                            </label>
                                            <label className="radio-img">
                                                <input type="radio" name="layout" value='11' />
                                                <div className='square'>
                                                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairFroBand&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=PastelGreen&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Pale'
                                                    />
                                                </div>
                                            </label>
                                            <label className="radio-img">
                                                <input type="radio" name="layout" value='12' />
                                                <div className='square'>
                                                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Heather&eyeType=Hearts&eyebrowType=Default&mouthType=Smile&skinColor=Pale'
                                                    />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <button className='button' style={{ top: '47px' }}>Next</button>
                                </form>
                                <ToastContainer/>
                            </div>
                            <img src='https://www.ramco.com/hubfs/chatbot.gif' alt='gif here'></img>
                        </div>
                    )}
            </div>
        );
    }
}

export default MainPageBody;