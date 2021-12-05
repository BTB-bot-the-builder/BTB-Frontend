import React from "react";
import { Container, Row } from "react-bootstrap";

class NavBar extends React.Component {
    render() {

        return (
            <div className='Yolo-navbar'>
                <Container style={{display: 'flex', justifyContent: 'space-between'}} fluid>
                    <Row className="leftContent">
                        <h1>Project Name</h1>
                        <h3>YOLO</h3>
                        <p>Hi, I am AI generated bot.</p>
                    </Row>
                    <Row className='rightContent'>
                        <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Prescription01&hairColor=Black&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'/>
                        <p>Created on: 25-6-2021</p>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default NavBar;