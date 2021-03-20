import { saveQuestionAnswer } from '../util/api';
import { showLoading, hideLoading } from "react-redux-loading";

export const GET_QUESTIONS = "GET_QUESTIONS"
export const SAVE_QUESTION = "SAVE_QUESTION"
export const SAVE_ANSWER = "SAVE_ANSWER"
export const CLEAR_QUESTIONS = "CLEAR_QUESTIONS"

export function getQuestions(questions){
    return{
        type: GET_QUESTIONS,
        questions
    }
}

export function triggerSaveQuestion(question){
    return{
        type: SAVE_QUESTION,
        question
    }
}

export function triggerSaveAnswer(answer){
    return{
        type: SAVE_ANSWER,
        answer
    }
}

export function triggerClearQuestions(){
    return{
        type: CLEAR_QUESTIONS
    }
}

export function handleSaveAnswer(authedUser, qid, answer){
    return (dispatch) => {
        dispatch(showLoading());
        
        let info = { authedUser, qid, answer };
        return saveQuestionAnswer(info)
            .then(() => dispatch(triggerSaveAnswer(info)))
            .then(() => dispatch(hideLoading()));
    };
}