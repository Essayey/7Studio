import { type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { type DeepPartial } from '@reduxjs/toolkit'
import { createStore } from '../config/store'
import { type StateSchema } from '../config/stateSchema'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props

    const store = createStore(initialState as StateSchema)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
