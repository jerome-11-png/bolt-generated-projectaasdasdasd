import React, { useState } from 'react'

const NAVIGATION_CARDS = [
  { icon: "🔍", title: "DeepFake Detection", url: "https://noumanjavaid-centurion.hf.space" },
  { icon: "📄", title: "Document Analysis", url: "https://renesistech-doc-analysis.hf.space" },
  { icon: "🔐", title: "Image Authentication", url: "https://renesistech-demo-ate.hf.space" },
  { icon: "🖼️", title: "Image Comparison", url: "https://renesistech-watermaking-centurion-final.hf.space" },
  { icon: "⚠️", title: "AI Detection", url: "https://renesistech-aidetection.hf.space" }
];


const TUTORIAL_CARDS = [
  {
    title: "Getting Started with Centurion",
    description: "Learn the basics of using Centurion's powerful AI tools and features.",
    icon: "🚀",
    link: "#"
  },
  {
    title: "DeepFake Detection Guide",
    description: "Understand how to effectively use our DeepFake detection technology.",
    icon: "🔍",
    link: "#"
  },
  {
    title: "Document Analysis Tutorial",
    description: "Master the document analysis features for better security.",
    icon: "📑",
    link: "#"
  },
  {
    title: "Video Watermarking Tips",
    description: "Learn advanced techniques for video watermarking and protection.",
    icon: "🎥",
    link: "#"
  }
]

function App() {
  const [currentUrl, setCurrentUrl] = useState(NAVIGATION_CARDS[0].url)

  return (
    <div>
      <header className="header">
        <img 
          src="https://raw.githubusercontent.com/noumanjavaid96/ai-as-an-api/refs/heads/master/image%20(39).png" 
          alt="Centurion Logo" 
          className="logo" 
        />
        <h2>Centurion</h2>
      </header>

      <main className="container">
        <div className="iframe-container">
          <iframe
            src={currentUrl}
            title="Centurion Platform"
            loading="lazy"
          />
        </div>

        <nav className="nav-grid">
          {NAVIGATION_CARDS.map((card, index) => (
            <div
              key={index}
              className={`nav-card ${currentUrl === card.url ? 'active' : ''}`}
              onClick={() => setCurrentUrl(card.url)}
              role="button"
              tabIndex={0}
            >
              <i>{card.icon}</i>
              <span>{card.title}</span>
            </div>
          ))}
        </nav>

        <section className="tutorials-section">
          <h3>Learn More About Centurion</h3>
          <div className="tutorials-grid">
            {TUTORIAL_CARDS.map((tutorial, index) => (
              <div key={index} className="tutorial-card">
                <div className="tutorial-icon">{tutorial.icon}</div>
                <div className="tutorial-content">
                  <h4>{tutorial.title}</h4>
                  <p>{tutorial.description}</p>
                  <a href={tutorial.link} className="learn-more">Learn More →</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
