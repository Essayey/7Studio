import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { api } from '@/shared/api/api.common'
import { type StateSchema } from './stateSchema'
import { infoListReducer } from '@/entities/InfoList'

export function createStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        [api.reducerPath]: api.reducer,
        infoList: infoListReducer
    }

    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false
        }).concat(api.middleware)
    })
}

type AppDispatch = ReturnType<typeof createStore>['dispatch']
export const useAppDispatch: () => AppDispatch = useDispatch
