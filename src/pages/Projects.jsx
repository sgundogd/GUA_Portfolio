import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../app.css";

const categories = [
  { slug: "hotel", label: "Hotel", img: "/projects/hotel.jpg" },
  { slug: "office", label: "Office", img: "/projects/ofice.jpg" },
  { slug: "home", label: "Home", img: "/projects/house.jpg" },
  { slug: "cafe-restaurant", label: "Cafe / Restaurant", img: "/projects/cafe.jpg" },
];

const projects = [
  {
    title: "Palm Jumeirah Residence",
    category: "hotel",
    img: "/projects/hotel.jpg",
    desc: "Walnut & marble suite with ocean view.",
  },
  {
    title: "Downtown Dubai Office",
    category: "office",
    img: "/projects/dubai-office.jpg",
    desc: "Minimal brass & stone workspace.",
  },
  {
    title: "Bodrum Seafront Villa",
    category: "home",
    img: "/projects/bodrum-villa.jpg",
    desc: "Mediterranean oak interiors.",
  },
  {
    title: "Soho Lounge & Bar",
    category: "cafe-restaurant",
    img: "/projects/soho-lounge.jpg",
    desc: "Custom seating & ambient lighting.",
  },
  // İstersen daha fazla örnek eklersin
];

const references = [
  { name: "Emaar", logo: "/logo/atakoy-logo.png" },
  { name: "Jumeirah", logo: "/logo/images.png" },
  { name: "Marriott", logo: "/logo/images (2).jpeg" },
  { name: "Rixos", logo: "/logo/referans1.jpg" },
  { name: "Fabay", logo: "/logo/images.jpeg" },
];

export default function Projects() {
  const { search } = useLocation();
  const selected = new URLSearchParams(search).get("cat"); // ?cat=hotel gibi

  const visible = selected
    ? projects.filter(p => p.category === selected)
    : projects;

  return (
    <main className="section section-dark">
      {/* Intro / başlık */}
      <div className="container" style={{ textAlign: "center", marginBottom: 48 }}>
        <span className="eyebrow">Work</span>
        <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(32px,4.5vw,48px)", margin: "8px 0 12px" }}>
          Signature Projects
        </h1>
        <p className="muted" style={{ maxWidth: 720, margin: "0 auto" }}>
          Residential & hospitality spaces across GCC and Europe.
        </p>
      </div>

      <section className="refs">
        <div className="container refs-inner">
          <span className="muted">Selected References</span>
          <div className="refs-logos">
            {references.map((r, i) => (
              <div key={i} className="ref-logo">
                <img src={r.logo} alt={r.name} />
              </div>
            ))}
          </div>
          <Link to="/contact" className="btn btn-gold btn-sm">Request Portfolio PDF</Link>
        </div>
      </section>

      {/* Kategoriler – ayrı sayfaya/filtreye gidebileceğimiz alan */}
      <section className="container" style={{ marginBottom: 28 }}>
        <div className="catbar">
          <Link to="/projects" className={`pill ${!selected ? "active" : ""}`}>All</Link>
          {categories.map(c => (
            <Link key={c.slug} to={`/projects?cat=${c.slug}`} className={`pill ${selected === c.slug ? "active" : ""}`}>
              {c.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Kategori kartları – “kategoriler sayfasına gidebilme” için görsel giriş */}
      <section className="container" style={{ marginBottom: 48 }}>
        <div className="grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
          {categories.map((c, i) => (
            <Link key={i} to={`/projects?cat=${c.slug}`} className="card card-dark">
              <div className="card-media">
                <img src={c.img} alt={c.label} />
              </div>
              <div className="card-body">
                <h3>{c.label}</h3>
                <span className="muted">Browse {c.label} projects</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Referanslar / güven göstergesi */}

      {/* Alt CTA */}
      <div className="promise" style={{ marginTop: 64 }}>
        <div className="container promise-inner">
          <div>
            <h3>From Concept to Installation</h3>
            <p className="muted">Design, production, and white-glove setup.</p>
          </div>
          <Link className="btn btn-gold" to="/contact">Start Your Project</Link>
        </div>
      </div>
    </main>
  );
}
