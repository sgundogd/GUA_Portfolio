import { Link, useParams, useNavigate } from "react-router-dom";
import "../app.css";
import "../styles/project-detail.css";
import { PROJECTS_DATA } from "../data/projectsData";
import { useEffect, useState, useCallback } from "react";

export default function ProjectDetail() {
  const { cat, slug } = useParams();
  const navigate = useNavigate();

  const catData = PROJECTS_DATA[cat];
  const proj = catData?.projects.find(p => p.slug === slug);

  const [lightbox, setLightbox] = useState({ open: false, idx: 0 });

  const openAt = (i) => setLightbox({ open: true, idx: i });
  const closeLB = () => setLightbox({ open: false, idx: 0 });

  const prev = useCallback(() => {
    if (!proj) return;
    setLightbox(s => ({ open: true, idx: (s.idx - 1 + proj.images.length) % proj.images.length }));
  }, [proj]);

  const next = useCallback(() => {
    if (!proj) return;
    setLightbox(s => ({ open: true, idx: (s.idx + 1) % proj.images.length }));
  }, [proj]);

  // klavye kısayolları
  useEffect(() => {
    if (!lightbox.open) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLB();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox.open, prev, next]);

  if (!proj) {
    return (
      <section className="section pd">
        <div className="container">
          <div className="pd-head">
            <span className="eyebrow">PROJECT</span>
            <h1>Not found</h1>
            <p className="muted">
              Proje bulunamadı.{" "}
              <Link className="link-ghost" to={`/projects/${cat || ""}`}>Kategoriye dön</Link>.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section pd">
      <div className="container">
        {/* Üst bar: sadece geri butonu (yazısız galeri istediğin için minimal tuttum) */}
        <div className="pd-bar">
          <button className="icon-btn" onClick={() => navigate(-1)} aria-label="Geri dön">←</button>
          <div style={{ flex: 1 }} />
          <Link className="btn btn-ghost" to={`/projects/${cat}`}>Back to {PROJECTS_DATA[cat].title}</Link>
        </div>

        {/* YAZISIZ yalnızca görsellerin olduğu galeri grid */}
        <div className="pd-grid" role="list">
          {proj.images.map((src, i) => (
            <button
              key={i}
              className="pd-tile"
              role="listitem"
              onClick={() => openAt(i)}
              aria-label={`Görüntüyü aç ${i + 1}`}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX — tam ekran, yazısız */}
      {lightbox.open && (
        <div className="lb" role="dialog" aria-modal="true" onClick={closeLB}>
          <div className="lb-inner" onClick={(e) => e.stopPropagation()}>
            <img src={proj.images[lightbox.idx]} alt="" />
            <button className="lb-close" onClick={closeLB} aria-label="Kapat">✕</button>
            <button className="lb-prev" onClick={prev} aria-label="Önceki">‹</button>
            <button className="lb-next" onClick={next} aria-label="Sonraki">›</button>
          </div>
        </div>
      )}
    </section>
  );
}
