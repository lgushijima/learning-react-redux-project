import React, { Component } from "react";
import { connect } from "react-redux";
import { handleLogoutUser } from "../actions/authedUser";

class Nav extends Component {
    state = {
        userMenuState: "",
    };

    handleMenuState = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState((state) => ({
            userMenuState: state.userMenuState ? "" : "active",
        }));
    };

    handleLogout = (e) => {
        e.preventDefault();

        const {dispatch} = this.props;
        dispatch(handleLogoutUser());
    };

    render() {
        const { userMenuState } = this.state;
        const { authedUser } = this.props;

        return (
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="container">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto align-items-center">
                            <li className="nav-item active">
                                <span className="nav-link py-0">Home</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link py-0">Link</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link py-0">Disabled</span>
                            </li>
                        </ul>

                        <ul className="navbar-nav align-items-center">
                            <li className={`nav-item user-info ${userMenuState}`} onClick={this.handleMenuState}>
                                <span className="px-2">Hello {authedUser.name}!</span>
                                <img src={authedUser.avatarURL} alt="" title="" className="avatar-42" />

                                <div className="dropdown-menu">
                                    <span className="dropdown-item">Action</span>
                                    <span className="dropdown-item">Another action</span>
                                    <div className="dropdown-divider"></div>
                                    <span className="dropdown-item" onClick={this.handleLogout}>
                                        Logout
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser,
    };
}

export default connect(mapStateToProps)(Nav);
