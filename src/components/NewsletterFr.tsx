export default function Newsletter() {
  const items = [
    "Un aperçu approfondi sur les IFRS 17, la SII ou l'ALM depuis une expérience de production réelle",
    "Une technique d'intelligence artificielle appliquée à l'assurance avec du code fonctionnel",
    "Des mises à jour réglementaires qui importent vraiment pour les professionnels",
    "Un outil ou un jeu de données open source à connaître"
  ]

  const stats = [
    {value: "Mensuel", label: "Une lettre par mois"},
    {value: " Gratuit", label: "Toujours gratuit"},
    {value: "EN", label: "Écrit en anglais"}
  ]

  return (
    <section id="newsletter" style={{padding: "96px 24px", backgroundColor: "#0a0a0a"}}>
      <div style={{maxWidth: "600px", margin: "0 auto", textAlign: "center"}}>

        <div style={{display: "inline-block", backgroundColor: "#111", border: "1px solid #00ff88", color: "#00ff88", fontSize: "12px", padding: "6px 16px", borderRadius: "999px", marginBottom: "32px"}}>
          Mensuel · Gratuit · Pas de spam
        </div>

        <h2 style={{fontSize: "40px", fontWeight: "800", color: "white", marginBottom: "16px", lineHeight: "1.2"}}>
          La Lettre d'ActuariAT AI
        </h2>

        <p style={{color: "#6b7280", fontSize: "18px", lineHeight: "1.7", marginBottom: "16px"}}>
          Des informations mensuelles sur l'application de l'intelligence artificielle à la science actuarielle, les IFRS 17, la SII et la finance quantitative.
        </p>

        <p style={{color: "#6b7280", fontSize: "16px", lineHeight: "1.7", marginBottom: "48px"}}>
          Écrit par un professionnel. Une lettre par mois, claire et concise.
        </p>

        <div style={{backgroundColor: "#111", border: "1px solid #1a1a1a", borderRadius: "12px", padding: "40px", marginBottom: "48px"}}>
          <div style={{display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px", textAlign: "left"}}>
            {items.map((item) => (
              <div key={item} style={{display: "flex", gap: "12px"}}>
                <span style={{color: "#00ff88", flexShrink: 0}}>→</span>
                <span style={{color: "#9ca3af", fontSize: "14px", lineHeight: "1.6"}}>{item}</span>
              </div>
            ))}
          </div>

          <a href="https://substack.com" target="_blank" style={{display: "block", backgroundColor: "#00ff88", color: "black", fontWeight: "700", padding: "16px 32px", borderRadius: "8px", textDecoration: "none", fontSize: "16px", textAlign: "center"}}>
            S'abonner — c'est gratuit
          </a>

          <p style={{color: "#374151", fontSize: "12px", marginTop: "12px"}}>
            Pas de spam. Désabonnez-vous à tout moment.
          </p>
        </div>

        <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px"}}>
          {stats.map((stat) => (
            <div key={stat.label} style={{backgroundColor: "#111", border: "1px solid #1a1a1a", borderRadius: "8px", padding: "20px"}}>
              <div style={{color: "#00ff88", fontWeight: "700", fontSize: "20px", marginBottom: "4px"}}>{stat.value}</div>
              <div style={{color: "#6b7280", fontSize: "13px"}}>{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}