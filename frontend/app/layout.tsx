import type {Metadata} from 'next'
import {Roboto} from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TransitionProvider from '@/components/TransitionProvider'

export const metadata: Metadata = {
  title: 'Impilo Pop',
  description: 'Latest Trends/News/Gossips and Much More',
}

export const roboto = Roboto({
  subsets: ['latin'],
  weight: [
    '100', // Thin
    '300', // Light
    '400', // Regular
    '500', // Medium
    '700', // Bold
    '900', // Black
  ],
  variable: '--font-roboto', // Optional: for CSS variable usage
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased `}>
        <Navbar />
        <TransitionProvider>{children}</TransitionProvider>
        <Footer />
      </body>
    </html>
  )
}
