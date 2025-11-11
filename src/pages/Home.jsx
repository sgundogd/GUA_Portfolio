import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "../app.css";
import "../styles/home.css";

/* ---------------------------- HERO ---------------------------- */
function Hero() {
  return (
    <section className="hero hero--fullscreen">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/hero/8.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-content container">
        <h1>
          Furniture that <span className="accent">Shapes</span> the Space
        </h1>
        <p>Design-to-install solutions for residences, hotels, and commercial spaces.</p>
        <div className="hero-cta">
          <Link className="btn btn-gold" to="/products">Explore Collection</Link>
          <Link className="btn btn-ghost" to="/projects">View Projects</Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------ UTILITIES --------------------------- */
function SectionTitle({ eyebrow, title, desc, align = "center" }) {
  return (
    <div className="section-title container" style={{ textAlign: align }}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2 style={{ marginTop: 8 }}>{title}</h2>}
      {desc && <p className="muted" style={{ marginTop: 6 }}>{desc}</p>}
    </div>
  );
}
function useReveal() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setShow(true), { threshold: 0.2 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, show };
}

/* ========== REFERENCES (3D EMBOSSED BAND) — GAPLESS MARQUEE ========== */
function References3D() {
  const logos = [
    { name: "Açı Koleji",     src: "/logo/açı.png" },
    { name: "Ağaoğlu",     src: "/logo/agaoglu.png" },
    { name: "Atlas Üniversitesi",     src: "/logo/atlas.png" },
    { name: "Avansas",     src: "/logo/avansas.png" },
    { name: "Madam Coco",     src: "/logo/coco.png" },
    { name: "Hilton",     src: "/logo/hilton.png" },
    { name: "Işık Okulları",     src: "/logo/ışık.png" },
    { name: "Kavan Yapı",     src: "/logo/kavan.png" },
    { name: "Kemer Country Club",     src: "/logo/kemer.png" },
    { name: "Koç Hoilding",     src: "/logo/koç.png" },
    { name: "Koton",     src: "/logo/koton.png" },
    { name: "Merit",     src: "/logo/merit.png" },
    { name: "Nef",     src: "/logo/nef.webp" },
     { name: "LC Waikiki",     src: "/logo/lcw.png" },
    { name: "Şua İnşaat",     src: "/logo/şua.png" },
    { name: "Huqqabaz",     src: "/logo/huqq.png" },
  ];

  // Her group içinde logoları 3 kez tekrar et (genişlik daima yeterli olsun)
  const groupItems = [...logos, ...logos, ...logos];

  const Group = ({ idx }) => (
    <div className="refs3d-group" aria-hidden={idx !== 0}>
      {groupItems.map((l, i) => (
        <div key={`${idx}-${i}`} className="refs3d-item" role="listitem" title={l.name}>
          <img src={l.src} alt={l.name} />
        </div>
      ))}
    </div>
  );

  return (
    <section className="section refs3d">
      <div className="container">
        <div className="refs3d-head">
          <span className="eyebrow">REFERENCES</span>
          <h2>Trusted by partners</h2>
        </div>

        <div className="refs3d-band">
          <div className="refs3d-vignette" aria-hidden />
          <div className="refs3d-track marquee" role="list" aria-label="Partner logos scrolling marquee">
            <Group idx={0} />
            <Group idx={1} />
          </div>
        </div>

        <div className="refs3d-foot muted">
          Selected brands &amp; developers we’ve collaborated with.
        </div>
      </div>
    </section>
  );
}

/* ------------------------ WHO WE ARE (ENGLISH TEXTS) -------------------------- */



