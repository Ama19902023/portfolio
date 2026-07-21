import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amine Meddour - Actuaire Senior | IA | Finance',
  description: 'Actuaire Senior avec 11 ans experience - IFRS 17, Solvency II, ALM. Projets IA : LLM fine-tune, Trading Algo, Dashboard ALM. Enseignant Python a lISFA.',
  keywords: ['actuaire', 'IFRS 17', 'Solvency II', 'ALM', 'intelligence artificielle', 'LLM', 'trading algo', 'data science'],
  authors: [{ name: 'Amine Meddour' }],
  openGraph: {
    title: 'Amine Meddour - Actuaire Senior | IA | Finance',
    description: 'Actuaire Senior - IFRS 17, Solvency II, ALM, IA',
    url: 'https://portfolio-puce-ten-fi31ajkpit.vercel.app',
    siteName: 'Amine Meddour Portfolio',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}