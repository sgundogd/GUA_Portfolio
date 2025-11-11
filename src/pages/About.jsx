import { Link } from "react-router-dom";
import "../app.css";
import "../styles/about.css";

export default function About() {
  return (
    <main className="section">
      {/* Intro */}
      <header className="container section-title" style={{ marginBottom: 32 }}>
        <span className="eyebrow">About</span>
        <h1 style={{ fontFamily: "Playfair Display, serif" }}>GUA Design</h1>
        <p>
          GUA is an independent furniture and joinery studio based in Istanbul and Dubai.
          We design and build made-to-measure furniture, fixed joinery, metal/stone details
          and upholstery for residences and hospitality. We manage the full chain—design,
          engineering, sampling, production and on-site installation.
        </p>
      </header>

      {/* What / Who */}
      <section className="container about">
        <div className="about-text" style={{ gridColumn: "1 / -1" }}>
          <h2 style={{ marginTop: 0 }}>What we do</h2>
          <p>
            We collaborate with architects and private clients to develop bespoke pieces.
            Each project runs with clear schedules across drawings, sampling, production,
            quality control and installation. Durability matters as much as aesthetics—
            our builds are suitable for high-use hospitality environments.
          </p>

          <h2>Who we work with</h2>
          <p>
            Luxury homes, boutique and tier-one hotels, restaurants/cafés and executive offices.
            Most deliveries are in the Middle East and Europe; we provide international shipping
            and white-glove installation.
          </p>
        </div>
      </section>

      {/* Quick facts */}
      <section className="container" style={{ marginTop: 8 }}>
        <div className="grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
          {[
            { k: "Years in practice", v: "10+" },
            { k: "Lead time", v: "6–8 weeks" },
            { k: "Monthly capacity", v: "30+ pieces" },
            { k: "Countries delivered", v: "12" },
          ].map((s, i) => (
            <div key={i} className="card card-dark">
              <div className="card-body">
                <h3 style={{ fontSize: 28, margin: 0 }}>{s.v}</h3>
                <span className="muted">{s.k}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-dark">
        <div className="container section-title">
          <h2>Capabilities</h2>
          <p className="muted">Turn-key fabrication and installation across these scopes.</p>
        </div>
        <div className="container grid">
          {[
            {
              t: "Bespoke Furniture",
              d: "Solid/veneered wood, brass accents, stone tops, specialty finishes.",
              img: "/about/cap-furniture.jpg",
            },
            {
              t: "Fixed Joinery",
              d: "Wardrobes, wall panelling, media units, kitchens and vanities.",
              img: "/about/cap-joinery.jpg",
            },
            {
              t: "Metal & Stone",
              d: "Brass, stainless and powder-coated steel; marble/onyx/granite processing.",
              img: "/about/cap-metal-stone.jpg",
            },
            {
              t: "Upholstery",
              d: "Chairs, sofas and headboards; leather and performance fabrics.",
              img: "/about/cap-upholstery.jpg",
            },
          ].map((c, i) => (
            <div key={i} className="card">
              <div className="card-media">
                <img src={c.img} alt={c.t} />
              </div>
              <div className="card-body">
                <h3>{c.t}</h3>
                <p className="muted" style={{ margin: 0 }}>{c.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section-dark">
        <div className="container" style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", marginBottom: 8 }}>Process</h2>
          <p className="muted" style={{ marginBottom: 20 }}>
            A simple, transparent workflow for every project.
          </p>
          <ol className="list" style={{ marginLeft: 0, paddingLeft: 20, lineHeight: 1.8 }}>
            <li>Brief & scope — dimensions, functions, quantities, target budget.</li>
            <li>Design & engineering — 2D/3D drawings and material proposals.</li>
            <li>Sampling — finish cards, fabrics/leather, prototypes when needed.</li>
            <li>Production — based on approved drawings and samples.</li>
            <li>Quality control — measurements, finishes, packaging.</li>
            <li>Logistics & installation — GCC & Europe with white-glove service available.</li>
          </ol>
        </div>
      </section>

      {/* Materials */}
      <section className="section" style={{ background: "#111" }}>
        <div className="container" style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", marginBottom: 8 }}>
            Materials & Finishes
          </h2>
          <p className="muted" style={{ marginBottom: 24 }}>
            Solid walnut and oak, natural veneers, brass and stainless steel, marble and onyx,
            leather and performance fabrics. Each project receives its own finish schedule.
          </p>
          <div className="materials" style={{ gap: 12 }}>
            <span className="chip on"><span className="dot wood" />Wood</span>
            <span className="chip on"><span className="dot stone" />Stone</span>
            <span className="chip on"><span className="dot brass" />Brass</span>
            <span className="chip on"><span className="dot leather" />Leather</span>
          </div>
        </div>
      </section>

      {/* References (optional logos) */}
      <section className="refs" style={{ marginTop: 32 }}>
        <div className="container refs-inner">
          <div className="refs-logos">
            {/* place client logos in /public/about/logos/ */}
            {["logo1.svg","logo2.svg","logo3.svg","logo4.svg"].map((l,i)=>(
              <span key={i} className="ref-logo"><img src={`/about/logos/${l}`} alt="Client" /></span>
            ))}
          </div>
          <Link className="btn btn-outline btn-sm" to="/projects">See reference projects</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark">
        <div className="container contact">
          <div>
            <h2 style={{ marginTop: 0 }}>Tell us about your project</h2>
            <p className="muted">If you have a plan, dimensions or moodboard, share them—we reply within 48 hours.</p>
          </div>
          <div className="card-actions">
            <Link className="btn btn-gold" to="/contact">Email us</Link>
            <a className="btn btn-brass" href="https://wa.me/905555555555" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
