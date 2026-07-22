import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function BlogPage() {
  const blogDir = path.join(process.cwd(), 'content/blog')
  const files = fs.readdirSync(blogDir)
  
  const articles = files.map((filename) => {
    const filePath = path.join(blogDir, filename)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContent)
    return { slug: filename.replace('.mdx', ''), ...data }
  })
  
  return (
    <main style={{minHeight: '100vh', backgroundColor: '#0a0a0a', padding: '120px 24px 96px'}}>
      <div style={{maxWidth: '800px', margin: '0 auto'}}>
        <h1 style={{fontSize: '48px', fontWeight: '800', color: 'white', marginBottom: '16px'}}>Blog</h1>
        <p style={{color: '#6b7280', fontSize: '18px', marginBottom: '48px'}}>Practical insights on actuarial science, AI and quantitative finance.</p>
        <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
          {articles.map((article: any) => (
            <Link key={article.slug} href={'/blog/' + article.slug} style={{textDecoration: 'none'}}>
              <div style={{backgroundColor: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '32px'}}>
                <div style={{display: 'flex', gap: '12px', marginBottom: '12px'}}>
                  <span style={{color: '#6b7280', fontSize: '13px'}}>{article.date}</span>
                  <span style={{color: '#6b7280', fontSize: '13px'}}>·</span>
                  <span style={{color: '#6b7280', fontSize: '13px'}}>{article.readTime}</span>
                </div>
                <h2 style={{color: 'white', fontWeight: '700', fontSize: '20px', marginBottom: '12px'}}>{article.title}</h2>
                <p style={{color: '#6b7280', fontSize: '15px', lineHeight: '1.6', marginBottom: '16px'}}>{article.description}</p>
                <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
                  {article.tags && article.tags.map((tag: string) => (
                    <span key={tag} style={{fontSize: '11px', padding: '4px 10px', borderRadius: '999px', backgroundColor: '#1a1a1a', color: '#9ca3af', border: '1px solid #222'}}>{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
