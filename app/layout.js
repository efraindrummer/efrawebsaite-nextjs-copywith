import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: {
    default: 'Efrain May - Homepage',
    template: '%s - Efrain May',
  },
  description: 'Ingeniero de Software - Portafolio profesional',
  icons: { icon: '/images/footprint.png' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
