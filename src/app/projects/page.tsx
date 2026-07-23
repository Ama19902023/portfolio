import Link from 'next/link'
import Navbar from '../../components/Navbar'

const projects = [
  {
    slug: 'agent-actuariel',
    titre: 'Actuarial AI Agent',
    description: 'A local LLM agent specialized in IFRS 17 and Solvency II, running entirely on GPU — no cloud, no API costs, full data privacy.',
    longDescription: 'Built with LangChain and Ollama, this agent runs Llama 3.1 8B locally on an RTX 5060. It answers complex actuarial questions on IFRS 17, Solvency II, ALM and provisions with practitioner-level accuracy. The system prompt is tuned for actuarial terminology and regulatory context.',
    tags: ['LangChain', 'Ollama', 'Llama 3.1 8B', 'Streamlit', 'CUDA', 'IFRS 17'],
    resultats: [
      'Runs 100% locally — zero data sent to cloud',
      'RTX 5060 8GB VRAM — 71 tokens/sec inference',
      'Specialized on IFRS 17, SII, ALM terminology',
      'Streamlit interface — deployable in minutes'
    ],
    github: 'https://github.com/Ama19902023/agent-actuariel',
    couleur: '#00ff88'
  },
  {
    slug: 'trading-algo',
    titre: 'Algo Trading Dashboard',
    description: 'A walk-forward backtesting system for NQ and ES futures using LightGBM — with real ML signals, not curve-fitted results.',
    longDescription: 'The key differentiator is walk-forward validation: the model is trained on past data and tested on future data it has never seen. This eliminates data leakage — the most common mistake in quant backtesting. 17 technical features, 5-fold TimeSeriesSplit, real-time signal generation.',
    tags: ['LightGBM', 'Walk-Forward', 'Plotly', 'Yahoo Finance', 'NQ Futures', 'ES Futures'],
    resultats: [
      '53.5% win rate — walk-forward validated',
      '-15.1% max drawdown',
      '172 trades over 2 years',
      'Live signal: Long or Cash for next session'
    ],
    github: 'https://github.com/Ama19902023/trading-algo',
    couleur: '#ff6b6b'
  },
  {
    slug: 'dashboard-alm',
    titre: 'ALM Dashboard — Solvency II',
    description: 'A real-time ALM dashboard computing duration gap, SCR Market and interest rate sensitivities using live yield curve data.',
    longDescription: 'Built for a simplified life insurer balance sheet, the dashboard computes Macaulay and modified duration for assets and liabilities, duration gap, and SCR Market using the Solvency II standard formula correlation matrix. Yield curve data comes from Yahoo Finance as a proxy for EIOPA curves.',
    tags: ['Solvency II', 'ALM', 'Duration', 'SCR', 'Streamlit', 'Plotly', 'Python'],
    resultats: [
      'Live yield curve from Yahoo Finance',
      'SCR Market: Rates + Equity + Spread aggregation',
      'Interactive spread slider for liability curve',
      'Sensitivity analysis: +100bp, +200bp, -100bp'
    ],
    github: 'https://github.com/Ama19902023/dashboard-alm',
    couleur: '#ffd700'
  },
  {
    slug: 'llm-actuariel',
    titre: 'Fine-tuned Actuarial LLM',
    description: 'Mistral 7B fine-tuned with LoRA on 190 actuarial examples covering IFRS 17, Solvency II, ALM and Python code — published on HuggingFace.',
    longDescription: 'Using LoRA (Low-Rank Adaptation), only 1% of model parameters are modified during training — making fine-tuning feasible on a single RTX 5060 GPU in 2-3 hours. The dataset was hand-crafted by a practitioner with 11 years of actuarial experience, ensuring quality over quantity.',
    tags: ['Mistral 7B', 'LoRA', 'PEFT', 'HuggingFace', 'PyTorch', 'CUDA', 'IFRS 17'],
    resultats: [
      '190 hand-crafted Q&A pairs',
      'Training: 2-3 hours on RTX 5060',
      'Published on HuggingFace as v0.1',
      'Next: 500+ examples, evaluation benchmark'
    ],
    github: 'https://github.com/Ama19902023/llm-actuariel',
    huggingface: 'https://huggingface.co/aminemed90/mistral-actuariel-v0.1',
    couleur: '#a78bfa'
  }
]

export default function ProjectsPage() {
  return (
    <main style={{minHeight: '100vh', backgroundColor: '#0a0a0a', paddingTop: '80px'}}>
      <Navbar />
      <div style={{padding: '80px 24px 96px'}}>
        <div style={{maxWidth: '1152px', margin: '0 auto'}}>

          <div style={{marginBottom: '64px'}}>
            <h1 style={{fontSize: '48px', fontWeight: '800', color: 'white', marginBottom: '16px', letterSpacing: '-0.02em'}}>
              Projects
            </h1>
            <p style={{color: '#6b7280', fontSize: '18px', maxWidth: '600px'}}>
              Open source projects combining actuarial science, AI and quantitative finance — built with real data and production-grade methodology.
            </p>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
            {projects.map((project, index) => (
              <div key={project.slug} style={{backgroundColor: '#111', border: '1px solid #1a1a1a', borderRadius: '16px', padding: '48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px'}}>

                <div>
                  <div style={{color: project.couleur, fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px'}}>
                    Project 0{index + 1}
                  </div>
                  <h2 style={{fontSize: '28px', fontWeight: '800', color: 'white', marginBottom: '16px', lineHeight: '1.2'}}>
                    {project.titre}
                  </h2>
                  <p style={{color: '#6b7280', fontSize: '16px', lineHeight: '1.7', marginBottom: '24px'}}>
                    {project.longDescription}
                  </p>
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px'}}>
                    {project.tags.map((tag) => (
                      <span key={tag} style={{fontSize: '12px', padding: '4px 12px', borderRadius: '999px', backgroundColor: '#1a1a1a', color: '#9ca3af', border: '1px solid #222'}}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{display: 'flex', gap: '16px'}}>
                    <a href={project.github} target="_blank" style={{backgroundColor: project.couleur, color: 'black', fontWeight: '700', padding: '10px 24px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px'}}>
                      View on GitHub
                    </a>
                    {project.huggingface && (
                      <a href={project.huggingface} target="_blank" style={{border: '1px solid #333', color: '#9ca3af', fontWeight: '700', padding: '10px 24px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px'}}>
                        HuggingFace
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  <div style={{color: '#9ca3af', fontSize: '13px', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px'}}>
                    Key Results
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                    {project.resultats.map((resultat) => (
                      <div key={resultat} style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
                        <span style={{color: project.couleur, flexShrink: 0, fontSize: '16px'}}>→</span>
                        <span style={{color: '#9ca3af', fontSize: '15px', lineHeight: '1.6'}}>{resultat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  )
}
