import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spanty',
  description: 'Creative Real Estate Agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='bg-brown-30'>
          <Header />
        </div>
        <main className='overflow-x-hidden'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
