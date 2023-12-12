'use client'

import { QueryClientProvider,QueryClient } from "@tanstack/react-query";
import { Provider } from 'react-redux'
import store from '@/utils/store/store'

const queryclient = new QueryClient()

export default function Queryclientprovider({children}){
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryclient}>
                {children}
            </QueryClientProvider>
        </Provider>
    )
}