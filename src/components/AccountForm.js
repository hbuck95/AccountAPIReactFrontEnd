import React, { Component } from 'react';
import axios from 'axios';

import {
    Button,
    Container,
    Row,
    Col
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css'

export default class AccountForm extends Component {
    constructor() {
        super();
        this.state = {
            prize: null,
            responseStatus: null,
            displayPrize: false
        };
    }

    submitForm = (e) => {
        e.preventDefault();

        this.setState({
            prize: null,
            responseStatus: null,
            displayPrize: false
        })

        const customer = {
            "firstName": e.target[0].value,
            "lastName": e.target[1].value
        };

        const headers = {
            'Content-Type': 'application/json'
        };

        axios.post("http://localhost:8080/customer/create", customer, {
            headers: headers
        }).then(response => {
            console.log(response.data);
            let data = response.data;            
            this.setState({ prize: data.Prize, responseStatus: data.Status });
            document.getElementById("accountForm").reset();
        }).catch(err => console.log(err));
    }

    showPrize = (e) => {
        e.preventDefault();
        this.setState({ displayPrize: true });
    }

    render() {
        return (
            <div id="accountFormRoot">
                <Container>
                    <br />
                    <form id="accountForm" onSubmit={this.submitForm}>
                        <Row>
                            <Col />
                            <Col />
                            <Col />
                            <Col className="formHead" xs="auto"><h2>Please enter your details:</h2></Col>
                            <Col />
                            <Col />
                            <Col />
                        </Row>
                        <Row>
                            <Col />
                            <Col />
                            <Col><h5 className="formField">First Name:</h5></Col>
                            <Col><input id="firstNameInput" size="25" type="text" placeholder="John"></input></Col>
                            <Col />
                            <Col />
                            <Col />
                        </Row>
                        <Row>
                            <Col />
                            <Col />
                            <Col><h5 className="formField">Last Name:</h5></Col>
                            <Col><input id="lastNameInput" size="25" type="text" placeholder="Smith"></input></Col>
                            <Col />
                            <Col />
                            <Col />
                        </Row>
                        <Row>
                            <Col />
                            <Col />
                            <Col><Button id="userSubmit" color={this.state.responseStatus === null ? "primary" : this.state.responseStatus ? "success" : "danger"}>Create Account</Button></Col>
                            <Col />
                            <Col />
                        </Row>
                        <Row>
                            <Col />
                            <Col />
                            <Col>
                                <br />
                                {this.state.responseStatus != null ?
                                    this.state.responseStatus === "Customer created" ? (
                                        <div>
                                            <p>Your account was has been successfully created!</p>
                                            <Button id="userSubmit" onClick={this.showPrize} color="primary">View Prize</Button>
                                        </div>
                                    ) : (
                                        <p id="error" className="errorField">An error occured whilst submitting your details. Please try again.</p>
                                    ) : (
                                        <br />
                                    )
                                }
                            </Col>
                            <Col />
                            <Col />
                        </Row>
                        <br /><br />
                        {this.state.displayPrize ?
                            this.state.prize === 0 ? (
                                <h2>You didn't win, better luck next time!</h2>
                            ) : (
                                <h2>Congratulations! You won £{this.state.prize}!!</h2>
                            ) : (
                                <br/>
                            )}
                    </form>
                </Container>
            </div>
        );
    }

}