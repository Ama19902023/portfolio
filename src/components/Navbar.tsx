export default function Navbar() {
  return (
    <nav style={{position: 'fixed', top: 0, width: '100%', zIndex: 50, backgroundColor: '#0a0a0a', borderBottom: '1px solid #111'}}>
      <div style={{maxWidth: '1152px', margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <a href="/" style={{color: '#00ff88', fontWeight: '800', fontSize: '20px', textDecoration: 'none', letterSpacing: '-0.02em'}}>
          AM<span style={{color: 'white'}}>.</span>
        </a>
        <div style={{display: 'flex', gap: '32px', fontSize: '14px'}}>
          <a href="#expertise" style={{color: '#6b7280', textDecoration: 'none'}}>Expertise</a>
          <a href="/projects" style={{color: '#6b7280', textDecoration: 'none'}}>Projects</a>
          <a href="/blog" style={{color: '#6b7280', textDecoration: 'none'}}>Blog</a>
          <a href="/newsletter" style={{color: '#6b7280', textDecoration: 'none'}}>Newsletter</a>
          <a href="#services" style={{color: '#6b7280', textDecoration: 'none'}}>Services</a>
          <a href="#contact" style={{color: '#6b7280', textDecoration: 'none'}}>Contact</a>
        </div>
        <div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
          <a href="/blog" style={{color: '#6b7280', textDecoration: 'none', fontSize: '13px', fontWeight: '600'}}>EN</a>
          <span style={{color: '#333'}}>|</span>
          <a href="/fr/blog" style={{color: '#6b7280', textDecoration: 'none', fontSize: '13px', fontWeight: '600'}}>FR</a>
          <a href="mailto:aminemeddour90@gmail.com" style={{backgroundColor: '#00ff88', color: 'black', fontSize: '14px', fontWeight: '700', padding: '8px 20px', borderRadius: '8px', textDecoration: 'none', marginLeft: '8px'}}>
            Hire me
          </a>
        </div>
      </div>
    </nav>
  )
}
