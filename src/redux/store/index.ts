import { combineReducers, configureStore } from '@reduxjs/toolkit';

import appReducer from '_redux/reducers/appSlice';
import wbReducer from '_redux/reducers/wbSlice';

const rootReducer = combineReducers({
    appReducer,
    wbReducer,
});

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export const store = makeStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
