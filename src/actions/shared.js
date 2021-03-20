import { loginUser, getInitialData, saveQuestionAnswer, saveQuestion } from "../util/api";
import { showLoading, hideLoading } from "react-redux-loading";
import { getQuestions } from "../actions/questions";
import { getUsers } from "../actions/users";
import { authenticateUser, logoutUser } from "../actions/authedUser";

export const SAVE_ANSWER = "SAVE_ANSWER";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const CLEAR_DATA = "CLEAR_DATA";

function clearData() {
    return {
        type: CLEAR_DATA
    }
}

function addAnswer(answer) {
    return {
        type: SAVE_ANSWER,
        answer
    }
}

function addQuestion(question) {
    return {
        type: SAVE_QUESTION,
        question
    }
}

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
        dispatch(clearData());
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

export function handleSaveAnswer(authedUser, qid, answer){
    return (dispatch) => {
        dispatch(showLoading());
        
        let info = { authedUser, qid, answer };
        return saveQuestionAnswer(info)
            .then(() => {
                dispatch(addAnswer(info));
            })
            .then(() => dispatch(hideLoading()));
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
                dispatch(addQuestion(question));
            })
            .then(() => dispatch(hideLoading()));
    };
}