import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./login.css"; 
import { object } from "prop-types";
import {
    NavLink,
} from "react-router-dom";
import { withRouter } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.routeChange = this.routeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkIfOrg = this.checkIfOrg.bind(this);
        this.state = {
            email: "",
            password: "", 
            isOrg:""
        }; 
    }
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0; 
    }

    handleChange = event => {
        this.setState({
            //kvp
            [event.target.id]: event.target.value
        }); 
    }

    routeChange() {
        var Promise1 = Promise.resolve(this.handleSubmit()).then(function(value) {
            console.log("HIIIIIII", value);
        })
        //then(function(value) {
       // Promise1.then(Promise.resolve(this.checkIfOrg(Promise1.value)));
            
    }
    checkIfOrg(value) {
        console.log(value);
        if (value === 'YES') {this.props.history.push('/Nonprofit');}
            else {this.props.history.push('/User');}
    }
    handleSubmit() {
        var data = [];
        data.push(this.state.password, 0); 
        window.sessionStorage.setItem("a@blah.com", JSON.stringify(data)); 
        var data = {
            name: this.state.email,
            pass: this.state.password,
        }
        var email = this.state.email;
        console.log(data);
        fetch("http://localhost:3001/", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then((response) => {
            console.log("data", response);
            if (response.status >= 400) {
              console.log("bad");  
              throw new Error("Bad response from server");
            }
            const response1 = response.json();
            response1.then((response) => { 
            console.log("state", email);
            fetch("http://localhost:3001/users?"+ "username=" + String(email))
            .then((response) => {
              console.log(response);
            const response2 = response.json();
            response2.then(function(response) {
                this.setState({isOrg:response[0].isOrg});
                if (this.state.isOrg == 'YES') {this.props.history.push('/Nonprofit');}
                else {this.props.history.push('/User');}
            }.bind(this));
            });
        });
        });
               // navigation.navigate("Nonprofit");
      
    }
        

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <div><FormLabel>Email</FormLabel></div>
                        <FormControl 
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <div><FormLabel>Password</FormLabel></div>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    
                    <Button
                        block
                        bsSize="lg"
                        disabled={this.validateForm}
                        type="submit"
                    >
                        Login
                    </Button>
                    <div id="createAcc">
                        <NavLink to="/CreateAccount">
                            Create account
                        </NavLink>    
                    </div>
                </form>
              
            </div>
            
            
        );
    }
}
export default Login; 
             