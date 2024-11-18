import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BreakpointState {
    breakpoint: string;
}

const initialState: BreakpointState = {
    breakpoint: "lg",
};

export const breakpointSlice = createSlice({
    name: "breakpoint",
    initialState,
    reducers: {
        setBreakpoint: (state, action: PayloadAction<string>) => {
            state.breakpoint = action.payload;
        },
    },
});

export const { setBreakpoint } = breakpointSlice.actions;
export default breakpointSlice.reducer;
