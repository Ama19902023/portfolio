export default function Services() {
  const services = [
    {
      titre: "Actuarial AI Consulting",
      description: "End-to-end support for insurance companies navigating IFRS 17 automation, AI transformation and regulatory compliance.",
      items: [
        "IFRS 17 implementation and automation",
        "LLM fine-tuning on actuarial data",
        "ML pricing and reserving models",
        "Solvency II and SST advisory",
        "ALM and capital modelling"
      ],
      tarif: "From CHF 1,200 / day",
      cta: "Request a proposal",
      highlight: true
    },
    {
      titre: "Training & Workshops",
      description: "Practical training programs for actuarial teams — combining rigorous mathematical foundations with modern AI tools.",
      items: [
        "Python for Actuaries (2 days)",
        "IFRS 17 x AI — from theory to implementation",
        "Machine Learning for Pricing and Reserving",
        "LLM and RAG for Insurance",
        "Algo Trading for Quants"
      ],
      tarif: "From CHF 3,000 / day (corporate)",
      cta: "Book a session",
      highlight: false
    },
    {
      titre: "Technical Review",
      description: "Independent review of actuarial models, ORSA reports and AI systems for regulatory compliance and best practice.",
      items: [
        "Model validation and documentation",
        "ORSA and SCR review",
        "AI model risk assessment",
        "Code and methodology audit",
        "Regulatory compliance check"
      ],
      tarif: "On request",
      cta: "Get in touch",
      highlight: false
    }
  ]

  return (
    <section id="services" style={{padding: '96px 24px', backgroundColor: '#0d0d0d'}}>
      <div style={{maxWidth: '1152px', margin: '0 auto'}}>

        <div style={{textAlign: 'center', marginBottom: '64px'}}>
          <h2 style={{fontSize: '40px', fontWeight: '800', color: 'white', marginBottom: '16px', letterSpacing: '-0.02em'}}>
            Services
          </h2>
          <p style={{color: '#6b7280', fontSize: '18px', maxWidth: '600px', margin: '0 auto'}}>
            Available for consulting missions, corporate training and technical advisory — based in France, open to Swiss and international opportunities.
          </p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '64px'}}>
          {services.map((s) => (
            <div key={s.titre} style={{backgroundColor: s.highlight ? '#0a1a0f' : '#111', border: s.highlight ? '1px solid #00ff88' : '1px solid #1a1a1a', borderRadius: '12px', padding: '32px', display: 'flex', flexDirection: 'column'}}>
              {s.highlight && (
                <div style={{color: '#00ff88', fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px'}}>
                  Most requested
                </div>
              )}
              <h3 style={{color: 'white', fontWeight: '700', fontSize: '20px', marginBottom: '12px'}}>{s.titre}</h3>
              <p style={{color: '#6b7280', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px'}}>{s.description}</p>
              <ul style={{listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px', flexGrow: 1}}>
                {s.items.map((item) => (
                  <li key={item} style={{color: '#9ca3af', fontSize: '14px', display: 'flex', alignItems: 'flex-start', gap: '8px'}}>
                    <span style={{color: '#00ff88', flexShrink: 0}}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{borderTop: '1px solid #1a1a1a', paddingTop: '24px', marginTop: 'auto'}}>
                <div style={{color: '#00ff88', fontWeight: '700', fontSize: '16px', marginBottom: '16px'}}>{s.tarif}</div>
                <a href="#contact" style={{display: 'block', textAlign: 'center', backgroundColor: s.highlight ? '#00ff88' : 'transparent', color: s.highlight ? 'black' : '#00ff88', border: '1px solid #00ff88', fontWeight: '700', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px'}}>
                  {s.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{backgroundColor: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '48px', textAlign: 'center'}}>
          <h3 style={{color: 'white', fontWeight: '700', fontSize: '24px', marginBottom: '16px'}}>
            Open to full-time opportunities in Switzerland
          </h3>
          <p style={{color: '#6b7280', fontSize: '16px', maxWidth: '600px', margin: '0 auto 32px', lineHeight: '1.7'}}>
            Senior Actuary roles in Zurich or Geneva — IFRS 17, Solvency II, SST, AI transformation.
            Swiss Re, Zurich Insurance, AXA, Generali and similar.
          </p>
          <a href="mailto:aminemeddour90@gmail.com" style={{backgroundColor: '#00ff88', color: 'black', fontWeight: '700', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px'}}>
            Contact me
          </a>
        </div>

      </div>
    </section>
  )
}
