import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Amine Meddour — Senior Actuary | AI | IFRS 17 | Solvency II',
    template: '%s | Amine Meddour'
  },
  description: 'Senior Actuary with 11 years of production experience in IFRS 17, Solvency II and ALM. Building AI solutions for insurance — LLM fine-tuning, ML pricing, ALM dashboards. Open to Swiss opportunities.',
  keywords: [
    'actuary', 'actuaire', 'IFRS 17', 'Solvency II', 'SST', 'Swiss Solvency Test',
    'ALM', 'asset liability management', 'AI insurance', 'LLM fine-tuning',
    'machine learning pricing', 'BNP Paribas Cardif', 'ISFA Lyon',
    'senior actuary Switzerland', 'actuaire senior Suisse',
    'capital modelling', 'SCR', 'MCR', 'ORSA', 'reserving', 'pricing'
  ],
  authors: [{ name: 'Amine Meddour', url: 'https://portfolio-puce-ten-fi31ajkpit.vercel.app' }],
  creator: 'Amine Meddour',
  verification: {
    google: 'u8sTQrKRJgefKVRiTvoNJyuu-VxXx-yhT195w9rHoNc'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-puce-ten-fi31ajkpit.vercel.app',
    siteName: 'Amine Meddour',
    title: 'Amine Meddour — Senior Actuary | AI | IFRS 17 | Solvency II',
    description: 'Senior Actuary with 11 years of production experience. Building AI solutions for insurance. Open to Swiss opportunities.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amine Meddour — Senior Actuary | AI | IFRS 17',
    description: 'Senior Actuary building AI solutions for insurance. IFRS 17, Solvency II, ALM, LLM fine-tuning.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
