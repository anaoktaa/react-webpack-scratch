import ApplicationTypes from './application.types';

const INITIAL_STATE = {
    foldDrawer: true,
    floatingHeaderTools: false,
    megaMenuToggle: false,
    settingHeaderToggle: false
}

const application = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ApplicationTypes.SET_FOLD_DRAWER:
            return {
                ...state,
                foldDrawer: !state.foldDrawer
            }
        case ApplicationTypes.SET_FLOATING_HEADER_TOOLS:
            return {
                ...state,
                floatingHeaderTools: !state.floatingHeaderTools
            }
        case ApplicationTypes.SET_MEGA_MENU_TOGGLE:
            return {
                ...state,
                megaMenuToggle: !state.megaMenuToggle
            }
        case ApplicationTypes.SET_SETTING_HEADAER_TOGGLE:
            return {
                ...state,
                settingHeaderToggle: !state.settingHeaderToggle
            }
        default:
            return state;
    }
};

export default application;