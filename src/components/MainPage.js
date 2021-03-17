import React, { Component } from "react";
import Nav from "./Nav";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import LoadingBar from "react-redux-loading";

import { handleGetInitialData } from "../actions/shared";

import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";

class MainPage extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(handleGetInitialData());
    }
    render() {
        const { questions, users } = this.props;

        return (
            <div className="main-page">
                <Nav />
                <LoadingBar className="loading-bar"/>

                <Route path="/Dashboard" exact component={Dashboard} />
                <Route path="/NewQuestion" exact component={NewQuestion} />
                <Route path="/LeaderBoard" exact component={LeaderBoard} />
                
                <Route path="/Question/:id" component={NewQuestion} />
            </div>
        );
    }
}

function mapStateToProps({ questions, users }) {
    return {
        questions,
        users,
    };
}

export default connect(mapStateToProps)(MainPage);
