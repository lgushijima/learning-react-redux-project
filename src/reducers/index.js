import { combineReducers } from 'redux'
import authedUser from './authedUser'
import questions from './questions'
import users from './users'
import menuState from './baseSettings'


import {loadingBarReducer} from "react-redux-loading";

export default combineReducers({
    authedUser, 
    questions,
    users,
    menuState,
    loadingBar:loadingBarReducer
})