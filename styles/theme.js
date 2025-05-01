import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Inter, sans-serif',
  },
  colors: {
    primary: {
      50: '#E6F6FF',
      100: '#BAE3FF',
      500: '#2B6CB0',
      600: '#2C5282',
      700: '#2A4365',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
        _dark: {
          bg: 'gray.800',
          color: 'white',
        },
      },
    },
  },
})

export default theme 