export default function Hero() {
  return (
    <section style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 24px', paddingTop: '80px'}}>
      <div style={{maxWidth: '900px', margin: '0 auto'}}>

        <div style={{display: 'inline-block', backgroundColor: '#111', border: '1px solid #00ff88', color: '#00ff88', fontSize: '13px', padding: '6px 16px', borderRadius: '999px', marginBottom: '32px', letterSpacing: '0.05em'}}>
          Actuaire Senior · Ingénieur AI · Finance Quant
        </div>

        <h1 style={{fontSize: '64px', fontWeight: '800', color: 'white', marginBottom: '24px', lineHeight: '1.1', letterSpacing: '-0.02em'}}>
          Amine Meddour
        </h1>

        <p style={{fontSize: '20px', color: '#9ca3af', marginBottom: '16px', maxWidth: '700px', margin: '0 auto 16px', lineHeight: '1.6'}}>
          Je transforme les problèmes actuariels complexes en solutions alimentées par l'IA.
        </p>

        <p style={{fontSize: '16px', color: '#6b7280', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px', lineHeight: '1.7'}}>
          IFRS 17 · Solvabilité II · Amélioration de modèles de langage large (LLM) · Algo Trading · Gestion de la trésorerie d'actif et de passif (ALM)
        </p>

        <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '96px'}}>
          <a href="#projets" style={{backgroundColor: '#00ff88', color: 'black', fontWeight: '700', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px'}}>
            Voir les projets
          </a>
          <a href="#contact" style={{border: '1px solid #00ff88', color: '#00ff88', fontWeight: '700', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px'}}>
            Prendre contact
          </a>
          <a href="/cv-amine-meddour.pdf" style={{border: '1px solid #333', color: '#9ca3af', fontWeight: '700', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px'}}>
            Télécharger CV
          </a>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', maxWidth: '800px', margin: '0 auto'}}>

          <div style={{backgroundColor: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '28px', textAlign: 'left'}}>
            <div style={{color: '#00ff88', fontSize: '13px', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Expérience de production</div>
            <p style={{color: '#9ca3af', fontSize: '14px', lineHeight: '1.6'}}>
              Mises en œuvre réelles d'IFRS 17 et de Solvabilité II — systèmes en ligne, échéances réglementaires réelles, millions de polices.
            </p>
          </div>

          <div style={{backgroundColor: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '28px', textAlign: 'left'}}>
            <div style={{color: '#00ff88', fontSize: '13px', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Déploiement mondial</div>
            <p style={{color: '#9ca3af', fontSize: '14px', lineHeight: '1.6'}}>
              Cadres actuariels déployés internationalement — connaissance locale réglementaire avec perspective transfrontalière.
            </p>
          </div>

          <div style={{backgroundColor: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '28px', textAlign: 'left'}}>
            <div style={{color: '#00ff88', fontSize: '13px', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em'}}>IA pour l'assurance</div>
            <p style={{color: '#9ca3af', fontSize: '14px', lineHeight: '1.6'}}>
              Solutions de fin à fin alimentées par l'IA — amélioration de modèles de langage large (LLM) sur données actuarielles, modèles de prix ML, tableaux de bord automatisés d'ALM.
            </p>
          </div>

          <div style={{backgroundColor: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '28px', textAlign: 'left'}}>
            <div style={{color: '#00ff88', fontSize: '13px', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Transfert de connaissances</div>
            <p style={{color: '#9ca3af', fontSize: '14px', lineHeight: '1.6'}}>
              Formation de la prochaine génération d'actuaires à Sorbonne Paris 1, ESILV, IUT de Paris — passage entre rigueur mathématique et données modernes.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}