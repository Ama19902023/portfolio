import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { marked } from 'marked'
import Navbar from '../../../../components/Navbar'

export default async function ArticleFrPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const filePath = path.join(process.cwd(), 'content/blog/fr', slug + '.mdx')
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  const html = marked(content) as string

  return (
    <main style={{minHeight: '100vh', backgroundColor: '#0a0a0a', paddingTop: '80px'}}>
      <Navbar />
      <div style={{padding: '80px 24px 96px'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px'}}>
            <Link href="/fr/blog" style={{color: '#00ff88', textDecoration: 'none', fontSize: '14px'}}>
              Retour au Blog
            </Link>
            <Link href={'/blog/' + slug} style={{color: '#6b7280', textDecoration: 'none', fontSize: '14px', border: '1px solid #333', padding: '6px 16px', borderRadius: '999px'}}>
              Read in EN
            </Link>
          </div>
          <div style={{marginBottom: '48px'}}>
            <div style={{display: 'flex', gap: '12px', marginBottom: '16px'}}>
              <span style={{color: '#6b7280', fontSize: '13px'}}>{data.date}</span>
              <span style={{color: '#6b7280', fontSize: '13px'}}>·</span>
              <span style={{color: '#6b7280', fontSize: '13px'}}>{data.readTime}</span>
            </div>
            <h1 style={{fontSize: '40px', fontWeight: '800', color: 'white', marginBottom: '16px', lineHeight: '1.2'}}>{data.title}</h1>
            <p style={{color: '#6b7280', fontSize: '18px', lineHeight: '1.6', marginBottom: '16px'}}>{data.description}</p>
            <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
              {data.tags && data.tags.map((tag: string) => (
                <span key={tag} style={{fontSize: '11px', padding: '4px 10px', borderRadius: '999px', backgroundColor: '#1a1a1a', color: '#9ca3af', border: '1px solid #222'}}>{tag}</span>
              ))}
            </div>
          </div>
          <article style={{color: '#9ca3af', fontSize: '17px', lineHeight: '1.8'}} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </main>
  )
}
