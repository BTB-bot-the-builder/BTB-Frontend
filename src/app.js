import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import LandingPageComponent from './components/LandingPageComponents/LandingPageComponent';
import MainPageComponent from './components/MainPageComponents/MainPageComponent';
import MainPageComponent2 from './components/MainPageComponents2/MainPageComponent2';
import MainPageComponent3 from './components/MainPageComponents3/MainPageComponent3';
import MyProjectsPageComponent from './components/MyProjectsPageComponents/MyProjectsPageComponent';
import NavBar from './components/Yolo/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Link,Routes } from 'react-router-dom';
import HomePageComponent from './components/HomePageComponent/HomePageComponent';
import MainPageOfYolo from './components/Yolo/MainPageOfYolo';
import DocuPage from './components/DemoPage/Main';
import ChatWindow from './components/ChatWindow/ChatWindow.js';

class PageNotFoundComponent extends React.Component{
    render(){
        return (
            <div>
                <h1>404 Page Not Found!</h1>
                <Link to='/'><button>Home</button></Link>
            </div>
        );
    }
}

class MyRoutes extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
            jwt_token: "",
            userID: -1,
            projectID: -1,
        };
        this.HandleUserLogin = this.HandleUserLogin.bind(this);
        this.HandleUserLogout = this.HandleUserLogout.bind(this);
        this.HandleNewProjectID = this.HandleNewProjectID.bind(this);
    }

    componentDidMount(){
        const json1 = localStorage.getItem("isLoggedIn");
        const json2 = localStorage.getItem("jwt");
        const json3 = localStorage.getItem("uid");
        const json4 = localStorage.getItem("pid");
        const isLoggedIn = JSON.parse(json1);
        const jwt = JSON.parse(json2);
        const uid = JSON.parse(json3);
        const pid = JSON.parse(json4);
        this.setState(() => {
            return {
                isLoggedIn: isLoggedIn,
                jwt_token: jwt,
                userID: uid,
                projectID: pid,
            };
        });
    }

    componentDidUpdate(){
        const isloggedin = JSON.stringify(this.state.isLoggedIn);
        const jwt = JSON.stringify(this.state.jwt_token);
        const uid = JSON.stringify(this.state.userID);
        const pid = JSON.stringify(this.state.projectID);
        localStorage.setItem("isLoggedIn", isloggedin);
        localStorage.setItem("jwt", jwt);
        localStorage.setItem("uid", uid);
        localStorage.setItem("pid", pid);
    }

    HandleNewProjectID(pid){
        this.setState(() => {
            return {
                projectID: pid,
            };
        });
    }

    HandleUserLogin(token, uid){
        this.setState(() => {
            return {
                isLoggedIn: true,
                jwt_token: token,
                userID: uid,
            };
        });
    }

    HandleUserLogout(){
        this.setState(() => {
            return {
                isLoggedIn: false,
                jwt_token: "",
                userID: -1,
            };
        });
    }

    render(){
        return(
            <BrowserRouter>
                {!this.state.isLoggedIn? (
                    <Routes>
                        <Route path='/' element={<HomePageComponent HandleNewProjectID={this.HandleNewProjectID} userID={this.state.userID} jwt_token={this.state.jwt_token} HandleUserLogoutMain={this.HandleUserLogout}/>} />
                        <Route path='/create-bot-step1' element={<MainPageComponent jwt_token={this.state.jwt_token} userID={this.state.userID} projectID={this.state.projectID}/>}/>
                        <Route path='/create-bot-step2' element={<MainPageComponent2 jwt_token={this.state.jwt_token} userID={this.state.userID} projectID={this.state.projectID}/>}/>
                        <Route path='/create-bot-step3' element={<MainPageComponent3 jwt_token={this.state.jwt_token} userID={this.state.userID} projectID={this.state.projectID}/>}/>
                        <Route path='/my-projects' element={<MyProjectsPageComponent jwt_token={this.state.jwt_token} userID={this.state.userID} projectID={this.state.projectID}/>} />
                        <Route path='/yolo' element={<MainPageOfYolo jwt_token={this.state.jwt_token} userID={this.state.userID} projectID={this.state.projectID}/>} />
                        <Route path='/documentation' element={<DocuPage/>}/>
                        <Route path='*' element={<PageNotFoundComponent/>}/>
                    </Routes>
                ) : (
                    <Routes>
                        <Route path='/' element={<LandingPageComponent HandleUserLoginMain={this.HandleUserLogin}/>} />
                        <Route path='/documentation' element={<DocuPage/>}/>
                        <Route path='*' element={<PageNotFoundComponent/>}/>
                    </Routes>
                ) } 
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<MyRoutes/>, document.getElementById("app"));