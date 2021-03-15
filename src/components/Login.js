import React, { Component } from "react";
import { connect } from "react-redux";

import "../resources/css/Login.css";
import reactLogo from '../resources/images/react-logo.png'

class Login extends Component {
    render() {
        return (
            <div className="div-login-content">
                <div className="login-wrapper">
                    <div className="row no-gutters shadow">
                        <div className="col-xs-12 col-sm-4 col-md-5 login-left-side">
                            <div className="p-3">
                                <div className="self-align-center" align="center">
                                    <div className="pb-4">
                                        <img title="Powered by Blockcerts" alt="Account Logo" src={reactLogo} height="50"/>
                                    </div>

                                    <p><small>This is a React/Redux project created to test my learnings during React Nanodegree program on Udacity.com</small></p>

                                    <h5>Instructions</h5>
                                    <div className="text-left">
                                        <small>
                                            <p>Use one of these usernames:</p>
                                            <p>
                                                <ul>
                                                    <li>sarahedo</li>
                                                    <li>tylermcginnis</li>
                                                    <li>johndoe</li>
                                                </ul>
                                            </p>
                                            <p>Use password: 1234</p>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-8 col-md-7 login-right-side">
                            <h2 className="px-4 py-3">User Authentication</h2>

                            <div className="px-5 py-3">
                                <p>Please provide your user credentials.</p>

                                <form className="my-4" onSubmit={()=>{}}>
                                    <input name="txtReturnURL" type="hidden" />

                                    <div className="form-row">
                                        <div className="col-12">
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><i className="fas fa-user"></i></div>
                                                </div>
                                                <input type="text" className="form-control required" placeholder="Username" data-property="Username" />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><i className="fas fa-lock"></i></div>
                                                </div>
                                                <input type="password" className="form-control required" placeholder="Password" data-property="Password" />
                                            </div>
                                        </div>
                                    </div>

                                    <button type="button" className="btn btn-block btn-primary my-4" onClick={()=>{}}>Login</button>
                                </form>

                                <div class="pt-4">
                                    <center><small className="text-secondary">version 2021.03.14</small></center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Login);
