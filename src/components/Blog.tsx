'use client'

const articles = [
  {
    titre: 'Fine-tuning Mistral 7B sur des données actuarielles IFRS 17',
    date: 'Juillet 2026',
    description: 'Comment j\'ai fine-tuné Mistral 7B avec LoRA sur 190 exemples actuariels pour créer le premier LLM spécialisé IFRS 17/SII.',
    tags: ['LLM', 'LoRA', 'IFRS 17'],
    lien: 'https://github.com/Ama19902023/llm-actuariel',
  },
  {
    titre: 'Dashboard ALM temps réel avec Solvency II',
    date: 'Juillet 2026',
    description: 'Construction d\'un dashboard ALM interactif calculant le SCR Market, la duration gap et les sensibilités aux chocs de taux.',
    tags: ['ALM', 'Solvency II', 'Streamlit'],
    lien: 'https://github.com/Ama19902023/dashboard-alm',
  },
  {
    titre: 'Walk-Forward Backtest sur NQ Futures avec LightGBM',
    date: 'Juillet 2026',
    description: 'Système de trading algorithmique avec validation walk-forward pour éviter le data leakage. 53.5% winrate sur NQ Futures.',
    tags: ['Trading', 'LightGBM', 'Backtesting'],
    lien: 'https://github.com/Ama19902023/trading-algo',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-[#00ff88]">Articles</span> & Projets
          </h2>
          <p className="text-gray-400 text-lg">Partage de connaissances en actuariat et IA</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            
              key={article.titre}
              href={article.lien}
              target="_blank"
              className="bg-[#111] border border-[#222] rounded-xl p-6 hover:border-[#00ff88] transition-colors group"
            >
              <div className="text-gray-500 text-xs mb-3">{article.date}</div>
              <h3 className="text-white font-bold mb-3 group-hover:text-[#00ff88] transition-colors leading-snug">
                {article.titre}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {article.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded bg-[#1a1a1a] text-gray-400 border border-[#333]">
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