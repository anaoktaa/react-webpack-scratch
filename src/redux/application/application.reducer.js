import ApplicationTypes from './application.types';

const INITIAL_STATE = {
    foldDrawer: false
}

const application = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ApplicationTypes.SET_FOLD_DRAWER:
            return {
                ...state,
                foldDrawer: !state.foldDrawer
            }
        default:
            return state;
    }
};

export default application;