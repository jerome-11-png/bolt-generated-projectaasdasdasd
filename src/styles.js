import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #2B3340;
    --secondary-color: #505D75;
    --accent-color: #647491;
    --background-color: #F5F7FA;
    --card-background: #FFFFFF;
    --text-primary: #2B3340;
    --text-secondary: #505D75;
    --border-color: #E2E8F0;
    --hover-color: #F8FAFC;
    --shadow-sm: 0 1px 3px rgba(43, 51, 64, 0.1);
    --shadow-md: 0 4px 6px rgba(43, 51, 64, 0.1);
    --shadow-lg: 0 10px 15px rgba(43, 51, 64, 0.1);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background-color: var(--background-color);
    color: var(--text-primary);
    line-height: 1.6;
    margin: 0;
  }

  .header {
    background-color: var(--card-background);
    padding: 1.5rem 2.5rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    box-shadow: var(--shadow-sm);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .logo {
    height: 50px;
    margin-right: 1.5rem;
    transition: transform 0.2s ease;
  }

  .header h2 {
    color: var(--primary-color);
    font-weight: 800;  /* Increased font weight */
    font-size: 1.75rem;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.05);
  }

  .container {
    max-width: 1400px;
    margin: 2rem auto;
    padding: 0 2.5rem;
  }

  .iframe-container {
    background-color: var(--card-background);
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: var(--shadow-md);
    margin-bottom: 2.5rem;
    height: 70vh;
    min-height: 600px;
    border: 1px solid var(--border-color);
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    background-color: white;
  }

  .nav-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    padding: 1rem 0;
    margin-bottom: 3rem;
  }

  .nav-card {
    background-color: var(--card-background);
    border-radius: 0.75rem;
    padding: 1.75rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--text-primary);
    transition: all 0.3s ease;
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--border-color);
    cursor: pointer;
  }

  .nav-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    background-color: var(--hover-color);
    border-color: var(--secondary-color);
  }

  .nav-card i {
    font-size: 1.75rem;
    margin-right: 1.25rem;
    color: var(--secondary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    background-color: rgba(80, 93, 117, 0.1);
    transition: all 0.3s ease;
  }

  .nav-card:hover i {
    background-color: rgba(80, 93, 117, 0.15);
    transform: scale(1.05);
  }

  .nav-card span {
    font-size: 1.125rem;
    font-weight: 500;
    color: var(--text-primary);
    letter-spacing: -0.01em;
  }

  .nav-card.active {
    background-color: var(--hover-color);
    border: 1.5px solid var(--secondary-color);
  }

  .nav-card.active i {
    background-color: rgba(80, 93, 117, 0.15);
  }

  /* Tutorial Section Styles */
  .tutorials-section {
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
  }

  .tutorials-section h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 2rem;
    text-align: center;
  }

  .tutorials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 1rem 0;
  }

  .tutorial-card {
    background-color: var(--card-background);
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .tutorial-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
  }

  .tutorial-icon {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    background-color: rgba(80, 93, 117, 0.1);
    padding: 1rem;
    border-radius: 0.75rem;
  }

  .tutorial-content h4 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 0.75rem;
  }

  .tutorial-content p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .learn-more {
    color: var(--secondary-color);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    transition: color 0.2s ease;
    display: inline-flex;
    align-items: center;
  }

  .learn-more:hover {
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1.25rem;
    }

    .header {
      padding: 1.25rem;
    }

    .logo {
      height: 40px;
    }

    .header h2 {
      font-size: 1.5rem;
    }

    .iframe-container {
      height: 60vh;
      margin-bottom: 2rem;
    }

    .nav-grid, .tutorials-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .tutorial-card {
      padding: 1.5rem;
    }
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background-color);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--secondary-color);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-color);
  }
`
