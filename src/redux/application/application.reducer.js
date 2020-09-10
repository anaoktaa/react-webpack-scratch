import ApplicationTypes from './application.types';

const INITIAL_STATE = {
    foldDrawer: true,
    floatingHeaderTools: false
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
        default:
            return state;
    }
};

export default application;