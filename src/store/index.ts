import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./features/cardSlice";
import breakpointReducer from "./features/breakpointSlice";

export const store = configureStore({
    reducer: {
        card: cardReducer,
        breakpoint: breakpointReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
