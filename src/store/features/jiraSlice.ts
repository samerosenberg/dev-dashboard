import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    accessToken: string | null;
}

const initialState: AuthState = {
    accessToken: null,
};

const jiraSlice = createSlice({
    name: "jira",
    initialState,
    reducers: {
        setAccessToken: (state, action: PayloadAction<string | null>) => {
            state.accessToken = action.payload;
        },
    },
});

export const { setAccessToken } = jiraSlice.actions;

export default jiraSlice.reducer;
