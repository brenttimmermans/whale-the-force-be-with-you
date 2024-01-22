import StoreProvider from '@/app/StoreProvider'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header/Header'
import MyTeamBar from './components/MyTeamBar/MyTeamBar'
import './globals.css'

import '@/app/styles/normalize.css'
import { Container } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
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
