import { Link } from "react-router-dom";
import "../app.css";

function Hero() {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline poster="/hero.png">
        <source src="/hero/9.mp4" type="video/mp4" />
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

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="section-title container">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
    </div>
  );
}

const productItems = [
  { title: "Alaaddin Lounge Chair", tag: "Walnut · Nubuck", img: "/alaaddin.png" },
  { title: "Mossi Side Table", tag: "Onyx · Brass", img: "/prod-luma.jpg" },
  { title: "Pablo Chair", tag: "Marble · Brass", img: "/pablo.png" },
  { title: "Oxa Dining", tag: "Oak · Leather", img: "/oxa-3 copy.jpg" },
];

function Products() {
  return (
    <section id="products" className="section">
      <SectionTitle
        eyebrow="Collection"
        title="Signature Products"
        desc="Best-sellers tailored to your finishes and dimensions."
      />
      <div className="grid container">
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

const projectItems = [
  { title: "Palm Jumeirah Residence", img: "/otel-projesi-model-1-min.jpg" },
  { title: "Downtown Dubai Penthouse", img: "/otel-dekorasyon-fikirleri-10.jpg" },
  { title: "Bodrum Seafront Villa", img: "/Sheraton-Batumi-Hotel-13-min.jpg" },
  { title: "Modern Istanbul Flat", img: "/otel-dekor-tadilat-11.jpg" },
];

function Projects() {
  return (
    <section id="projects" className="section section-dark">
      <SectionTitle
        eyebrow="Projects"
        title="Spaces with a Signature"
        desc="Selected residential and hospitality installs."
      />
      <div className="grid container">
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

function PromiseStrip() {
  return (
    <section className="promise">
      <div className="container promise-inner">
        <div>
          <h3>Crafted to Order</h3>
          <p className="muted">Premium hardwoods · brass · natural stones</p>
        </div>
        <Link className="btn btn-gold" to="/contact">Request Lookbook</Link>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about-text" style={{ gridColumn: "1 / -1" }}>
          <SectionTitle eyebrow="About" title="GUA — Art of Wood & Brass" />
          <p>
            We design and build heirloom-quality pieces with exacting joinery and couture-level upholstery.
            Our studio delivers end-to-end: material sourcing, shop drawings, sampling, production, and
            white-glove installation across GCC and Europe.
          </p>
          <ul className="list">
            <li>Bespoke dimensions & finishes</li>
            <li>Hospitality-grade durability</li>
            <li>International shipping & install</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section section-dark">
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



export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Projects />
      <PromiseStrip />
      <About />
      <Contact />
    </>
  );
}
