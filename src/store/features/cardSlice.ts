import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Layout, Layouts } from "react-grid-layout";
import { v4 as uuidv4 } from "uuid";

interface CardState {
    cards: Layouts;
}

const initialState: CardState = {
    cards: {
        lg: Array.from({ length: 3 }, (_, i) => ({
            i: uuidv4(),
            x: (i * 4) % 12,
            y: i % 3,
            w: 4,
            h: 2,
        })),
    },
};

export const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        setCards: (state, action: PayloadAction<Layouts>) => {
            state.cards = action.payload;
        },
        addCard: (state, action: PayloadAction<{ breakpoint: string; layout: Layout }>) => {
            state.cards[action.payload.breakpoint].push(action.payload.layout);
        },
        removeCard: (state, action: PayloadAction<{ breakpoint: string; id: string }>) => {
            state.cards[action.payload.breakpoint] = state.cards[action.payload.breakpoint].filter(
                (card) => card.i !== action.payload.id
            );
        },
    },
});

export const { setCards, addCard, removeCard } = cardSlice.actions;
export default cardSlice.reducer;
