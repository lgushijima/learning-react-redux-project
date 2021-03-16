import { combineReducers } from 'redux'
import authedUser from './authedUser'
import baseSettings from './baseSettings'

import {loadingBarReducer} from "react-redux-loading";

export default combineReducers({
    authedUser, 
    baseSettings,
    loadingBar:loadingBarReducer
})