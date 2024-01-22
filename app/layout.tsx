import StoreProvider from '@/app/StoreProvider'
import { Container } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import type { Metadata } from 'next'
import Header from './components/Header/Header'
import MyTeamBar from './components/MyTeamBar/MyTeamBar'
import './globals.css'
import theme from './styles/theme'

import '@/app/styles/normalize.css'

export const metadata: Metadata = {
  title: 'whale-code-test',
  description: 'Whale.io code test',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <StoreProvider>
            <AppRouterCacheProvider>
              <Container maxWidth="md">
                <Header />
                <main>{children}</main>
              </Container>
              <MyTeamBar />
            </AppRouterCacheProvider>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
