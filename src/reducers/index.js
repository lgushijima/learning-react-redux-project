import { combineReducers } from 'redux'
import authedUser from './authedUser'
import baseSettings from './baseSettings'

export default combineReducers({authedUser, baseSettings})