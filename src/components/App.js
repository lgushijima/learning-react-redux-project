import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import Login from "./Login";
import MainPage from "./MainPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import { handleSetUser } from "../actions/authedUser";

import "../resources/css/App.css";

class App extends Component {
    componentDidMount() {
        const { dispatch, authedUser } = this.props;

        if (authedUser === null && localStorage["currentUser"]) {
            dispatch(handleSetUser(JSON.parse(localStorage["currentUser"])));
        }
    }

    render() {
        const { authedUser, isLoading, isAuthenticated } = this.props;

        return (
            <Router>
                {isLoading === false && (
                <Switch>
                    <PublicRoute
                        restricted={true}
                        component={Login}
                        path="/Login"
                        exact
                        isAuthenticated={isAuthenticated}
                    />
                    {authedUser !== null ? (
                        <PrivateRoute component={MainPage} path="/" isAuthenticated={isAuthenticated} />
                    ) : (
                        <Route path="/" render={() => (<Redirect to="/Login"/>)} />
                    )}
                </Switch>
                )}
            </Router>
        );
    }
}

function mapStateToProps({ authedUser }) {
    return {
        isAuthenticated: authedUser !== null,
        isLoading: authedUser === null && localStorage["currentUser"] !== undefined,
        authedUser,
    };
}

export default connect(mapStateToProps)(App);
