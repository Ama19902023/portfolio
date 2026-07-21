'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClass = scrolled
    ? 'fixed top-0 w-full z-50 bg-black/95 backdrop-blur border-b border-gray-800 transition-all duration-300'
    : 'fixed top-0 w-full z-50 bg-transparent transition-all duration-300'

  return (
    <nav className={navClass}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-green-400 font-bold text-xl">
          AM<span className="text-white">.</span>
        </a>
        <div className="flex gap-8 text-sm">
          <a href="#projets" className="text-gray-400 hover:text-green-400 transition-colors">Projets</a>
          <a href="#apropos" className="text-gray-400 hover:text-green-400 transition-colors">A Propos</a>
          <a href="#blog" className="text-gray-400 hover:text-green-400 transition-colors">Blog</a>
          <a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors">Contact</a>
        </div>
        
          href="mailto:aminemeddour90@gmail.com"
          className="bg-green-400 text-black text-sm font-bold px-4 py-2 rounded-lg hover:bg-green-500 transition-colors"
        >
          Me contacter
        </a>
      </div>
    </nav>
  )
}