import {
    GET_QUESTIONS,
    SAVE_QUESTION,
    SAVE_ANSWER,
    CLEAR_QUESTIONS
} from '../actions/questions'

export default function questions(state = {}, action) {
    switch(action.type){
        case GET_QUESTIONS : {
            return {
                ...state,
                ...action.questions
            }
        }
        case SAVE_ANSWER : {
            const { authedUser, qid, answer } = action.answer
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                      ...state[qid][answer],
                      votes: state[qid][answer].votes.concat([authedUser])
                    }
                  }
            }
        }
        case SAVE_QUESTION : {
            const { id } = action.question;
            return {
                ...state,
                [id]: { ...action.question}
            }
        }
        case CLEAR_QUESTIONS: {
            return {}
        }
        default: 
            return state
    }
}