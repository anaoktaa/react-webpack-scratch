import ApplicationTypes from './application.types';

const INITIAL_STATE = {
    foldDrawer: true,
    floatingHeaderTools: false,
    megaMenuToggle: false,
    settingHeaderToggle: false,
    gridDashboardToggle: false,
    notifHeaderToggle: false
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
                megaMenuToggle: action.payload
            }
        case ApplicationTypes.SET_SETTING_HEADAER_TOGGLE:
            return {
                ...state,
                settingHeaderToggle: action.payload
            }
        case ApplicationTypes.SET_GRID_DASHBOARD_TOGGLE:
            return {
                ...state,
                gridDashboardToggle: action.payload
            }
        case ApplicationTypes.SET_NOTIF_HEADER_TOGGLE:
            return {
                ...state,
                notifHeaderToggle: action.payload
            }
        default:
            return state;
    }
};

export default application;