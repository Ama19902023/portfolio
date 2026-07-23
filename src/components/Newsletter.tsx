export default function Newsletter() {
  const items = [
    "One deep-dive on IFRS 17, SII or ALM from real production experience",
    "One AI technique applied to insurance with working code",
    "Regulatory updates that actually matter for practitioners",
    "One open source tool or dataset worth knowing"
  ]

  const stats = [
    {value: "Monthly", label: "One issue per month"},
    {value: "Free", label: "Always free"},
    {value: "EN", label: "Written in English"}
  ]

  return (
    <section id="newsletter" style={{padding: "96px 24px", backgroundColor: "#0a0a0a"}}>
      <div style={{maxWidth: "600px", margin: "0 auto", textAlign: "center"}}>

        <div style={{display: "inline-block", backgroundColor: "#111", border: "1px solid #00ff88", color: "#00ff88", fontSize: "12px", padding: "6px 16px", borderRadius: "999px", marginBottom: "32px"}}>
          Monthly · Free · No spam
        </div>

        <h2 style={{fontSize: "40px", fontWeight: "800", color: "white", marginBottom: "16px", lineHeight: "1.2"}}>
          The Actuarial AI Letter
        </h2>

        <p style={{color: "#6b7280", fontSize: "18px", lineHeight: "1.7", marginBottom: "16px"}}>
          Monthly insights on AI applied to actuarial science, IFRS 17, Solvency II and quantitative finance.
        </p>

        <p style={{color: "#6b7280", fontSize: "16px", lineHeight: "1.7", marginBottom: "48px"}}>
          Written by a practitioner. One issue per month, straight to the point.
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
            Subscribe — it is free
          </a>

          <p style={{color: "#374151", fontSize: "12px", marginTop: "12px"}}>
            No spam. Unsubscribe anytime.
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
