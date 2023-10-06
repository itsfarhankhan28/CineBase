'use client'

import { QueryClientProvider,QueryClient } from "@tanstack/react-query";

const queryclient = new QueryClient()

export default function Queryclientprovider({children}){
    return (
        <QueryClientProvider client={queryclient}>
            {children}
        </QueryClientProvider>
    )
}