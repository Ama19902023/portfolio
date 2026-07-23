export default function Services() {
  const services = [
    {
      titre: "Consultation en IA actuarielle",
      description: "Appui complet pour les sociétés d'assurance naviguant l'automatisation de IFRS 17, la transformation par l'IA et le respect des normes réglementaires.",
      items: [
        "Implémentation et automatisation de IFRS 17",
        "Finition fine-tuning de LLM sur données actuarielles",
        "Modèles ML de tarification et de réserve",
        "Conseils pour la Solvabilité II et SST",
        "Modélisation d'ALM et de capital"
      ],
      tarif: "De CHF 1,200 / jour",
      cta: "Demander une proposition",
      highlight: true
    },
    {
      titre: "Formation & Ateliers",
      description: "Programmes de formation pratiques pour les équipes actuarielles — combinant des fondements mathématiques rigoureux avec des outils modernes d'IA.",
      items: [
        "Python pour Actuaires (2 jours)",
        "IFRS 17 x IA — du théorique à l'implémentable",
        "Apprentissage automatique pour la tarification et la réserve",
        "LLM et RAG pour l'assurance",
        "Trading algorythmique pour les quants"
      ],
      tarif: "De CHF 3,000 / jour (corporatif)",
      cta: "Réservation d'une session",
      highlight: false
    },
    {
      titre: "Révision technique",
      description: "Révision indépendante des modèles actuariels, des rapports ORSA et des systèmes IA pour le respect des normes réglementaires et les meilleures pratiques.",
      items: [
        "Validation et documentation de modèles",
        "Révision d'ORSA et de SCR",
        "Évaluation du risque des modèles AI",
        "Audit de code et de méthodeologique",
        "Vérification du respect des normes réglementaires"
      ],
      tarif: "Sur demande",
      cta: "Prendre contact",
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
            Disponibles pour les missions de consulting, la formation corporative et l'expertise technique — basé en France, ouvert aux opportunités suisses et internationales.
          </p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '64px'}}>
          {services.map((s) => (
            <div key={s.titre} style={{backgroundColor: s.highlight ? '#0a1a0f' : '#111', border: s.highlight ? '1px solid #00ff88' : '1px solid #1a1a1a', borderRadius: '12px', padding: '32px', display: 'flex', flexDirection: 'column'}}>
              {s.highlight && (
                <div style={{color: '#00ff88', fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px'}}>
                  Demande la plus fréquente
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
            Ouvert à des opportunités de travail plein temps en Suisse
          </h3>
          <p style={{color: '#6b7280', fontSize: '16px', maxWidth: '600px', margin: '0 auto 32px', lineHeight: '1.7'}}>
            Rôles d'actuaire senior à Zurich ou Genève — IFRS 17, Solvabilité II, SST, transformation par l'IA.
            Swiss Re, Zurich Insurance, AXA, Generali et similaires.
          </p>
          <a href="mailto:aminemeddour90@gmail.com" style={{backgroundColor: '#00ff88', color: 'black', fontWeight: '700', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px'}}>
            Me contacter
          </a>
        </div>

      </div>
    </section>
  )
}