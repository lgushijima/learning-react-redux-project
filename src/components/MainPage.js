import React, { Component } from "react";
import Nav from "./Nav";
import {connect} from 'react-redux'
import { Redirect } from "react-router-dom";

class MainPage extends Component {
    componentDidMount() {
    }
    render() {
        if (this.props.authedUser === undefined) {
            return <Redirect to="/Login" />;
        }
        return <Nav />;
    }
}

export default connect()(MainPage);
