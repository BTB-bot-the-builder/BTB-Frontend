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
import { BrowserRouter,Route,Switch,Link } from 'react-router-dom';

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

const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact={true} path='/' component={LandingPageComponent} />
            <Route path='/create-bot-step1' component={MainPageComponent}/>
            <Route path='/create-bot-step2' component={MainPageComponent2}/>
            <Route path='/create-bot-step3' component={MainPageComponent3}/>
            <Route path='/my-projects' component={MyProjectsPageComponent} />
            <Route path='/navbar' component={NavBar}/>
            <Route component={PageNotFoundComponent}/>
        </Switch>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById("app"));
// ReactDOM.render(<MainPageComponent/>, document.getElementById("app"));
// ReactDOM.render(<MainPageComponent2/>, document.getElementById("app"));
// ReactDOM.render(<MainPageComponent3/>, document.getElementById("app"));
// ReactDOM.render(<MyProjectsPageComponent/>, document.getElementById("app"));