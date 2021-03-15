export const TOGGLE_USER_MENU = 'TOGGLE_USER_MENU'
export const MENU_STATE_ACTIVE = 'active'
export const MENU_STATE_INACTIVE = ''

export function toggleUserMenu (forceMenuState){
    return {
        type: TOGGLE_USER_MENU,
        menuState: forceMenuState
    }
}