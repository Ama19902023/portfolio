export default function Hero() {
  return (
    <section style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 24px', paddingTop: '80px'}}>
      <div style={{maxWidth: '900px', margin: '0 auto'}}>

        <div style={{display: 'inline-block', backgroundColor: '#111', border: '1px solid #00ff88', color: '#00ff88', fontSize: '13px', padding: '6px 16px', borderRadius: '999px', marginBottom: '32px', letterSpacing: '0.05em'}}>
          Senior Actuary · AI Engineer · Quant Finance
        </div>

        <h1 style={{fontSize: '64px', fontWeight: '800', color: 'white', marginBottom: '24px', lineHeight: '1.1', letterSpacing: '-0.02em'}}>
          Amine Meddour
        </h1>

        <p style={{fontSize: '20px', color: '#9ca3af', marginBottom: '16px', maxWidth: '700px', margin: '0 auto 16px', lineHeight: '1.6'}}>
          I turn complex actuarial problems into AI-powered solutions.
        </p>

        <p style={{fontSize: '16px', color: '#6b7280', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px', lineHeight: '1.7'}}>
          IFRS 17 · Solvency II · LLM Fine-tuning · Algo Trading · ALM
        </p>

        <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '96px'}}>
          <a href="#projects" style={{backgroundColor: '#00ff88', color: 'black', fontWeight: '700', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px'}}>
            View Projects
          </a>
          <a href="#contact" style={{border: '1px solid #00ff88', color: '#00ff88', fontWeight: '700', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px'}}>
            Get in Touch
          </a>
          <a href="/cv-amine-meddour.pdf" style={{border: '1px solid #333', color: '#9ca3af', fontWeight: '700', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px'}}>
            Download CV
          </a>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', maxWidth: '800px', margin: '0 auto'}}>

          <div style={{backgroundColor: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '28px', textAlign: 'left'}}>
            <div style={{color: '#00ff88', fontSize: '13px', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Production-grade expertise</div>
            <p style={{color: '#9ca3af', fontSize: '14px', lineHeight: '1.6'}}>
              Real IFRS 17 and Solvency II implementations — live systems, actual regulatory deadlines, millions of policies.
            </p>
          </div>

          <div style={{backgroundColor: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '28px', textAlign: 'left'}}>
            <div style={{color: '#00ff88', fontSize: '13px', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Global deployment</div>
            <p style={{color: '#9ca3af', fontSize: '14px', lineHeight: '1.6'}}>
              Actuarial frameworks deployed internationally — local regulatory knowledge with cross-border perspective.
            </p>
          </div>

          <div style={{backgroundColor: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '28px', textAlign: 'left'}}>
            <div style={{color: '#00ff88', fontSize: '13px', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em'}}>AI for insurance</div>
            <p style={{color: '#9ca3af', fontSize: '14px', lineHeight: '1.6'}}>
              End-to-end AI solutions — LLM fine-tuning on actuarial data, ML pricing models, automated ALM dashboards.
            </p>
          </div>

          <div style={{backgroundColor: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '28px', textAlign: 'left'}}>
            <div style={{color: '#00ff88', fontSize: '13px', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Knowledge transfer</div>
            <p style={{color: '#9ca3af', fontSize: '14px', lineHeight: '1.6'}}>
              Training the next generation of actuaries at ISFA Lyon — bridging mathematical rigor and modern data science.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
