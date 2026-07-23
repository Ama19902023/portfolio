export default function ExpertiseFr() {
  const domaines = [
    {
      icon: "📊",
      titre: "IFRS 17 & Solvabilité II",
      description: "Expérience opérationnelle — pas seulement la théorie. BBA, PAA, VFA, SCR, ORSA, SST.",
      tags: ["IFRS 17", "Solvency II", "SCR", "ORSA", "SST"]
    },
    {
      icon: "🤖",
      titre: "IA & LLM pour l'Assurance",
      description: "Du fine-tuning au déploiement en production. LangChain, RAG, Mistral, LLaMA.",
      tags: ["LLM", "LangChain", "RAG", "Fine-tuning", "CUDA"]
    },
    {
      icon: "📈",
      titre: "Tarification & Provisionnement",
      description: "Du GLM au ML — vie et non-vie. Chain-Ladder, LightGBM, XGBoost.",
      tags: ["GLM", "LightGBM", "Chain-Ladder", "IBNR", "BF"]
    },
    {
      icon: "⚖️",
      titre: "ALM & Finance Quantitative",
      description: "Duration, ESG, trading algo. CIR, Hull-White, Walk-Forward Backtest.",
      tags: ["ALM", "Duration", "ESG", "Trading Algo", "VaR"]
    },
    {
      icon: "⚙️",
      titre: "Ingénierie des Données",
      description: "De la donnée brute aux insights actuariels. Python, SAS, Azure, Spark, dbt.",
      tags: ["Python", "SAS", "Azure", "Spark", "dbt"]
    },
    {
      icon: "🎓",
      titre: "Enseignement & Formation",
      description: "Former la prochaine génération d'actuaires à la Sorbonne Paris 1, ESILV et IUT de Paris.",
      tags: ["Python", "Statistics", "Probability", "ISFA", "Actuarial"]
    }
  ]

  return (
    <section id="expertise" style={{padding: '96px 24px', backgroundColor: '#0d0d0d'}}>
      <div style={{maxWidth: '1152px', margin: '0 auto'}}>

        <div style={{textAlign: 'center', marginBottom: '64px'}}>
          <h2 style={{fontSize: '40px', fontWeight: '800', color: 'white', marginBottom: '16px', letterSpacing: '-0.02em'}}>
            Domaines d'expertise
          </h2>
          <p style={{color: '#6b7280', fontSize: '18px', maxWidth: '600px', margin: '0 auto'}}>
            A l'intersection de l'actuariat, de l'ingénierie des données et de l'intelligence artificielle.
          </p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px'}}>
          {domaines.map((d) => (
            <div key={d.titre} style={{backgroundColor: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '32px'}}>
              <div style={{fontSize: '32px', marginBottom: '16px'}}>{d.icon}</div>
              <h3 style={{color: 'white', fontWeight: '700', fontSize: '18px', marginBottom: '12px'}}>{d.titre}</h3>
              <p style={{color: '#6b7280', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px'}}>{d.description}</p>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                {d.tags.map((tag) => (
                  <span key={tag} style={{fontSize: '11px', padding: '4px 10px', borderRadius: '999px', backgroundColor: '#1a1a1a', color: '#9ca3af', border: '1px solid #222'}}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
