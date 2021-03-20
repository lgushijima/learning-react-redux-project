export const AUTHENTICATE_USER = "AUTHENTICATE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const SET_USER = "SET_USER";

export function authenticateUser(user) {
    return {
        type: AUTHENTICATE_USER,
        user,
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

export function logoutUser() {
    return {
        type: LOGOUT_USER,
    };
}

