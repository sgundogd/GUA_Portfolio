import { Link, useParams } from "react-router-dom";
import "../app.css";
import "../styles/project-category.css";
import { PROJECTS_DATA } from "../data/projectsData";

export default function ProjectCategory() {
  const { cat } = useParams();
  const data = PROJECTS_DATA[cat];

  if (!data) {
    return (
      <section className="section cat">
        <div className="container">
          <div className="cat-head">
            <span className="eyebrow">PROJECTS</span>
            <h1>Category not found</h1>
            <p className="muted">
              The category you’re looking for could not be found.{" "}
              <Link className="link-ghost" to="/projects">Return to Projects</Link>.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section cat">
      <div className="container">
        {/* Back button — üstte, sol köşede */}
        <div className="cat-topbar">
          <Link to="/projects" className="btn btn-ghost back-btn">← Back to categories</Link>
        </div>

        {/* Başlık alanı */}
        <div className="cat-head">
          <span className="eyebrow">PROJECTS</span>
          <h1>{data.title}</h1>
          <p className="muted">{data.desc}</p>
        </div>

        {/* Grid */}
        <div className="cat-grid">
          {data.projects.map((p, i) => (
            <Link
              key={i}
              to={`/projects/${cat}/${p.slug}`}
              className="cat-card"
              aria-label={`${p.title} gallery`}
            >
              <div className="cat-media">
                <img src={p.cover} alt={p.title} />
              </div>
              <div className="cat-body">
                <h3>{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
