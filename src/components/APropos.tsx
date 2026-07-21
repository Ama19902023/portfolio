'use client'

const competences = [
  { categorie: 'Actuariat', items: ['IFRS 17', 'Solvency II', 'ALM', 'Provisions techniques', 'Embedded Value'] },
  { categorie: 'IA & ML', items: ['LLM Fine-tuning', 'LangChain', 'LightGBM', 'PyTorch', 'CUDA'] },
  { categorie: 'Dev', items: ['Python', 'SAS', 'Next.js', 'Streamlit', 'SQL'] },
  { categorie: 'Finance', items: ['Trading Algo', 'Orderflow', 'Backtesting', 'Risk Management'] },
]

const experiences = [
  { poste: 'Actuaire Senior - Coordination Transversale', entreprise: 'BNP Paribas Cardif', periode: '2013 - Present', description: 'IFRS 17, Solvency II, outil de gouvernance Condor (30+ pays)' },
  { poste: 'Enseignant', entreprise: 'ISFA Lyon', periode: '2020 - Present', description: 'Python, Statistiques, Probabilites - 150 etudiants/an' },
  { poste: 'Actuaire Consultant', entreprise: 'Optimind Winter', periode: '2012 - 2013', description: 'Sante, Prevoyance - grands comptes assurance' },
]

export default function APropos() {
  return (
    <section id="apropos" className="py-24 px-4 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            A <span className="text-[#00ff88]">Propos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Actuaire senior avec 11 ans experience en assurance vie,
            passionne par l intersection entre l actuariat et l intelligence artificielle.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Experiences</h3>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.poste} className="border-l-2 border-[#00ff88] pl-6">
                  <div className="text-[#00ff88] text-sm mb-1">{exp.periode}</div>
                  <div className="text-white font-bold">{exp.poste}</div>
                  <div className="text-gray-400 text-sm">{exp.entreprise}</div>
                  <div className="text-gray-500 text-sm mt-1">{exp.description}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Competences</h3>
            <div className="space-y-6">
              {competences.map((cat) => (
                <div key={cat.categorie}>
                  <div className="text-[#00ff88] text-sm font-bold mb-2">{cat.categorie}</div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="text-sm px-3 py-1 rounded-full bg-[#1a1a1a] text-gray-300 border border-[#333]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}