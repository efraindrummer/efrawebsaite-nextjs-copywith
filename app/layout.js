import { Inter } from 'next/font/google'
import { Providers } from './providers'

const SITE_URL = 'https://efrainmay.dev'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const OG_DESCRIPTION =
  'Portafolio de Efrain May, Ingeniero en Computación con +4 años de experiencia en desarrollo Full Stack, Mobile (Flutter), Cloud Computing y DevOps.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Efrain May — Ingeniero de Software',
    template: '%s | Efrain May',
  },
  description: OG_DESCRIPTION,
  keywords: [
    'Efrain May',
    'Ingeniero de Software',
    'Full Stack Developer',
    'Flutter Developer',
    'Node.js',
    'Next.js',
    'React',
    'Mobile Developer',
    'Cloud Computing',
    'DevOps',
    'México',
    'portafolio',
  ],
  authors: [{ name: 'Efrain May', url: SITE_URL }],
  creator: 'Efrain May',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: SITE_URL,
    siteName: 'Efrain May',
    title: 'Efrain May — Ingeniero de Software',
    description: OG_DESCRIPTION,
    images: [
      {
        url: '/images/efraindrummer.jpeg',
        width: 1200,
        height: 630,
        alt: 'Efrain May - Ingeniero de Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Efrain May — Ingeniero de Software',
    description: OG_DESCRIPTION,
    creator: '@efraindrummer7',
    images: ['/images/efraindrummer.jpeg'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: '/images/footprint.png',
    shortcut: '/images/footprint.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Efrain May',
  url: SITE_URL,
  image: `${SITE_URL}/images/efraindrummer.jpeg`,
  jobTitle: 'Ingeniero de Software',
  worksFor: {
    '@type': 'Organization',
    name: 'Dragados Offshore México',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Universidad Autónoma del Carmen',
  },
  knowsAbout: [
    'Flutter',
    'Node.js',
    'React',
    'Next.js',
    'Vue.js',
    'Docker',
    'TypeScript',
    'MySQL',
    'PostgreSQL',
    'Cloud Computing',
  ],
  sameAs: [
    'https://github.com/efraindrummer',
    'https://twitter.com/efraindrummer7',
    'https://www.instagram.com/efraincode/',
    'https://www.facebook.com/Efrain.May/',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+52-938-116-9411',
    email: 'efrain_may_75@hotmail.com',
    contactType: 'professional',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
