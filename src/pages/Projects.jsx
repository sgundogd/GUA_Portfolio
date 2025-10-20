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
  { title: "Palm Jumeirah Residence", category: "hotel",  img: "/projects/hotel.jpg",        desc: "Walnut & marble suite with ocean view." },
  { title: "Downtown Dubai Office",   category: "office", img: "/projects/ofice.jpg",  desc: "Minimal brass & stone workspace." },
  { title: "Bodrum Seafront Villa",   category: "home",   img: "/projects/house.jpg",  desc: "Mediterranean oak interiors." },
  { title: "Soho Lounge & Bar",       category: "cafe-restaurant", img: "/projects/cafe.jpg", desc: "Custom seating & ambient lighting." },
];

const references = [
  { name: "Emaar",    logo: "/logo/atakoy-logo.png" },
  { name: "Jumeirah", logo: "/logo/images.png" },
  { name: "Marriott", logo: "/logo/images (2).jpeg" },
  { name: "Rixos",    logo: "/logo/referans1.jpg" },
  { name: "Fabay",    logo: "/logo/images.jpeg" },
];

function ProjectCard({ item }) {
  return (
    <div className="card card-dark">
      <div className="card-media">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="card-body">
        <h3 style={{ marginBottom: 6 }}>{item.title}</h3>
        <span className="muted" style={{ fontSize: 14 }}>{item.desc}</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const { search } = useLocation();
  const selected = new URLSearchParams(search).get("cat"); // ?cat=hotel

  const visible = selected ? projects.filter(p => p.category === selected) : projects;

  return (
    <main className="section section-dark" style={{ paddingTop: 56 }}>
      {/* Intro */}
      <div className="container" style={{ textAlign: "center", marginBottom: 28 }}>
        <span className="eyebrow">Work</span>
        <h1
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(32px,4.5vw,48px)",
            margin: "8px 0 12px",
          }}
        >
          Signature Projects
        </h1>
        <p className="muted" style={{ maxWidth: 720, margin: "0 auto" }}>
          Residential & hospitality spaces across GCC and Europe.
        </p>
      </div>

      {/* References + CTA (çakışma yok) */}
      {/* References + CTA (label solda, logolar ortada, CTA sağda) */}
      <div className="project-refs container">
        <span className="refs-label muted">Selected References</span>

        <div className="refs-logos refs-logos--center">
          {references.map((r, i) => (
          <span key={i} className="ref-logo">
        <img src={r.logo} alt={r.name} />
      </span>
    ))}
  </div>

  <Link to="/contact" className="btn btn-gold project-refs-cta">
    Request Portfolio PDF
  </Link>
</div>


      {/* Kategori filtre pill'leri */}
      <div className="catbar catbar-projects container">
        <Link to="/projects" className={`pill ${!selected ? "active" : ""}`}>All</Link>
        {categories.map(c => (
          <Link
            key={c.slug}
            to={`/projects?cat=${c.slug}`}
            className={`pill ${selected === c.slug ? "active" : ""}`}
          >
            {c.label}
          </Link>
        ))}
      </div>

      {/* Filtrelenmiş projeler */}
      <section className="container" style={{ marginTop: 10 }}>
        {visible.length === 0 ? (
          <div className="card card-dark" style={{ padding: 18, textAlign: "center" }}>
            <strong>No projects found</strong>
            <p className="muted" style={{ marginTop: 6 }}>
              Try a different category or <Link className="link-ghost" to="/contact">request our full portfolio</Link>.
            </p>
          </div>
        ) : (
          <div className="grid">
            {visible.map((p, i) => (
              <ProjectCard key={`${p.title}-${i}`} item={p} />
            ))}
          </div>
        )}
      </section>

      {/* (Opsiyonel) Kategoriye göz at: Eğer istersen bu bloğu aç */}
      {/*
      <section className="container" style={{ marginTop: 28 }}>
        <div className="grid">
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
      */}

      {/* Alt CTA */}
      <div className="promise" style={{ marginTop: 48 }}>
        <div className="container promise-inner">
          <div>
            <h3>From concept to installation</h3>
            <p className="muted">Design, production, and white-glove setup.</p>
          </div>
          <Link className="btn btn-gold" to="/contact">Start Your Project</Link>
        </div>
      </div>
    </main>
  );
}
