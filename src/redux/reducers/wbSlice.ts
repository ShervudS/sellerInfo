import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// [types
import { IOrders } from '_redux/types';

// [utils]
import { getDateToDay, getFirstDayWeekend } from '_utils/helper';

interface IInitialState {
    orders: IOrders[];
    firstDayFetchData: string;
    endDayFetchData: string;
}

const initialState: IInitialState = {
    orders: [],
    firstDayFetchData: getFirstDayWeekend().slice(0, 10),
    endDayFetchData: getDateToDay().slice(0, 10),
};

export const wbSlice = createSlice({
    name: 'wb',
    initialState,
    reducers: {
        setOrders: (state, action: PayloadAction<IOrders[]>) => {
            state.orders = action.payload;
        },
        setFirstDayFetchData: (state, action: PayloadAction<string>) => {
            state.firstDayFetchData = action.payload;
        },
        setEndDayFetchData: (state, action: PayloadAction<string>) => {
            state.endDayFetchData = action.payload;
        },
    },
});

export default wbSlice.reducer;
