import { createSelector } from 'reselect';

const selectApp = state => state.application;

export const selectFoldDrawer = createSelector(
    [selectApp],
    app => app.foldDrawer
);