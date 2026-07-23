import Newsletter from '../../components/Newsletter'
import Navbar from '../../components/Navbar'

export default function NewsletterPage() {
  return (
    <main style={{minHeight: '100vh', backgroundColor: '#0a0a0a', paddingTop: '80px'}}>
      <Navbar />
      <Newsletter />
    </main>
  )
}
