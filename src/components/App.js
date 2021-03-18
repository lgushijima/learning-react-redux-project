import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Login from "./Login";
import MainPage from "./MainPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import { handleSetUser } from "../actions/authedUser";
import { handleGetInitialData } from "../actions/shared";

import "../resources/css/App.css";

class App extends Component {
    componentDidMount() {
        const { dispatch, authedUser } = this.props;
        if (authedUser === null && localStorage["currentUser"]) {
            dispatch(handleSetUser(JSON.parse(localStorage["currentUser"])));
            dispatch(handleGetInitialData());
        }
    }

    render() {
        const { authedUser } = this.props;

        return (
            <Router>
                <Switch>
                    <PublicRoute
                        restricted={true}
                        component={Login}
                        path="/Login"
                        exact
                        isAuthenticated={authedUser !== null}
                    />
                    <PrivateRoute component={MainPage} path="/" isAuthenticated={authedUser !== null} />
                </Switch>
            </Router>
        );
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser,
    };
}

export default connect(mapStateToProps)(App);
