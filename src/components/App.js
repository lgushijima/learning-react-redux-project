import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route}  from 'react-router-dom';

import MainPage from "./MainPage";
import Login from "./Login";

import "../resources/css/App.css";


class App extends Component {
    render() {
        return (
            <Router>
                <Route path='/' exact component={MainPage} />
                <Route path='/Login' exact component={Login} />
            </Router>
        );
    }
}

export default connect()(App);
