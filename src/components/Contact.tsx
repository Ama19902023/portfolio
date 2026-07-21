'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Me <span className="text-[#00ff88]">Contacter</span>
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          Consulting actuariel IA, formations, missions freelance — discutons de votre projet.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <a href="https://linkedin.com/in/amine-meddour" target="_blank" className="bg-[#111] border border-[#222] rounded-xl p-6 hover:border-[#00ff88] transition-colors group">
            <div className="text-2xl mb-2">💼</div>
            <div className="text-white font-bold group-hover:text-[#00ff88]">LinkedIn</div>
            <div className="text-gray-500 text-sm">Amine Meddour</div>
          </a>
          <a href="https://github.com/Ama19902023" target="_blank" className="bg-[#111] border border-[#222] rounded-xl p-6 hover:border-[#00ff88] transition-colors group">
            <div className="text-2xl mb-2">💻</div>
            <div className="text-white font-bold group-hover:text-[#00ff88]">GitHub</div>
            <div className="text-gray-500 text-sm">Ama19902023</div>
          </a>
          <a href="https://huggingface.co/aminemed90" target="_blank" className="bg-[#111] border border-[#222] rounded-xl p-6 hover:border-[#00ff88] transition-colors group">
            <div className="text-2xl mb-2">🤗</div>
            <div className="text-white font-bold group-hover:text-[#00ff88]">HuggingFace</div>
            <div className="text-gray-500 text-sm">aminemed90</div>
          </a>
        </div>
        <a href="mailto:aminemeddour90@gmail.com" className="inline-block bg-[#00ff88] text-black font-bold px-10 py-4 rounded-lg hover:bg-[#00cc66] transition-colors text-lg">
          ✉️ Envoyer un email
        </a>
        <div className="mt-16 pt-8 border-t border-[#222] text-gray-600 text-sm">
          © 2026 Amine Meddour — Actuaire Senior × IA × Finance
        </div>
      </div>
    </section>
  )
}