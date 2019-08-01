import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Nonprofit from "./Nonprofit"; 
import User from "./User"; 
import CreateAccount from "./CreateAccount"; 


class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div className="navbar">
                        <ul className="header ">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/Login">Login</NavLink></li>
                            <li><NavLink to="/About">About</NavLink></li>
                        </ul>
                    </div>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/Login" component={Login}/>
                        <Route path="/About" component={About}/>
                        <Route path="/Nonprofit" component={Nonprofit}/>
                        <Route path="/User" component={User} />
                        <Route path="/CreateAccount" component={CreateAccount} />

                    </div>
                </div>
            </HashRouter>
     

        );
    }
}
export default Main;