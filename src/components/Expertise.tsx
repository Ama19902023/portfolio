export default function Expertise() {
  const domaines = [
    {
      icon: "📊",
      titre: "IFRS 17 & Solvency II",
      description: "Operational experience — not just theory. BBA, PAA, VFA, SCR, ORSA, SST.",
      tags: ["IFRS 17", "Solvency II", "SCR", "ORSA", "SST"]
    },
    {
      icon: "🤖",
      titre: "AI & LLM for Insurance",
      description: "From fine-tuning to production deployment. LangChain, RAG, Mistral, LLaMA.",
      tags: ["LLM", "LangChain", "RAG", "Fine-tuning", "CUDA"]
    },
    {
      icon: "📈",
      titre: "Pricing & Reserving",
      description: "GLM to ML — non-life and life. Chain-Ladder, LightGBM, XGBoost.",
      tags: ["GLM", "LightGBM", "Chain-Ladder", "IBNR", "BF"]
    },
    {
      icon: "⚖️",
      titre: "ALM & Quant Finance",
      description: "Duration, ESG, algo trading. CIR, Hull-White, Walk-Forward Backtest.",
      tags: ["ALM", "Duration", "ESG", "Trading Algo", "VaR"]
    },
    {
      icon: "⚙️",
      titre: "Data Engineering",
      description: "From raw data to actuarial insights. Python, SAS, Azure, Spark, dbt.",
      tags: ["Python", "SAS", "Azure", "Spark", "dbt"]
    },
    {
      icon: "🎓",
      titre: "Teaching & Training",
      description: "Training the next generation of actuaries at ISFA Lyon.",
      tags: ["Python", "Statistics", "Probability", "ISFA", "Actuarial"]
    }
  ]

  return (
    <section id="expertise" style={{padding: '96px 24px', backgroundColor: '#0d0d0d'}}>
      <div style={{maxWidth: '1152px', margin: '0 auto'}}>

        <div style={{textAlign: 'center', marginBottom: '64px'}}>
          <h2 style={{fontSize: '40px', fontWeight: '800', color: 'white', marginBottom: '16px', letterSpacing: '-0.02em'}}>
            Areas of Expertise
          </h2>
          <p style={{color: '#6b7280', fontSize: '18px', maxWidth: '600px', margin: '0 auto'}}>
            Where actuarial science meets data engineering and artificial intelligence.
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
