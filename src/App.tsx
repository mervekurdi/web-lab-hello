import "./App.css";

export default function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <span className="brand-dot" aria-hidden="true" />
            <span>Merve</span>
          </div>

          <nav aria-label="Primary">
            <ul className="nav">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero container">
          <p className="eyebrow">WEB LAB</p>
          <h1 className="hero-title">Responsive Portfolio Page</h1>
          <p className="hero-sub">
            Flexbox navigation + CSS Grid cards + design tokens.
          </p>

          <div className="hero-actions">
            <a className="btn primary" href="#projects">View Projects</a>
            <a className="btn" href="#contact">Contact</a>
          </div>
        </section>

        <section id="about" className="container section">
          <h2 className="section-title">About</h2>
          <p className="muted">
            This page uses tokens from <code>tokens.css</code>.
          </p>

          <div className="skills">
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">Flex</span>
            <span className="tag">Grid</span>
            <span className="tag">Responsive</span>
          </div>
        </section>

        <section id="projects" className="container section">
          <div className="section-head">
            <h2 className="section-title">Projects</h2>
            <p className="muted">Grid adapts to screen size.</p>
          </div>

          <div className="project-grid">
            <article className="project-card">
              <h3>Lab 1</h3>
              <p className="muted">Basic HTML & CSS.</p>
              <div className="card-actions">
                <a className="link" href="#">Code</a>
              </div>
            </article>

            <article className="project-card">
              <h3>Lab 2</h3>
              <p className="muted">Layout and components.</p>
              <div className="card-actions">
                <a className="link" href="#">Code</a>
              </div>
            </article>

            <article className="project-card">
              <h3>Lab 3</h3>
              <p className="muted">Tokens + Flex + Grid.</p>
              <div className="card-actions">
                <a className="link" href="#">Code</a>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="container section">
          <h2 className="section-title">Contact</h2>
          <div className="contact-card">
            <p className="muted">Email: example@mail.com</p>
            <p className="muted">GitHub: github.com/mervekurdi</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span className="muted">© {new Date().getFullYear()} Merve</span>
        </div>
      </footer>
    </div>
  );
}