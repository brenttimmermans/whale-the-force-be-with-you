import StoreProvider from '@/app/StoreProvider'
import { Container } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import type { Metadata } from 'next'
import Header from './components/Header/Header'
import MyTeamBar from './components/MyTeamBar/MyTeamBar'
import './globals.css'

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
        <StoreProvider>
          <AppRouterCacheProvider>
            <Container>
              <Header />
              <main>{children}</main>
            </Container>
            <MyTeamBar />
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
