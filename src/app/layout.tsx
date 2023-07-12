import './globals.css'
import type { Metadata } from 'next'
import { Epilogue } from 'next/font/google'

const epilogue = Epilogue({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-epilogue' })

export const metadata: Metadata = {
  title: 'Snap',
  description: 'Make remote work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${epilogue.variable} font-sans text-lg text-neutral-gray `}>{children}</body>
    </html>
  )
}
