export default function Blog() {
  return (
    <div id="blog">
      <h2 style={{color: "white"}}>Articles et Projets</h2>
      <div style={{display: "flex", gap: "24px", padding: "48px 16px", flexWrap: "wrap"}}>
        <a href="https://github.com/Ama19902023/llm-actuariel" target="_blank" style={{color: "#00ff88"}}>
          Fine-tuning Mistral 7B IFRS 17
        </a>
        <a href="https://github.com/Ama19902023/dashboard-alm" target="_blank" style={{color: "#00ff88"}}>
          Dashboard ALM Solvency II
        </a>
        <a href="https://github.com/Ama19902023/trading-algo" target="_blank" style={{color: "#00ff88"}}>
          Walk-Forward Backtest NQ Futures
        </a>
      </div>
    </div>
  )
}