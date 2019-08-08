import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavigationBar from './NavigationBar';
import AccountForm from './AccountForm';

export default class RouterHome extends Component {
    render() {
        return (
            <div>
                <Router>
                    <NavigationBar/>
                    <Route exact path="/" render={() => <div><br/><p>Please register or login to your account.</p></div>} />
                    <Route path="/account" render={() => <AccountForm/>} />
                    {/* <Route path="/register" render={() => <RegisterForm/>} />
                    <Route path="/viewUsers" render={() => <UserList/>} /> */}
                </Router>
            </div>
        );
    }
}