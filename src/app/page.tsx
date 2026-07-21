import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projets from '../components/Projets'
import APropos from '../components/APropos'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Projets />
      <APropos />
      <Blog />
      <Contact />
    </main>
  )
}