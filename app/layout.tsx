import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CyprusGO',
  description: 'Created by Calpim',
  generator: 'Calpim',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
