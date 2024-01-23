'use client'

import { grey, yellow } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: yellow,
    action: {
      disabledBackground: grey[700],
      disabled: grey[400],
    },
  },
  typography: {
    fontSize: 12,
  },
})

export default theme
