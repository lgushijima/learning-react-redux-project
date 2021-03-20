import { loginUser, getInitialData, saveQuestion } from "../util/api";
import { showLoading, hideLoading } from "react-redux-loading";
import { getQuestions, triggerSaveQuestion, triggerClearQuestions } from "../actions/questions";
import { getUsers, triggerSaveQuestionToUser, triggerClearUsers } from "../actions/users";
import { authenticateUser, logoutUser } from "../actions/authedUser";


export function handleAuthenticateUser(username, password) {
    return (dispatch) => {
        dispatch(showLoading());

        return loginUser(username, password)
            .then((user) => dispatch(authenticateUser(user)))
            .then(() => dispatch(hideLoading()));
    };
}

export function handleLogoutUser() {
    return (dispatch) => {
        dispatch(logoutUser());
        dispatch(triggerClearQuestions());
        dispatch(triggerClearUsers());
    };
}


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

export function handleSaveQuestion(authedUser, optionOneText, optionTwoText){
    return (dispatch) => {
        dispatch(showLoading());
        
        let info = { 
            author: authedUser, 
            optionOneText, 
            optionTwoText
        };
        return saveQuestion(info)
            .then((question) =>{ 
                dispatch(triggerSaveQuestion(question));
                dispatch(triggerSaveQuestionToUser(authedUser, question))
            })
            .then(() => dispatch(hideLoading()));
    };
}