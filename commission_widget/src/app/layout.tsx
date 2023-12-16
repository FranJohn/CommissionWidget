import type { Metadata } from 'next'
import './styles/main.scss'


export const metadata: Metadata = {
  title: 'Commission Dashboard',
  description: 'A dashboard aiming to simplify commission calculations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
