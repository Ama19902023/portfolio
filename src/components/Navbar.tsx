'use client'

export default function Navbar() {
  return (
    <nav style={{position: 'fixed', top: 0, width: '100%', zIndex: 50, backgroundColor: '#0a0a0a', borderBottom: '1px solid #222'}}>
      <div style={{maxWidth: '1152px', margin: '0 auto', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <a href="/" style={{color: '#00ff88', fontWeight: 'bold', fontSize: '20px', textDecoration: 'none'}}>
          AM<span style={{color: 'white'}}>.</span>
        </a>
        <div style={{display: 'flex', gap: '32px', fontSize: '14px'}}>
          <a href="#projets" style={{color: '#9ca3af', textDecoration: 'none'}}>Projets</a>
          <a href="#apropos" style={{color: '#9ca3af', textDecoration: 'none'}}>A Propos</a>
          <a href="#blog" style={{color: '#9ca3af', textDecoration: 'none'}}>Blog</a>
          <a href="#contact" style={{color: '#9ca3af', textDecoration: 'none'}}>Contact</a>
        </div>
        <a href="mailto:aminemeddour90@gmail.com" style={{backgroundColor: '#00ff88', color: 'black', fontSize: '14px', fontWeight: 'bold', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>
          Me contacter
        </a>
      </div>
    </nav>
  )
}