import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
    appTheme: string;
    isLogin: boolean;
    isTesting: boolean;
}

const initialState: IInitialState = {
    appTheme: '',
    isLogin: true,
    isTesting: false,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppTheme: (state, action: PayloadAction<string>) => {
            state.appTheme = action.payload;
        },
        setIsLogin: (state, action: PayloadAction<boolean>) => {
            state.isLogin = action.payload;
        },
        setIsTesting: (state, action: PayloadAction<boolean>) => {
            state.isTesting = action.payload;
        },
    },
});

export default appSlice.reducer;