import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";
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

    closeMenu = () => {
        this.setState((state) => ({
            userMenuState: "",
        }));
    }

    handleLogout = (e) => {
        e.preventDefault();

        const {dispatch} = this.props;
        dispatch(handleLogoutUser());
    };

    render() {
        const { userMenuState } = this.state;
        const { authedUser } = this.props;
        // let isActive = this.context.router.isActive(this.props.to, true);
        // let className = isActive ? "active" : "";

        return (
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="container">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink  to="/Dashboard" className="nav-link py-0" activeClassName="active">Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/NewQuestion" className="nav-link py-0" activeClassName="active">Create Question</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/LeaderBoard" className="nav-link py-0" activeClassName="active">Leader Board</NavLink>
                            </li>
                        </ul>

                        <ul className="navbar-nav align-items-center">
                            <li className={`nav-item user-info ${userMenuState}`} onClick={this.handleMenuState} onMouseLeave={this.closeMenu}>
                                <span className="px-2">Hello {authedUser.name}!</span>
                                <img src={authedUser.avatarURL} alt="" title="" className="avatar-42" />

                                <div className="dropdown-menu">
                                    <span className="dropdown-item">Action</span>
                                    <span className="dropdown-item">Another action</span>
                                    <div className="dropdown-divider"></div>
                                    <span className="dropdown-item text-danger" onClick={this.handleLogout}>
                                        <i className="fas fa-sign-out-alt mr-2"></i> 
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

export default withRouter(connect(mapStateToProps)(Nav));
