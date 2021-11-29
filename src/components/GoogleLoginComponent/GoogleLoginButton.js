import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const CLIENT_ID = "635477069596-1oa79h6p3a8u1rrpbkd9v471mkoiihqv.apps.googleusercontent.com";

class GoogleLoginButton extends React.Component {

    state = {
        isLoggedIn: false,
        userInfo: {
            name: "",
            emailId: "",
        }
    };

    responseGoogleSuccess = (response) => {
        let userInfo = {
            name: response.profileObj.name,
            emailId: response.profileObj.email,
        };
        this.setState({ userInfo, isLoggedIn: true });
        this.props.HandleUserLogin();
    };

    responseGoogleError = (response) => {
        console.log(response);
    };

    logout = (response) => {
        let userInfo = {
            name: "",
            emailId: "",
        };
        this.setState({ userInfo, isLoggedIn: false });
        this.props.HandleUserLogout();
    };

    render() {
        return (
            <div>
                {this.state.isLoggedIn ? (
                    <div>
                        <GoogleLogout
                            clientId={CLIENT_ID}
                            // icon={false}
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