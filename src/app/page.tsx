python3 << 'EOF'
content = """import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { marked } from 'marked'

function getArticle(slug) {
  const filePath = path.join(process.cwd(), 'content/blog', slug + '.mdx')
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  const html = marked(content)
  return { data, html }
}

export default function ArticlePage({ params }) {
  const { data, html } = getArticle(params.slug)
  
  return (
    <main style={{minHeight: '100vh', backgroundColor: '#0a0a0a', padding: '120px 24px 96px'}}>
      <div style={{maxWidth: '800px', margin: '0 auto'}}>
        
        <Link href="/blog" style={{color: '#00ff88', textDecoration: 'none', fontSize: '14px', display: 'inline-block', marginBottom: '48px'}}>
          Back to Blog
        </Link>

        <div style={{marginBottom: '48px'}}>
          <div style={{display: 'flex', gap: '12px', marginBottom: '16px'}}>
            <span style={{color: '#6b7280', fontSize: '13px'}}>{data.date}</span>
            <span style={{color: '#6b7280', fontSize: '13px'}}>·</span>
            <span style={{color: '#6b7280', fontSize: '13px'}}>{data.readTime}</span>
          </div>
          <h1 style={{fontSize: '40px', fontWeight: '800', color: 'white', marginBottom: '16px', lineHeight: '1.2', letterSpacing: '-0.02em'}}>
            {data.title}
          </h1>
          <p style={{color: '#6b7280', fontSize: '18px', lineHeight: '1.6', marginBottom: '16px'}}>
            {data.description}
          </p>
          <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
            {data.tags && data.tags.map((tag) => (
              <span key={tag} style={{fontSize: '11px', padding: '4px 10px', borderRadius: '999px', backgroundColor: '#1a1a1a', color: '#9ca3af', border: '1px solid #222'}}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <article
          style={{color: '#9ca3af', fontSize: '17px', lineHeight: '1.8'}}
          dangerouslySetInnerHTML={{ __html: html }}
        />

      </div>
    </main>
  )
}
"""

with open("/home/amine/portfolio/src/app/blog/[slug]/page.tsx", "w") as f:
    f.write(content)
print("OK")
EOF