import '@/app/styles/normalize.css'

import StoreProvider from '@/app/StoreProvider'
import Header from '@/app/components/Header/Header'
import MyTeamBar from '@/app/components/MyTeamBar/MyTeamBar'
import '@/app/globals.css'
import theme from '@/app/styles/theme'
import '@/app/styles/variables.css'
import { Container } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'whale-the-force-be-with-you',
  description: 'Whale.io Star Wars themed code test 🐳',
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
