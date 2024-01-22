'use client'

import { yellow } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: yellow,
  },
  typography: {
    fontSize: 12,
  },
})

export default theme
