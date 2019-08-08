import React, { Component } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

import { Link } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";

library.add(faPiggyBank);

export default class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div id="Navbar">
                <Navbar color="dark" light expand="md">
                    <NavbarBrand> <Link to="/" className="header">Little Anchorage Financial Bank              <FontAwesomeIcon className="brand" icon="piggy-bank" /></Link></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/account" className="nlink">Account</Link>
                            </NavItem>
                            <NavItem>
                                {/* <Link to="/login" className="nlink">Login</Link> */}
                            </NavItem>
                            <NavItem>
                                {/* <Link id="viewUsers" to="/viewUsers" className="nlink">View Users</Link> */}
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
