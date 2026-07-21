'use client'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-4xl mx-auto">
        <div className="inline-block bg-[#111] border border-[#00ff88] text-[#00ff88] text-sm px-4 py-2 rounded-full mb-8">
          Actuaire Senior × IA × Data Science
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Amine <span className="text-[#00ff88]">Meddour</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-4">
          Actuaire Senior | IFRS 17 · Solvency II · ALM
        </p>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          Je construis des outils IA pour l&apos;actuariat et la finance quantitative.
          11 ans d&apos;expérience en assurance vie, enseignant Python à l&apos;ISFA.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#projets" className="bg-[#00ff88] text-black font-bold px-8 py-4 rounded-lg hover:bg-[#00cc66] transition-colors">
            Voir mes projets
          </a>
          <a href="https://github.com/Ama19902023" target="_blank" className="border border-[#00ff88] text-[#00ff88] font-bold px-8 py-4 rounded-lg hover:bg-[#00ff88] hover:text-black transition-colors">
            GitHub
          </a>
          <a href="https://huggingface.co/aminemed90" target="_blank" className="border border-gray-600 text-gray-400 font-bold px-8 py-4 rounded-lg hover:border-[#00ff88] hover:text-[#00ff88] transition-colors">
            HuggingFace
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '11', label: 'Ans expérience' },
            { value: '4', label: 'Projets IA' },
            { value: '190', label: 'Exemples dataset' },
            { value: '30+', label: 'Pays Cardif' },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#111] border border-[#222] rounded-lg p-4">
              <div className="text-3xl font-bold text-[#00ff88]">{stat.value}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}