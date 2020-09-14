import { createSelector } from 'reselect';

const selectApp = state => state.application;

export const selectFoldDrawer = createSelector(
    [selectApp],
    app => app.foldDrawer
);
export const selectFloatingHeaderTools = createSelector(
    [selectApp],
    app => app.floatingHeaderTools
);
export const selectMegaMenuToggle = createSelector(
    [selectApp],
    app => app.megaMenuToggle
);
export const selectSettingHeaderToggle = createSelector(
    [selectApp],
    app => app.settingHeaderToggle
);