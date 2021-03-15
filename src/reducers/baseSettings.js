import { 
    TOGGLE_USER_MENU,
    MENU_STATE_ACTIVE,
    MENU_STATE_INACTIVE 
} from '../actions/baseSettings'

export default function global(state = {}, action) {
    switch(action.type){
        case TOGGLE_USER_MENU: {
            if(action.state !== null){
                return {
                    ...state,
                    menuState: action.menuState
                }
            }

            return {
                ...state,
                menuState: state.menuState === MENU_STATE_ACTIVE ? MENU_STATE_INACTIVE : MENU_STATE_ACTIVE
            }
        }
        default: 
            return state
    }
}