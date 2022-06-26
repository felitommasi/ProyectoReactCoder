import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    primary: '#010101',
    secondary: '#04B8FF',
    accent: '#FFC443',
  },
}

export const theme = extendTheme({ colors })