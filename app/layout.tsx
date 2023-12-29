import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './footer/page'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Naman Gulati portfolio',
  description: 'Portfolio website of Naman Gulati',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}</body>
    </html>
  )
}
