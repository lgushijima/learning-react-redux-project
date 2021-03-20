import { 
    GET_USERS,
} from '../actions/users'

import {
    SAVE_ANSWER,
    SAVE_QUESTION,
    CLEAR_DATA
} from '../actions/shared'

export default function users(state = {}, action) {
    switch(action.type){
        case GET_USERS : {
            return {
                ...state,
                ...action.users
            }
        }
        case SAVE_QUESTION : {
            const { id, author } = action.question;
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat([id])
                }
            }
        }
        case SAVE_ANSWER : {
            const { authedUser, qid, answer } = action.answer;
            console.log('Update user answer');
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid] : answer
                    }
                }
            }
        }
        case CLEAR_DATA: {
            return {}
        }
        default: 
            return state
    }
}