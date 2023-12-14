'use client'

import React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

const ThemeProvider = ({children}) => {
  return (
    <NextThemesProvider >
        {children}
    </NextThemesProvider>
  )
}

export default ThemeProvider
