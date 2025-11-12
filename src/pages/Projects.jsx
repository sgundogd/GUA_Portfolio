import { Link, useSearchParams } from "react-router-dom";
import "../app.css";
import "../styles/projects.css";

export default function Projects() {
  const [params] = useSearchParams();
  const active = (params.get("cat") || "").toLowerCase();

  const CATEGORIES = [
    { key: "hotel",           title: "Hotels",            to: "/projects/hotel",           img: "/projects/hotel.avif",  blurb: "Hospitality & accommodation spaces",            icon: HotelIcon },
    { key: "business",        title: "Business",          to: "/projects/business",        img: "/projects/office.jpg", blurb: "Corporate and office interiors",                icon: BusinessIcon },
    { key: "home",            title: "Home",              to: "/projects/home",            img: "/projects/home.jpg",   blurb: "Luxury residential and living spaces",          icon: HomeIcon },
    { key: "cafe-restaurant", title: "Cafe / Restaurant", to: "/projects/cafe-restaurant", img: "/projects/cafe.jpg",   blurb: "Dining, lounge, and F&B environments",          icon: CafeIcon },
    { key: "vision",          title: "GUA Vision",        to: "/projects/vision",          img: "/projects/vision.jpg", blurb: "Moodboards, lookbooks, and concept direction", icon: MoodboardIcon },
  ];

  return (
    <section className="section projects-landing">
      <div className="container">
        <header className="proj-head">
          <span className="eyebrow">PROJECTS</span>
          <h1>Select a category</h1>
          <p className="muted">Explore sample works, material language, and typical scope for each space type.</p>
        </header>

        <div className="proj-grid" role="list">
          {CATEGORIES.map((c) => (
            <Link
              key={c.key}
              to={c.to}
              role="listitem"
              className={`proj-tile ${active === c.key ? "on" : ""}`}
              aria-label={`${c.title} — view related projects`}
            >
              <span className="proj-bg" style={{ backgroundImage: `url(${c.img})` }} aria-hidden />
              <span className="proj-glass" aria-hidden />
              <div className="proj-body">
                <span className="proj-icon" aria-hidden><c.icon /></span>
                <h3>{c.title}</h3>
                <p className="muted">{c.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------- Brass line ikonlar (SVG) ---------- */
function MoodboardIcon(){
  return (
    <svg viewBox="0 0 24 24" className="ico" fill="none">
      <rect x="3"  y="4"  width="8" height="7"  rx="1.4" stroke="currentColor" strokeWidth="1.6"/>
      <rect x="3"  y="13" width="8" height="7"  rx="1.4" stroke="currentColor" strokeWidth="1.6"/>
      <rect x="13" y="4"  width="8" height="8"  rx="1.4" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M17 14.5l.9 1.9 1.9.9-1.9.9-.9 1.9-.9-1.9-1.9-.9 1.9-.9.9-1.9Z"
            stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  );
}
function HotelIcon(){ return (<svg viewBox="0 0 24 24" className="ico" fill="none"><path d="M3 19V6M21 19V9a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3" stroke="currentColor" strokeWidth="1.6"/><path d="M6 13h12a3 3 0 0 1 3 3v3H3v-3a3 3 0 0 1 3-3Z" stroke="currentColor" strokeWidth="1.6"/><path d="M7.5 9h3M13.5 9h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>); }
function BusinessIcon(){ return (<svg viewBox="0 0 24 24" className="ico" fill="none"><rect x="4" y="4" width="8" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.6"/><rect x="12" y="9" width="8" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.6"/><path d="M7 8h2M7 11h2M7 14h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>); }
function HomeIcon(){ return (<svg viewBox="0 0 24 24" className="ico" fill="none"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1v-9.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>); }
function CafeIcon(){ return (<svg viewBox="0 0 24 24" className="ico" fill="none"><path d="M5 8h11a3 3 0 1 0 0 6H5V8Z" stroke="currentColor" strokeWidth="1.6"/><path d="M5 14v1a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4v-1" stroke="currentColor" strokeWidth="1.6"/><path d="M8 5s.8.6 0 1.6M11 5s.8.6 0 1.6M14 5s.8.6 0 1.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>); }
