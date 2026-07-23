import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Expertise from '../components/Expertise'
import Projets from '../components/Projets'
import About from '../components/About'
import Services from '../components/Services'
import Newsletter from '../components/Newsletter'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main style={{minHeight: '100vh', backgroundColor: '#0a0a0a'}}>
      <Navbar />
      <Hero />
      <Expertise />
      <Projets />
      <About />
      <Services />
      <Newsletter />
      <Blog />
      <Contact />
    </main>
  )
}
