import React, { Component, Fragment } from "react";
import LoadingBar from 'react-redux-loading'

import LoginInstructions from './LoginInstructions'
import LoginForm from './LoginForm'

class Login extends Component {
    render(){
        return (
            <Fragment>
                <LoadingBar className="loading-bar"/>

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
            </Fragment>
        )
    }
}

export default Login;
