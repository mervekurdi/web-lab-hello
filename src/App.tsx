import { useState } from "react";

export default function App() {
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (name.length < 3) {
      setError("İsim en az 3 karakter olmalıdır.");
      return;
    }
    if (!email.includes("@")) {
      setError("Geçerli bir e-posta giriniz.");
      return;
    }
    if (message.length < 10) {
      setError("Mesaj en az 10 karakter olmalıdır.");
      return;
    }

    alert("Form gönderildi ✅");
    form.reset();
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Ana içeriğe atla
      </a>

      <header>
        <h1>Semantik Portfolio</h1>

        <nav aria-label="Ana gezinme">
          <a href="#about">Hakkımda</a> {" | "}
          <a href="#projects">Projeler</a> {" | "}
          <a href="#contact">İletişim</a>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section id="about" aria-labelledby="about-title">
          <h2 id="about-title">Hakkımda</h2>

          <figure>
            <img
              src="https://via.placeholder.com/420x240"
              alt="Profil için örnek görsel"
            />
            <figcaption>Figure + figcaption örneği.</figcaption>
          </figure>

          <p>
            Bu sayfa LAB-2 için semantik etiketler ve erişilebilirlik
            kurallarını göstermek amacıyla hazırlanmıştır.
          </p>
        </section>

        <section id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Projeler</h2>

          <article>
            <h3>Proje 1</h3>
            <p>Kısa proje açıklaması.</p>
          </article>

          <article>
            <h3>Proje 2</h3>
            <p>Kısa proje açıklaması.</p>
          </article>

          <article>
            <h3>Proje 3</h3>
            <p>Kısa proje açıklaması.</p>
          </article>
        </section>

        <section id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">İletişim</h2>

          <form onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="name">Ad Soyad</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                minLength={3}
                aria-describedby="nameHelp"
              />
              <p id="nameHelp">En az 3 karakter gir.</p>
            </div>

            <div>
              <label htmlFor="email">E-posta</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                aria-describedby="emailHelp"
              />
              <p id="emailHelp">Örnek: isim@mail.com</p>
            </div>

            <div>
              <label htmlFor="message">Mesaj</label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                aria-describedby="msgHelp"
              />
              <p id="msgHelp">En az 10 karakter.</p>
            </div>

            {error && (
              <p role="alert" aria-live="polite">
                {error}
              </p>
            )}

            <button type="submit">Gönder</button>
          </form>
        </section>
      </main>

      <footer>
        <p>© 2026 - LAB-2 Semantik Portfolio</p>
      </footer>
    </>
  );
}