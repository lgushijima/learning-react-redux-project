export const GET_USERS = "GET_USERS"
export const SAVE_QUESTION = "ADD_QUESTION"
export const CLEAR_USERS = "CLEAR_USERS"

export function getUsers(users){
    return{
        type: GET_USERS,
        users
    }
}

export function triggerSaveQuestionToUser(authedUser, question){
    return{
        type: SAVE_QUESTION,
        authedUser,
        question
    }
}

export function triggerClearUsers(){
    return{
        type: CLEAR_USERS
    }
}