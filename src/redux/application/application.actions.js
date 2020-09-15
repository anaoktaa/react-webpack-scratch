import ApplicationTypes from './application.types';

export const setFoldDrawer = () => ({
    type: ApplicationTypes.SET_FOLD_DRAWER
});

export const setFloatingHeaderTools = () => ({
    type: ApplicationTypes.SET_FLOATING_HEADER_TOOLS
});

export const setMegaMenuToggle = (data) => ({
    type: ApplicationTypes.SET_MEGA_MENU_TOGGLE,
    payload: data
});

export const setSettingHeaderToggle = (data) => ({
    type: ApplicationTypes.SET_SETTING_HEADAER_TOGGLE,
    payload: data
});

export const setGridDashboardToggle = (data) => ({
    type: ApplicationTypes.SET_GRID_DASHBOARD_TOGGLE,
    payload: data
});
export const setNotifHeaderToggle = (data) => ({
    type: ApplicationTypes.SET_NOTIF_HEADER_TOGGLE,
    payload: data
});