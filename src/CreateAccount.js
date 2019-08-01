import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./login.css";
import { object } from "prop-types";
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class CreateAccount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            buttonState: "noValue"
        };
    }
    validateForm() {
        return (this.state.email.length > 0 && this.state.password.length > 0)
            && (this.state.buttonState === "user" || this.state.buttonState === "nonprofit"); 
    }

    handleChange = event => {
        this.setState({
            //kvp
            [event.target.id]: event.target.value
        });
    }

  
    //send to db
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.buttonState); 
        if (this.state.buttonState != "noValue") {
            if (this.state.buttonState === "user") {
                sessionStorage.setItem(this.state.email, JSON.stringify(this.state.password, 0));
                alert("User account created");
            } else {
                sessionStorage.setItem(this.state.email, JSON.stringify(this.state.password, 1));
                alert("Nonprofit account created");
            }
        }
    }

    handleRadiochange = e => {
        this.state.buttonState = e.target.value;  
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

                    <div>
                        <div><FormLabel>I am a </FormLabel></div>
                        <RadioGroup row class="radio">
                            <FormControlLabel
                                value="user"
                                control={<Radio />}
                                label="User"
                                id="user"
                                onChange={this.handleRadiochange}
                            />

                            <FormControlLabel
                                value="nonprofit"
                                control={<Radio />}
                                label="Nonprofit"
                                id="nonprofit"
                                onChange={this.handleRadiochange}

                            />
                        </RadioGroup>

                    </div>

                    <Button
                        block
                        bsSize="lg"
                        disabled={this.validateForm}
                        type="submit"
                    >
                        Create Account
                    </Button>

                  
                  
                </form>

            </div>


        );
    }
}
export default CreateAccount;
