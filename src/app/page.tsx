import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Expertise from '../components/Expertise'
import Projets from '../components/Projets'
import APropos from '../components/APropos'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main style={{minHeight: '100vh', backgroundColor: '#0a0a0a'}}>
      <Navbar />
      <Hero />
      <Expertise />
      <Projets />
      <APropos />
      <Blog />
      <Contact />
    </main>
  )
}