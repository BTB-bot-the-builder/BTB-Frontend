import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import axios from 'axios';

const CLIENT_ID = "635477069596-1oa79h6p3a8u1rrpbkd9v471mkoiihqv.apps.googleusercontent.com";

class GoogleLoginButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            userInfo: {
                name: "",
                emailId: "",
                acctoken: "",
            },
            api_acctoken: "",
            api_UID: -1,
        };
        this.responseGoogleError = this.responseGoogleError.bind(this);
        this.responseGoogleSuccess = this.responseGoogleSuccess.bind(this);
        this.logout = this.logout.bind(this);
    }

    responseGoogleSuccess(response){
        let userInfo = {
            name: response.profileObj.name,
            emailId: response.profileObj.email,
            acctoken: response.accessToken,
        };
        axios.post("http://localhost:8082/login", 
        {
            "email": userInfo.emailId,
            "username": userInfo.name,
            "access_token": userInfo.acctoken
        }).then(res => {
            if(res.status == 200){
                this.setState({ userInfo, isLoggedIn: true, api_acctoken: res.data.token, api_UID: res.data.userId});
                if(this.state.isLoggedIn){
                    this.props.HandleUserLoginMain(this.state.api_acctoken, this.state.api_UID);
                }
            }
        });
    };

    responseGoogleError(response){
        console.log(response);
    };

    logout(response){
        let userInfo = {
            name: "",
            emailId: "",
            acctoken: "",
        };
        this.setState({ userInfo, isLoggedIn: false, api_acctoken: "", api_UID: -1 });
        if(!this.state.isLoggedIn){
            this.props.HandleUserLogoutMain();
        }

    };

    render() {
        return (
            <div>
                {this.state.isLoggedIn ? (
                    <div>
                        <GoogleLogout
                            clientId={CLIENT_ID}
                            buttonText="Logout"
                            onLogoutSuccess={this.logout}
                        ></GoogleLogout>
                    </div>
                ) : (
                    <GoogleLogin
                        clientId={CLIENT_ID}
                        buttonText="Login"
                        onSuccess={this.responseGoogleSuccess}
                        onFailure={this.responseGoogleError}
                        isSignedIn={true}
                        cookiePolicy={"single_host_origin"}
                    />
                )}
            </div>
        );
    }
}
export default GoogleLoginButton;