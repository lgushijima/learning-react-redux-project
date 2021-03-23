import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import LoadingBar from 'react-redux-loading'

import LoginInstructions from './LoginInstructions'
import LoginForm from './LoginForm'

class Login extends Component {
    render(){
        const { isAuthenticated, location } = this.props;
        let returnUrl = null;

        if(location.search){
            const params = new URLSearchParams(this.props.location.search);
            returnUrl = params.get('returnUrl');
        }
        
        return (
            <Fragment>
                <LoadingBar className="loading-bar"/>
                {isAuthenticated === false ? (
                    <div className="login-page">
                        <div className="login-wrapper shadow">
                            <div className="row no-gutters">
                                <div className="col-xs-12 col-sm-4 col-md-5 login-left-side">
                                    <LoginInstructions />
                                </div>

                                <div className="col-12 col-sm-8 col-md-7 login-right-side">
                                    <LoginForm onAuthenticateUser={this.onAuthenticateUser}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Redirect to={returnUrl ? returnUrl : "/Dashboard"} />
                )}
            </Fragment>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        isAuthenticated: authedUser !== null
    };
}

export default connect(mapStateToProps)(Login);
