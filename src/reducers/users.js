import { 
    GET_USERS,  
    SAVE_QUESTION,
    CLEAR_USERS
} from '../actions/users'

export default function users(state = {}, action) {
    switch(action.type){
        case GET_USERS : {
            return {
                ...state,
                ...action.users
            }
        }
        case SAVE_QUESTION : {
            const { authedUser, question } = action;
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    questions: state[authedUser].questions.concat([question.id])
                }
            }
        }
        case CLEAR_USERS: {
            return {}
        }
        default: 
            return state
    }
}