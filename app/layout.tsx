import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export const metadata: Metadata = {
  title: 'Sarvesh Angadi | Robotics & Computer Vision Engineer',
  description: 'Personal portfolio of Sarvesh Angadi — Robotics & Computer Vision engineer specializing in perception systems, deep learning, and camera calibration.',
  openGraph: {
    title: 'Sarvesh Angadi | Robotics & Computer Vision Engineer',
    description: 'Personal portfolio of Sarvesh Angadi — Robotics & Computer Vision engineer specializing in perception systems, deep learning, and camera calibration.',
    url: 'https://sarveshangadi09.github.io/Portfolio',
    siteName: 'Sarvesh Angadi',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarvesh Angadi | Robotics & Computer Vision Engineer',
    description: 'Robotics & Computer Vision engineer specializing in perception systems, deep learning, and camera calibration.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_inter.variable} ${_jetbrains.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
