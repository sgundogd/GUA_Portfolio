import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "../app.css";

/* ------------------------ SMALL FEATURE CARD ----------------- */
function Feature({ icon: Icon, title, desc }) {
  return (
    <div
      className="card card-dark"
      style={{
        borderRadius: 14,
        padding: 12,
        border: "1px solid rgba(255,255,255,.08)",
        background: "#111",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Icon />
        <strong>{title}</strong>
      </div>
      <p className="muted" style={{ marginTop: 6, fontSize: 14 }}>{desc}</p>
    </div>
  );
}

/* ---------------------------- HERO ---------------------------- */
function Hero() {
  return (
    <section className="hero" style={{ minHeight: "calc(100vh - var(--header-h))" }}>
      <video className="hero-video" autoPlay muted loop playsInline poster="/hero.png">
        <source src="/hero/6.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-content container">
        <h1>
          Crafted for <span className="accent">Signature</span> Spaces
        </h1>
        <p>Bespoke furniture engineered for residences and hospitality.</p>

        <div className="hero-cta">
          <Link className="btn btn-gold" to="/contact">Request Lookbook</Link>
          <Link className="btn btn-ghost" to="/projects">View Projects</Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------ UTILITIES --------------------------- */
function SectionTitle({ eyebrow, title, desc, align="center" }) {
  return (
    <div className="section-title container" style={{ textAlign: align }}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2 style={{ marginTop: 8 }}>{title}</h2>}
      {desc && <p style={{ marginTop: 6 }} className="muted">{desc}</p>}
    </div>
  );
}
function useReveal() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setShow(true); },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, show };
}

/* ------------------------ WHAT WE DO (NET) -------------------- */
/* ------------------------ WHAT WE DO (FULL-HEIGHT) -------------------- */
function WhatWeDo() {
  return (
    <section className="section vh-section">
      <div className="container wwd">
        {/* Sol: Metin */}
        <div className="wwd-copy">
          <span className="eyebrow">What we do</span>
          <h2 className="wwd-title">
            We design, build and install bespoke furniture for homes and hospitality.
          </h2>

          <h4 style={{ margin: "14px 0 6px" }}>What you get</h4>
          <ul className="list" style={{ margin: 0 }}>
            <li>Design & shop drawings — ölçüleriniz ve bütçenize göre.</li>
            <li>Material sampling — finish kartları, taş/metal/deri örnekleri.</li>
            <li>Production — masif ağaç, pirinç/çelik, taş; otel standardı kalite.</li>
            <li>Logistics & white-glove install — paketleme, teslimat ve kurulum.</li>
          </ul>

          <h4 style={{ margin: "16px 0 6px" }}>Why GUA</h4>
          <ul className="list" style={{ marginTop: 0 }}>
            <li>Tek muhatap: brief’ten hand-over’a kadar net süreç.</li>
            <li>Hospitality-grade dayanım, uzun ömür.</li>
            <li>Finishes & dimensions tamamen size göre.</li>
          </ul>

          <div className="wwd-stats">
            <div className="wwd-chip">
              <div className="muted">Lead time</div>
              <strong>6–8 weeks</strong>
            </div>
            <div className="wwd-chip">
              <div className="muted">Regions</div>
              <strong>GCC & Europe</strong>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
            <Link className="btn btn-gold" to="/contact">Start a Brief</Link>
            <Link className="btn btn-ghost" to="/projects">See Projects</Link>
          </div>
        </div>

        {/* Sağ: Media */}
        <div className="wwd-media">
          <video className="wwd-video" autoPlay muted loop playsInline poster="/hero.png">
            <source src="/hero/9.mp4" type="video/mp4" />
          </video>

          {/* Cam efektli etiket */}
          <div className="wwd-glass">
            <span style={{ fontWeight: 600 }}>GUA Studio</span>
            <span className="muted" style={{ fontSize: 14 }}>Design · Prototyping · Brass · Wood</span>
          </div>
        </div>
      </div>
    </section>
  );
}


function FrameVideo() {
  return (
    <div
      style={{
        position: "relative",
        border: "1px solid rgba(255,255,255,.08)",
        borderRadius: 16,
        overflow: "hidden",
        background: "#0f0f0f",
        minHeight: 380,
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero.png"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "saturate(1.02) contrast(1.02)" }}
      >
        <source src="/hero/9.mp4" type="video/mp4" />
      </video>

      <div
        style={{
          position: "absolute",
          left: 12,
          bottom: 12,
          right: 12,
          padding: "10px 12px",
          borderRadius: 12,
          border: "1px solid rgba(255,255,255,.08)",
          backdropFilter: "blur(6px)",
          background: "rgba(17,17,17,.55)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
        }}
      >
        <span style={{ fontWeight: 600 }}>GUA Studio</span>
        <span className="muted" style={{ fontSize: 14 }}>Design · Prototyping · Brass · Wood</span>
      </div>
    </div>
  );
}

/* ------------------------ OUR SERVICES (ANIM.) ---------------- */
function OurServices() {
  return (
    <section className="section section-dark" style={{ minHeight: "100vh", display: "grid", alignContent: "center" }}>
      <style>{`
        @keyframes floatY { 0% { transform: translateY(0) } 50% { transform: translateY(-6px) } 100% { transform: translateY(0) } }
        .svc-tile { transition: transform .45s ease, opacity .45s ease; opacity:.0; transform: translateY(16px); }
        .svc-tile.show { opacity:1; transform: translateY(0); }
      `}</style>

      <SectionTitle
        eyebrow="Our Services"
        title="From concept to installation"
        desc="Clear deliverables at each stage so you always know what you’ll get."
      />

      <div className="container" style={{ marginTop: 4 }}>
        <ServiceRow
          items={[
            {
              icon: DesignIcon,
              title: "Concept & Detailing",
              desc: "Moodboards, 2D/3D, shop drawings, value engineering.",
            },
            {
              icon: SampleIcon,
              title: "Sampling Lab",
              desc: "Finish cards, stone & brass samples, upholstery swatches.",
            },
          ]}
        />
        <ServiceRow
          delay={120}
          items={[
            {
              icon: BuildIcon,
              title: "Production",
              desc: "Solid wood carpentry, metalwork, stone — hospitality grade QC.",
            },
            {
              icon: InstallIcon,
              title: "Logistics & Install",
              desc: "Export packing, delivery, white-glove assembly and hand-over.",
            },
          ]}
        />
      </div>
    </section>
  );
}

function ServiceRow({ items, delay = 0 }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginTop: 16 }}>
      {items.map((it, i) => (
        <ServiceTile key={i} icon={it.icon} title={it.title} desc={it.desc} delay={delay + i * 80} />
      ))}
    </div>
  );
}

