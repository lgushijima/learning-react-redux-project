import { 
    AUTHENTICATE_USER,
    LOGOUT_USER,
    SET_USER
} from "../actions/authedUser";

export default function authedUser(state = null, action) {
    switch (action.type) {
        case AUTHENTICATE_USER: {
            const { id, name, avatarURL } = action.user
            localStorage.setItem("currentUser", JSON.stringify({
                id,
                name,
                avatarURL
            }));

            return {
                ...state,
                ...action.user,
            };
        }
        case SET_USER: {
            return {
                ...state,
                ...action.user,
            };
        }
        case LOGOUT_USER: {
            localStorage.removeItem("currentUser");
            return null;
        }
        default:
            return state;
    }
}
