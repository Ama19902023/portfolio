'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur border-b border-[#222]' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-[#00ff88] font-bold text-xl">
          AM<span className="text-white">.</span>
        </a>
        <div className="flex gap-8 text-sm">
          <a href="#projets" className="text-gray-400 hover:text-[#00ff88] transition-colors">Projets</a>
          <a href="#apropos" className="text-gray-400 hover:text-[#00ff88] transition-colors">A Propos</a>
          <a href="#blog" className="text-gray-400 hover:text-[#00ff88] transition-colors">Blog</a>
          <a href="#contact" className="text-gray-400 hover:text-[#00ff88] transition-colors">Contact</a>
        </div>
        
          href="mailto:aminemeddour90@gmail.com"
          className="bg-[#00ff88] text-black text-sm font-bold px-4 py-2 rounded-lg hover:bg-[#00cc66] transition-colors"
        >
          Me contacter
        </a>
      </div>
    </nav>
  )
}