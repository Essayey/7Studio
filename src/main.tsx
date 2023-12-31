import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { App, StoreProvider, theme } from './app'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StoreProvider>
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ChakraProvider>
    </StoreProvider>
)
