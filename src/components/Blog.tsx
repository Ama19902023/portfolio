'use client'

const articles = [
  {
    titre: 'Fine-tuning Mistral 7B sur donnees actuarielles IFRS 17',
    date: 'Juillet 2026',
    description: 'Comment j ai fine-tune Mistral 7B avec LoRA sur 190 exemples actuariels pour creer le premier LLM specialise IFRS 17/SII.',
    tags: ['LLM', 'LoRA', 'IFRS 17'],
    lien: 'https://github.com/Ama19902023/llm-actuariel',
  },
  {
    titre: 'Dashboard ALM temps reel avec Solvency II',
    date: 'Juillet 2026',
    description: 'Construction d un dashboard ALM interactif calculant le SCR Market, la duration gap et les sensibilites aux chocs de taux.',
    tags: ['ALM', 'Solvency II', 'Streamlit'],
    lien: 'https://github.com/Ama19902023/dashboard-alm',
  },
  {
    titre: 'Walk-Forward Backtest sur NQ Futures avec LightGBM',
    date: 'Juillet 2026',
    description: 'Systeme de trading algorithmique avec validation walk-forward pour eviter le data leakage. 53.5% winrate sur NQ Futures.',
    tags: ['Trading', 'LightGBM', 'Backtesting'],
    lien: 'https://github.com/Ama19902023/trading-algo',
  },
]

export default function Blog() {
  return (
    <section id="blog" style={{padding: '96px 16px'}}>
      <div style={{maxWidth: '1152px', margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: '64px'}}>
          <h2 style={{fontSize: '36px', fontWeight: 'bold', color: 'white', marginBottom: '16px'}}>
            <span style={{color: '#00ff88'}}>Articles</span> et Projets
          </h2>
          <p style={{color: '#9ca3af', fontSize: '18px'}}>Partage de connaissances en actuariat et IA</p>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px'}}>
          {articles.map((article) => (
            
              key={article.titre}
              href={article.lien}
              target="_blank"
              style={{backgroundColor: '#111', border: '1px solid #222', borderRadius: '12px', padding: '24px', textDecoration: 'none', display: 'block'}}
            >
              <div style={{color: '#6b7280', fontSize: '12px', marginBottom: '12px'}}>{article.date}</div>
              <h3 style={{color: 'white', fontWeight: 'bold', marginBottom: '12px', lineHeight: '1.4'}}>
                {article.titre}
              </h3>
              <p style={{color: '#9ca3af', fontSize: '14px', marginBottom: '16px', lineHeight: '1.6'}}>
                {article.description}
              </p>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
                {article.tags.map((tag) => (
                  <span key={tag} style={{fontSize: '12px', padding: '4px 8px', borderRadius: '4px', backgroundColor: '#1a1a1a', color: '#9ca3af', border: '1px solid #333'}}>
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}