import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import Login from "./Login";
import MainPage from "./MainPage";

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
                    <Route path="/Login" exact component={Login} />
                    
                    <Route path="/" render={(props) =>{
                        if(isAuthenticated) {
                            return <MainPage />;
                        }
                        else{
                            const requestedUrl = encodeURIComponent(props.location.pathname);
                            return <Redirect to={{
                                pathname: "/Login",
                                search: `?returnUrl=${requestedUrl}`,
                            }} />
                        }
                    }} />
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
