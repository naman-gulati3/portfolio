import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"

const roboto = Roboto({ subsets: ['latin'],  weight: "500"});

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.png',
  },
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
      <body className={roboto.className}>
        {children}
        <Analytics/>
      </body>
    </html>
  )
}
