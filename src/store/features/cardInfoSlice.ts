import { DataProvider  } from '@/types/DataProviderTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CardInfoState {
  title: string,
  description: string,
  dataProvider: DataProvider[] | void[] //TODO type this
}


export interface CardInfosState {
  [key: string]: CardInfoState
}

const initialState: CardInfosState = {
    ["new_card"] : {
        title: "New Card",
        description: "Add a description",
        dataProvider: []
    }
}

const cardInfoSlice = createSlice({
  name: "cardInfo",
  initialState,
  reducers: {
    addCardInfo: (state, action: PayloadAction<{id:string}>) => {
        state[action.payload.id] = state[action.payload.id] ?? initialState["new_card"];
    },
    removeCardInfo: (state, action: PayloadAction<{id:string}>) => {
        delete state[action.payload.id]
    },
    setCardInfo: (state, action: PayloadAction<{id:string, cardInfo: CardInfoState}>) => { 
        state[action.payload.id] = action.payload.cardInfo;
    },
    updateTitle: (state, action: PayloadAction<{id:string, title: string}>) => {
        state[action.payload.id].title = action.payload.title;
    },
    updateDescription: (state, action: PayloadAction<{id:string, description: string}>) => {
        state[action.payload.id].description = action.payload.description;
    },
    updateProvider: (state, action: PayloadAction<{id:string, dataProvider: DataProvider[] | void[]}>) =>{    
        state[action.payload.id].dataProvider = action.payload.dataProvider;
    }
  }
});

export const {addCardInfo, removeCardInfo, setCardInfo, updateTitle, updateDescription, updateProvider} = cardInfoSlice.actions

export default cardInfoSlice.reducer