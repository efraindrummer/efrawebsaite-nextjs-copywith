import { Inter } from 'next/font/google'
import { Providers } from './providers'

const SITE_URL = 'https://efradeveloper.lat/'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const OG_DESCRIPTION =
  'Portafolio de Efraín May — Ingeniero de Software, Maestrante en TI Emergentes, Especialista en Inteligencia Artificial (Agentic Patterns & MCP), Desarrollo Web, Mobile (Flutter), ERP, Sistemas de Facturación y Project Manager Certificado.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Efraín May — Ingeniero de Software, Especialista en IA & Project Manager',
    template: '%s | Efraín May',
  },
  description: OG_DESCRIPTION,
  keywords: [
    'Efraín May',
    'Efrain May',
    'Ingeniero de Software',
    'Software Engineer',
    'Artificial Intelligence',
    'Agentic Patterns',
    'Model Context Protocol',
    'MCP',
    'Full Stack Developer',
    'Flutter Developer',
    'Node.js',
    'Next.js',
    'React',
    'ERP Developer',
    'Sistemas de Facturación',
    'Project Manager',
    'Scrum Master',
    'Consultoría TI',
    'México',
  ],
  authors: [{ name: 'Efraín May', url: SITE_URL }],
  creator: 'Efraín May',
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
    siteName: 'Efraín May',
    title: 'Efraín May — Ingeniero de Software, Especialista en IA & Project Manager',
    description: OG_DESCRIPTION,
    images: [
      {
        url: '/images/google_dev/principalgdg.jpg',
        width: 1200,
        height: 630,
        alt: 'Efraín May - Ingeniero de Software & Speaker GDG 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Efraín May — Ingeniero de Software, Especialista en IA & Project Manager',
    description: OG_DESCRIPTION,
    creator: '@efraindrummer7',
    images: ['/images/google_dev/principalgdg.jpg'],
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
  name: 'Efraín May',
  url: SITE_URL,
  image: `${SITE_URL}/images/google_dev/principalgdg.jpg`,
  jobTitle: 'Ingeniero de Software, Especialista en IA & Consultor TI',
  worksFor: {
    '@type': 'Organization',
    name: 'Dragados Offshore México',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Universidad Autónoma del Carmen',
  },
  knowsAbout: [
    'Artificial Intelligence',
    'Agentic Patterns',
    'Model Context Protocol (MCP)',
    'Flutter',
    'Node.js',
    'React',
    'Next.js',
    'Vue.js',
    'ERP Systems',
    'Electronic Billing Integrations',
    'Project Management',
    'Docker',
    'TypeScript',
    'MySQL',
    'PostgreSQL',
    'SQL Server',
    'Cloud Computing',
  ],
  sameAs: [
    'https://www.linkedin.com/in/efraindev/',
    'https://www.youtube.com/@Efra%C3%ADnMay/videos',
    'https://www.instagram.com/efraincode/',
    'https://www.facebook.com/Efrain.May/',
    'https://github.com/efraindrummer',
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
