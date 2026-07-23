import Navbar from '../../components/Navbar'
import HeroFr from '../../components/HeroFr'
import ExpertiseFr from '../../components/ExpertiseFr'
import Projets from '../../components/Projets'
import About from '../../components/About'
import ServicesFr from '../../components/ServicesFr'
import NewsletterFr from '../../components/NewsletterFr'
import Blog from '../../components/Blog'
import Contact from '../../components/Contact'

export default function HomeFr() {
  return (
    <main style={{minHeight: '100vh', backgroundColor: '#0a0a0a'}}>
      <Navbar />
      <HeroFr />
      <ExpertiseFr />
      <Projets />
      <About />
      <ServicesFr />
      <NewsletterFr />
      <Blog />
      <Contact />
    </main>
  )
}
