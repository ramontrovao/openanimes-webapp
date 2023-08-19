import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Header } from '@fragments/Header'

import '@styles/global.css'

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Open Animes',
  description: 'Assista seus animes preferidos gratuitamente',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
