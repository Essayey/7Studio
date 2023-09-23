import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type InfoListSchema } from '../types/infoListTypes'

const initialState: InfoListSchema = {
    currentListId: 62533
}

const InfoListSlice = createSlice({
    name: 'InfoList',
    initialState,
    reducers: {
        setCurrentListId(state, action: PayloadAction<{ id: number }>) {
            state.currentListId = action.payload.id
        }
    }

})

export const infoListReducer = InfoListSlice.reducer
export const infoListActions = InfoListSlice.actions
