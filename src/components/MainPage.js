import React, { Component } from "react";
import Nav from "./Nav";
import {connect} from 'react-redux'
import { Route} from "react-router-dom";

import Dashboard from "./Dashboard";
import Home2 from "./Home2";

class MainPage extends Component {
    componentDidMount() {

    }
    render() {
        const {authedUser} = this.props;
        console.log(authedUser);

        return (
            <div className="main-page">
                <Nav />
                <Route path='/Dashboard' exact component={Dashboard} />
                <Route path='/Home2' exact component={Home2} />
            </div>
        )
    }
}

function mapStateToProps({authedUser}){
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(MainPage);