function WhoWeAre() {
  return (
    <section className="section vh-section">
      <div className="container wwd">
        <div className="wwd-copy">
          {/* Başlık */}
          <span className="eyebrow">WHAT WE DO</span>
          <h2 className="wwd-title">GUA — Where Design Meets Flawless Execution.</h2>

          {/* Kısa giriş */}
          <p className="wwd-intro">
            Since 1998, we’ve evolved beyond bespoke furniture manufacturing to become
            <strong> Global Fit-Out Specialists</strong>. We manage the full journey — from initial
            design to professional on-site installation — and deliver internationally.
          </p>

          {/* Ana odak etiketleri */}
          <div className="highlight-bar">
            <span className="tag">Bespoke Furniture</span>
            <span className="tag">Global Fit-Out</span>
            <span className="tag">End-to-End Solutions</span>
          </div>

          {/* Özet maddeler */}
          <ul className="list-plain wwd-points">
            <li><strong><span className="gold">1998</span></strong> — 25+ years of practice.</li>
            <li><strong><span className="gold">Design &amp; Build</span></strong> — Custom furniture and turnkey fit-out.</li>
            <li><strong><span className="gold">International</span></strong> — Projects delivered across multiple countries.</li>
            <li><strong><span className="gold">Sectors</span></strong> — Luxury Residential · Hospitality · Office · Retail/F&amp;B.</li>
          </ul>

          {/* Aksiyon */}
          <div className="wwd-cta">
            <Link className="btn btn-gold" to="/contact">Start Your Brief</Link>
            <Link className="btn btn-ghost" to="/projects">View Our Projects</Link>
          </div>
        </div>

        {/* Medya alanı */}
        <div className="wwd-media">
          <video className="wwd-video" autoPlay muted loop playsInline poster="/hero.png">
            <source src="/hero/9.mp4" type="video/mp4" />
          </video>
          <div className="wwd-glass">
            <span style={{ fontWeight: 600 }}>GUA Design</span>
            <span className="muted" style={{ fontSize: 14 }}>Design · Production · Installation</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= our services (carousel) ================= */

function OurServices() {
  const slides = [
    {
      key: "design",
      title: "Design & Concept Development",
      //desc: "We translate ideas into refined concepts, blending aesthetics with function from the very start.",
      img: "/home/services/1.png",
    },
    {
      key: "craft",
      title: "Production & Craftsmanship",
      //desc: "Every piece is made-to-measure with precision, using the finest materials and expert craftsmanship.",
      img: "/home/services/2.png",
    },
    {
      key: "install",
      title: "Delivery & Installation",
      //desc: "From packing to on-site setup, we ensure seamless delivery and flawless installation worldwide.",
      img: "/home/services/5.png",
    },
    {
      key: "pm",
      title: "Project Management",
      //desc: "A dedicated team oversees every phase, guaranteeing on-time execution and consistent quality.",
      img: "/home/services/4.png",
    },
  ];

  const [i, setI] = useState(0);
  const len = slides.length;
  const timer = useRef(null);
  const viewportRef = useRef(null);
  const touchRef = useRef({ x: 0, y: 0, active: false });

  const go = (n) => setI((prev) => (prev + n + len) % len);
  const to = (idx) => setI(((idx % len) + len) % len);

  const startAuto = () => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;
    stopAuto();
    timer.current = window.setInterval(() => go(1), 4500);
  };
  const stopAuto = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  };

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) return;

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? startAuto() : stopAuto()),
      { threshold: 0.3 }
    );
    io.observe(node);

    const onVis = () => (document.hidden ? stopAuto() : startAuto());
    document.addEventListener("visibilitychange", onVis);

    startAuto();
    return () => {
      stopAuto();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onTouchStart = (e) => {
    const t = e.touches[0];
    touchRef.current = { x: t.clientX, y: t.clientY, active: true };
    stopAuto();
  };
  const onTouchEnd = (e) => {
    const t0 = touchRef.current;
    if (!t0.active) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - t0.x;
    const dy = t.clientY - t0.y;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      go(dx < 0 ? 1 : -1);
    }
    touchRef.current.active = false;
    startAuto();
  };

  return (
    <section className="why why--services">
      <div className="container" style={{ marginBottom: 18 }}>
        <span className="eyebrow">OUR SERVICES</span>
        <h2 className="why-title">From concept to completion</h2>
      </div>

      <div
        className="why-viewport"
        ref={viewportRef}
        onMouseEnter={stopAuto}
        onMouseLeave={startAuto}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        role="region"
        aria-roledescription="carousel"
        aria-label="Our services carousel"
      >
        <div
          className="why-track"
          style={{ transform: `translateX(-${i * 100}%)` }}
          aria-live="polite"
        >
          {slides.map((s, idx) => (
            <div
              key={s.key}
              className="why-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${idx + 1} of ${len}: ${s.title}`}
            >
              <div className="why-media">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="why-overlay" />
              <div className="why-caption">
                <h3>{s.title}</h3>
                <p className="muted">{s.desc}</p>
              </div>

              <button
                type="button"
                className="why-arrow left"
                aria-label="Previous slide"
                onClick={() => go(-1)}
              >
                ‹
              </button>
              <button
                type="button"
                className="why-arrow right"
                aria-label="Next slide"
                onClick={() => go(1)}
              >
                ›
              </button>
            </div>
          ))}
        </div>

        <div className="why-dots" role="tablist" aria-label="Choose slide">
          {slides.map((s, idx) => (
            <button
              type="button"
              key={s.key}
              role="tab"
              aria-selected={idx === i ? "true" : "false"}
              aria-current={idx === i ? "true" : "false"}
              className={`dot ${idx === i ? "on" : ""}`}
              aria-label={`Go to slide ${idx + 1}: ${s.title}`}
              onClick={() => to(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



/* ------------------------ WHY GUA — Part II (Text Showcase) ------------------------ */
function WhyGUAPart2() {
  const items = [
    {
      k: "materials",
      title: "Material & Color Flexibility",
      desc: "Wood, metal, stone, glass, leather, or fabric — every tone and texture is refined together through material samples.",
      tags: ["Wood · Metal · Stone", "Color / tone sampling", "Surface matching"]
    },
    {
      k: "made-to-measure",
      title: "Made-to-Measure Precision",
      desc: "Each module is custom-fit to architectural dimensions, considering doors, niches, and technical constraints.",
      tags: ["Modular variations", "Section detailing", "Site tolerance"]
    },
    {
      k: "end-to-end",
      title: "End-to-End Project Flow",
      desc: "Concept → shop drawings → prototype → production → logistics → installation — one team, one timeline.",
      tags: ["Single responsibility", "QC checkpoints", "Clear delivery plan"]
    },
    {
      k: "install",
      title: "On-Site Installation Team",
      desc: "From site measurement to white-glove installation, every project is handed over in fully operational condition.",
      tags: ["Site survey", "Professional assembly", "Clean handover"]
    },
    {
      k: "regions",
      title: "Global Operations",
      desc: "With dedicated teams in Istanbul and Dubai, logistics and customs processes run seamlessly and securely.",
      tags: ["Multi-location experience", "Documentation", "On-time delivery"]
    },
    {
      k: "after",
      title: "After-Sales Support",
      desc: "Maintenance, repair, or replacement — our service team operates under defined SLAs with guaranteed response times.",
      tags: ["Quick response", "Part traceability", "Warranty-grade workmanship"]
    },
  ];

  return (
    <section className="why2-rail">
      <div className="container">
        <header className="w2r-head">
          <span className="eyebrow">WHY GUA</span>
          <h2>Principles We Build By</h2>
          <p className="muted">
            Each card reflects a core value of how we design, build, and deliver — precision, clarity, and consistency in every detail.
          </p>
        </header>

        <div className="w2r-viewport" role="list" aria-label="GUA core principles">
          <div className="w2r-track">
            {items.map((it, idx) => (
              <article key={it.k} className="w2r-card" role="listitem" tabIndex={0}>
                <span className="w2r-no">0{idx + 1}</span>
                <h3 className="w2r-title">{it.title}</h3>
                <p className="w2r-desc muted">{it.desc}</p>
                <ul className="w2r-tags">
                  {it.tags.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
                <span className="w2r-sheen" aria-hidden />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/* ------------------------ OUR SERVICES ------------------------ */
/* function OurServices() {
  return (
    <section className="section section-dark" style={{ minHeight: "100vh", display: "grid", alignContent: "center" }}>
      <style>{`
        @keyframes floatY { 0% { transform: translateY(0) } 50% { transform: translateY(-6px) } 100% { transform: translateY(0) } }
        .svc-tile { transition: transform .45s ease, opacity .45s ease; opacity:.0; transform: translateY(16px); }
        .svc-tile.show { opacity:1; transform: translateY(0); }
      `}</style>

      <SectionTitle
        eyebrow="OUR SERVICES"
        title="From concept to hand-over"
        desc="Clear deliverables at each stage — you always know what’s next."
      />

      <div className="container" style={{ marginTop: 4 }}>
        <ServiceRow items={[
          { icon: DesignIcon,  title: "Concept & Detailing", desc: "Brief, moodboards, 2D/3D development, shop drawings, value engineering." },
          { icon: SampleIcon,  title: "Prototyping",         desc: "Mock-ups and sampling to validate proportion, comfort and finish." },
        ]} />
        <ServiceRow delay={120} items={[
          { icon: BuildIcon,   title: "Production",          desc: "Joinery, finishing, upholstery and metalwork with hospitality-grade QC." },
          { icon: InstallIcon, title: "Delivery & Install",  desc: "Export packing, logistics, on-site installation and hand-over." },
        ]} />
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
}*/
/* ------------------------ PRODUCTS ---------------------------- */
const productItems = [
  { title: "Alaaddin Lounge Chair", tag: "Customisable dimensions & finishes", img: "/alaaddin.png" },
  { title: "Mossi Side Table",      tag: "Made to order",                      img: "/prod-luma.jpg" },
  { title: "Pablo Chair",           tag: "Option for COM/finish",              img: "/pablo.png" },
  { title: "Oxa Dining",            tag: "Sizes on request",                   img: "/oxa-3 copy.jpg" },
];

function Products() {
  return (
    <section
      id="products"
      className="section"
      style={{ minHeight: "100vh", display: "grid", alignContent: "center" }}
    >
      <div className="container section-head">
        <span className="eyebrow">COLLECTION</span>

        <div className="head-row">
          <h2 className="head-title">Selected Products</h2>
          <Link to="/products" className="see-all" aria-label="See all products">
            See all →
          </Link>
        </div>

        <p className="head-desc muted">
          Adaptable to your dimensions and finish schedule.
        </p>
      </div>

      <div className="grid container" style={{ marginTop: 6 }}>
        {productItems.map((p, i) => (
          <Link key={i} className="card" to="/products">
            <div className="card-media"><img src={p.img} alt={p.title} /></div>
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
  { title: "Bodrum Seafront Villa",    img: "/Sheraton-Batumi-Hotel-13-min.jpg" },
  { title: "Modern Istanbul Flat",     img: "/otel-dekor-tadilat-11.jpg" },
];

function Projects() {
  return (
    <section
      id="projects"
      className="section section-dark"
      style={{ minHeight: "100vh", display: "grid", alignContent: "center" }}
    >
      <div className="container section-head">
        <span className="eyebrow">PROJECTS</span>

        <div className="head-row">
          <h2 className="head-title">Recent Work</h2>
          <Link to="/projects" className="see-all" aria-label="See all projects">
            See all →
          </Link>
        </div>

        <p className="head-desc muted">
          Selected residential and hospitality installs.
        </p>
      </div>

      <div className="grid container" style={{ marginTop: 6 }}>
        {projectItems.map((p, i) => (
          <div key={i} className="card card-dark">
            <div className="card-media"><img src={p.img} alt={p.title} /></div>
            <div className="card-body"><h3>{p.title}</h3></div>
          </div>
        ))}
      </div>
    </section>
  );
}


/* ------------------------ CONTACT CTA ------------------------- */
function Contact() {
  return (
    <section id="contact" className="section section-dark" style={{ paddingBlock: "60px", background: "#0b0b0b", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="container contact" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
        <div style={{ maxWidth: 520 }}>
          <h2 style={{ fontSize: "1.9rem", marginBottom: 6 }}>Tell us about your project</h2>
          <p className="muted" style={{ fontSize: 15 }}>Share a brief or drawings. We’ll reply with options, costs and a timeline.</p>
        </div>
        <div className="contact-actions" style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a className="btn btn-gold" href="mailto:hello@guadesign.com" style={{ fontWeight: 500 }}>Email</a>
          <a className="btn btn-ghost" href="https://wa.me/905555555555" target="_blank" rel="noreferrer" style={{ fontWeight: 500 }}>WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------ PAGE EXPORT ------------------------- */
export default function Home() {
  return (
    <>
      <Hero />
      <References3D />
      <WhoWeAre />
      <OurServices/>
      <WhyGUAPart2/>
      <Products />
      <Projects />
      <Contact />
    </>
  );
}

/* ------------------------ ICONS ------------------------------- */
function DesignIcon(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{opacity:.9}}><path d="M4 19.5V8a2 2 0 0 1 2-2h6.5M8 16h8M8 12h10M15 3l6 6" stroke="currentColor" strokeWidth="1.4"/><path d="M15 3v6h6" stroke="currentColor" strokeWidth="1.4"/></svg>)}
function SampleIcon(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{opacity:.9}}><rect x="3" y="5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><rect x="13" y="11" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><path d="M11 9h2M13 9V7" stroke="currentColor" strokeWidth="1.4"/></svg>)}
function InstallIcon(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{opacity:.9}}><path d="M4 20v-4a2 2 0 0 1 2-2h2l3-3 3 3h2a2 2 0 0 1 2 2v4" stroke="currentColor" strokeWidth="1.4"/><circle cx="12" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.4"/></svg>)}
function BuildIcon(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{opacity:.9}}><path d="M3 21h18M6 17l6-6 4 4 4-8-8 4" stroke="currentColor" strokeWidth="1.4"/></svg>)}
