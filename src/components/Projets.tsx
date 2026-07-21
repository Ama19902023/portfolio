'use client'

const projets = [
  {
    titre: 'Agent Actuariel IA',
    description: 'LLM Llama 3.1 8B spécialisé IFRS 17 / Solvency II — 100% local sur RTX 5060. Interface Streamlit + LangChain.',
    tags: ['LangChain', 'Ollama', 'Streamlit', 'IFRS 17'],
    github: 'https://github.com/Ama19902023/agent-actuariel',
    couleur: '#00ff88',
  },
  {
    titre: 'Trading Algo Dashboard',
    description: 'LightGBM + Walk-Forward Backtest sur NQ Futures. 53.5% winrate, -15.1% max drawdown, signal du jour en temps réel.',
    tags: ['LightGBM', 'VectorBT', 'Plotly', 'NQ Futures'],
    github: 'https://github.com/Ama19902023/trading-algo',
    couleur: '#ff6b6b',
  },
  {
    titre: 'Dashboard ALM',
    description: 'Duration gap, SCR Market (Taux/Actions/Spread), sensibilités aux chocs de taux — données live Yahoo Finance.',
    tags: ['Solvency II', 'ALM', 'Streamlit', 'Plotly'],
    github: 'https://github.com/Ama19902023/dashboard-alm',
    couleur: '#ffd700',
  },
  {
    titre: 'LLM Actuariel Fine-tuné',
    description: 'Mistral 7B fine-tuné avec LoRA sur 190 exemples actuariels IFRS 17/SII/ALM. Publié sur HuggingFace.',
    tags: ['LoRA', 'Mistral 7B', 'PEFT', 'HuggingFace'],
    github: 'https://github.com/Ama19902023/llm-actuariel',
    huggingface: 'https://huggingface.co/aminemed90/mistral-actuariel-v0.1',
    couleur: '#a78bfa',
  },
]

export default function Projets() {
  return (
    <section id="projets" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Mes <span className="text-[#00ff88]">Projets</span>
          </h2>
          <p className="text-gray-400 text-lg">IA × Actuariat × Finance Quantitative</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projets.map((projet) => (
            <div key={projet.titre} className="bg-[#111] border border-[#222] rounded-xl p-6 hover:border-[#00ff88] transition-colors group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-[#00ff88] transition-colors">
                  {projet.titre}
                </h3>
                <div className="w-3 h-3 rounded-full mt-1" style={{ backgroundColor: projet.couleur }} />
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">{projet.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {projet.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-[#1a1a1a] text-gray-300 border border-[#333]">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={projet.github} target="_blank" className="text-sm text-[#00ff88] hover:underline">
                  → GitHub
                </a>
                {projet.huggingface && (
                  <a href={projet.huggingface} target="_blank" className="text-sm text-[#a78bfa] hover:underline">
                    → HuggingFace
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}