function ServiceTile({ icon: Icon, title, desc, delay = 0 }) {
  const { ref, show } = useReveal();
  return (
    <div
      ref={ref}
      className={`card card-dark svc-tile ${show ? "show" : ""}`}
      style={{
        borderRadius: 16,
        padding: 16,
        border: "1px solid rgba(255,255,255,.08)",
        background: "linear-gradient(180deg,#121212,#0e0e0e)",
        animation: "floatY 6s ease-in-out infinite",
        animationDelay: `${Math.max(0, delay) / 1000}s`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Icon />
        <strong>{title}</strong>
      </div>
      <p className="muted" style={{ marginTop: 8 }}>{desc}</p>
    </div>
  );
}

/* ------------------------ PRODUCTS ---------------------------- */
const productItems = [
  { title: "Alaaddin Lounge Chair", tag: "Walnut · Nubuck", img: "/alaaddin.png" },
  { title: "Mossi Side Table", tag: "Onyx · Brass", img: "/prod-luma.jpg" },
  { title: "Pablo Chair", tag: "Marble · Brass", img: "/pablo.png" },
  { title: "Oxa Dining", tag: "Oak · Leather", img: "/oxa-3 copy.jpg" },
];

function Products() {
  return (
    <section id="products" className="section" style={{ minHeight: "100vh", display: "grid", alignContent: "center" }}>
      <SectionTitle
        eyebrow="Collection"
        title="Signature Products"
        desc="Best-sellers tailored to your finishes and dimensions."
      />
      <div className="grid container" style={{ marginTop: 6 }}>
        {productItems.map((p, i) => (
          <Link key={i} className="card" to="/contact">
            <div className="card-media">
              <img src={p.img} alt={p.title} />
            </div>
            <div className="card-body">
              <h3>{p.title}</h3>
              <span className="muted">{p.tag}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ------------------------ PROJECTS ---------------------------- */
const projectItems = [
  { title: "Palm Jumeirah Residence", img: "/otel-projesi-model-1-min.jpg" },
  { title: "Downtown Dubai Penthouse", img: "/otel-dekorasyon-fikirleri-10.jpg" },
  { title: "Bodrum Seafront Villa", img: "/Sheraton-Batumi-Hotel-13-min.jpg" },
  { title: "Modern Istanbul Flat", img: "/otel-dekor-tadilat-11.jpg" },
];

function Projects() {
  return (
    <section id="projects" className="section section-dark" style={{ minHeight: "100vh", display: "grid", alignContent: "center" }}>
      <SectionTitle
        eyebrow="Projects"
        title="Spaces with a Signature"
        desc="Selected residential and hospitality installs."
      />
      <div className="grid container" style={{ marginTop: 6 }}>
        {projectItems.map((p, i) => (
          <div key={i} className="card card-dark">
            <div className="card-media">
              <img src={p.img} alt={p.title} />
            </div>
            <div className="card-body">
              <h3>{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------ CONTACT CTA ------------------------- */
function Contact() {
  return (
    <section id="contact" className="section" style={{ minHeight: "100vh", display: "grid", alignContent: "center" }}>
      <div className="container contact">
        <div>
          <h2>Let’s craft your signature piece</h2>
          <p className="muted">Share your moodboard, dimensions, and preferred finishes.</p>
        </div>
        <div className="contact-actions">
          <a className="btn btn-gold" href="mailto:hello@guadesign.com">Email Us</a>
          <a className="btn btn-ghost" href="https://wa.me/905555555555" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------ ICONS ------------------------------- */
function DesignIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ opacity: .9 }}>
      <path d="M4 19.5V8a2 2 0 0 1 2-2h6.5M8 16h8M8 12h10M15 3l6 6" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M15 3v6h6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
function SampleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ opacity: .9 }}>
      <rect x="3" y="5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <rect x="13" y="11" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M11 9h2M13 9V7" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  );
}
function InstallIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ opacity: .9 }}>
      <path d="M4 20v-4a2 2 0 0 1 2-2h2l3-3 3 3h2a2 2 0 0 1 2 2v4" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="12" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  );
}
function BuildIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ opacity:.9 }}>
      <path d="M3 21h18M6 17l6-6 4 4 4-8-8 4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

/* ------------------------ PAGE EXPORT ------------------------- */
export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <OurServices />
      <Products />
      <Projects />
      <Contact />
    </>
  );
}
