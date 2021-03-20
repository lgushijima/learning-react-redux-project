import React, {Component, Fragment} from 'react'
import { connect } from "react-redux";
import packageJson from '../../package.json';

import { handleAuthenticateUser } from "../actions/shared";

class LoginForm extends Component {
    state = {
        username: null,
        password: null
    }

    onUserNameChanged = (e) => {
        this.setState(() => ({
            username: e.target.value
        }));
    }
    onPasswordChanged = (e) => {
        this.setState(() => ({
            password: e.target.value
        }));
    }
    onAuthenticateUser = (e) => {
        e.preventDefault();
        const {username, password} = this.state;
        const { dispatch } = this.props;

        dispatch(handleAuthenticateUser(username, password));

        this.setState(() => ({
            username: "",
            password: "",
        }));
    }

    render() {
        return (
            <Fragment>
                <h2 className="p-4">User Authentication</h2>
                <div className="p-4">
                    <h6>Welcome to the Would Your Rather App!</h6>
                    <p>Please sign in to continue.</p>

                    <form className="my-4" onSubmit={(e)=>{this.onAuthenticateUser(e)}}>
                        <input name="txtReturnURL" type="hidden" />

                        <div className="form-row">
                            <div className="col-12">
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="fas fa-user"></i>
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Username" onChange={this.onUserNameChanged} />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="fas fa-lock"></i>
                                        </div>
                                    </div>
                                    <input type="password" className="form-control" placeholder="Password"  onChange={this.onPasswordChanged}/>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-block btn-primary my-4">Login</button>
                    </form>

                    <div className="pt-4">
                        <center>
                            <small className="text-secondary">version {packageJson.version}</small>
                        </center>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default connect()(LoginForm)
