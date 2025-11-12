import { Link } from "react-router-dom";
import "../app.css";
import "../styles/about.css";

export default function About() {
  return (
    <main className="about-page">
      {/* HERO */}
      <section className="section about-hero">
        <div className="container hero-wrap">
          <div className="hero-copy">
            <span className="eyebrow">ABOUT</span>
            <h1>GUA Design</h1>
            <p className="muted">
              Independent furniture & fit-out studio based in Istanbul and Dubai.
              We design, engineer and build made-to-measure furniture and fixed joinery —
              then deliver and install worldwide.
            </p>

            <ul className="hero-points">
              <li><strong>Design → Installation</strong> end-to-end ownership</li>
              <li><strong>Hospitality-grade</strong> durability & finishing</li>
              <li><strong>International</strong> logistics & white-glove install</li>
            </ul>

            <div className="hero-cta">
              <Link className="btn btn-gold" to="/projects">See Projects</Link>
              <a
                className="btn btn-ghost"
                href="mailto:sevgi.gundogdu@gundogduahsap.com?subject=Project%20enquiry%20—%20GUA%20Design"
              >
                Email us
              </a>
            </div>
          </div>

          <div className="hero-media">
            <video className="hero-video" autoPlay muted loop playsInline poster="/about/hero.jpg">
              <source src="/hero/9.mp4" type="video/mp4" />
            </video>
            <div className="hero-glass">
              <span className="brand">GUA Design</span>
              <span className="muted">Design · Production · Installation</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT / WHO */}
      <section className="section">
        <div className="container about">
          <div className="about-text">
            <h2>What we do</h2>
            <p>
              We collaborate with architects and private clients to develop bespoke, production-ready pieces.
              Each project follows a clear schedule across drawings, sampling, production, quality control and installation.
            </p>

            <h2>Who we work with</h2>
            <p>
              Luxury homes, boutique & tier-one hotels, restaurants/cafés and executive offices.
              We ship internationally and handle on-site installation.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK FACTS (3 kart) */}
      <section className="section">
        <div className="container">
          <div className="facts-grid">
            {[
              { k: "Years in practice", v: "25+" },
              { k: "Lead time", v: "6–8 weeks" },
              { k: "Countries delivered", v: "12" },
            ].map((s, i) => (
              <div key={i} className="card card-dark fact-card">
                <div className="card-body">
                  <h3 className="fact-val">{s.v}</h3>
                  <span className="muted">{s.k}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES (malzeme saymadan) */}
      <section className="section section-dark">
        <div className="container section-title">
          <h2>Capabilities</h2>
          <p className="muted">Turn-key fabrication & installation across these scopes.</p>
        </div>

        <div className="container cap-grid">
          {[
            {
              t: "Design & Concept Development",
              d: "We translate ideas into refined concepts, blending aesthetics with function from the very start.",
              img: "/home/services/1.png",
            },
            {
              t: "Production & Craftsmanship",
              d: "Every piece is built with precision and care — combining advanced techniques with meticulous detailing.",
              img: "/home/services/2.png",
            },
            {
              t: "Delivery & Installation",
              d: "From secure packing to on-site assembly, we ensure a seamless delivery and flawless installation.",
              img: "/home/services/5.png",
            },
            {
              t: "Project Management",
              d: "A dedicated team oversees each phase, guaranteeing timelines, quality, and smooth coordination.",
              img: "/home/services/4.png",
            },
          ].map((c, i) => (
            <div key={i} className="card cap-card">
              <div className="card-media"><img src={c.img} alt={c.t} /></div>
              <div className="card-body">
                <h3>{c.t}</h3>
                <p className="muted">{c.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container proc">
          <div className="section-title">
            <h2>Process</h2>
            <p className="muted">A simple, transparent workflow for every project.</p>
          </div>

          <ol className="proc-list">
            <li><strong>Brief & scope</strong> — dimensions, functions, quantities, target budget.</li>
            <li><strong>Design & engineering</strong> — 2D/3D drawings and material proposals.</li>
            <li><strong>Sampling</strong> — finish cards, fabrics/leather, prototypes when needed.</li>
            <li><strong>Production</strong> — based on approved drawings and samples.</li>
            <li><strong>Quality control</strong> — measurements, finishes, packaging.</li>
            <li><strong>Logistics & installation</strong> — GCC & Europe, white-glove available.</li>
          </ol>
        </div>
      </section>

      {/* REFERENCES */}
      <section className="refs">
        <div className="container refs-inner">
          <div className="refs-logos">
            {["agaoglu.png","açı.png","hilton.png","kemer.png","koç.png","atlas.png","avansas.png","ışık.png","koton.png","merit.png","şua.png"].map((l,i)=>(
              <span key={i} className="ref-logo"><img src={`/logo/${l}`} alt="Client" /></span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark">
        <div className="container contact">
          <div>
            <h2>Tell us about your project</h2>
            <p className="muted">Have a plan, dimensions or a moodboard? Share them and we’ll reply within 48 hours.</p>
          </div>
          <div className="card-actions">
            <a
              className="btn btn-gold"
              href="mailto:sevgi.gundogdu@gundogduahsap.com?subject=Project%20enquiry%20—%20GUA%20Design"
            >
              Email us
            </a>
            <a className="btn btn-brass" href="https://wa.me/905555555555" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
