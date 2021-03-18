import { getInitialData } from "../util/api";
import { showLoading, hideLoading } from "react-redux-loading";
import { getQuestions } from "../actions/questions";
import { getUsers } from "../actions/users";

export function handleGetInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData().then(({ users, questions }) => {
            dispatch(getQuestions(questions));
            dispatch(getUsers(users));
            dispatch(hideLoading());
        });
    };
}
