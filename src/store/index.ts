import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./features/cardSlice";
import breakpointReducer from "./features/breakpointSlice";
import githubReducer from "./features/githubSlice";
import cardInfoReducer from "./features/cardInfoSlice";
import jiraReducer from "./features/jiraSlice";

export const store = configureStore({
    reducer: {
        card: cardReducer,
        breakpoint: breakpointReducer,
        github: githubReducer,
        cardInfo: cardInfoReducer,
        jira: jiraReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
