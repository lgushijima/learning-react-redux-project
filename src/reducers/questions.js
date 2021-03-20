import {
    GET_QUESTIONS
} from '../actions/questions'

import {
    SAVE_ANSWER,
    SAVE_QUESTION,
    CLEAR_DATA
} from '../actions/shared'

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
        case CLEAR_DATA: {
            return {}
        }
        default: 
            return state
    }
}