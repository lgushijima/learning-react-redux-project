import { loginUser } from "../util/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const AUTHENTICATE_USER = "AUTHENTICATE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const SET_USER = "SET_USER";

function authenticateUser(user) {
    return {
        type: AUTHENTICATE_USER,
        user,
    };
}

export function handleAuthenticateUser(username, password) {
    return (dispatch) => {
        dispatch(showLoading());

        return loginUser(username, password)
            .then((user) => dispatch(authenticateUser(user)), () => {})
            .then(() => dispatch(hideLoading()));
    };
}


function setUser(user) {
    return {
        type: AUTHENTICATE_USER,
        user,
    };
}

export function handleSetUser(user) {
    return (dispatch) => {
        dispatch(setUser(user))
    };
}

function logoutUser() {
    return {
        type: LOGOUT_USER,
    };
}

export function handleLogoutUser() {
    return (dispatch) => {
        dispatch(logoutUser())
    };
}
