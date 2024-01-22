import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import '@/app/styles/normalize.css'

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
