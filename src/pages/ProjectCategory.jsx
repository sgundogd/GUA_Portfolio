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
              Aradığınız kategori bulunamadı.{" "}
              <Link className="link-ghost" to="/projects">Projects ana sayfasına dön</Link>.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section cat">
      <div className="container">
        <div className="cat-head">
          <span className="eyebrow">PROJECTS</span>
          <h1>{data.title}</h1>
          <p className="muted">{data.desc}</p>
        </div>

        <div className="cat-grid">
          {data.projects.map((p, i) => (
            <Link
              key={i}
              to={`/projects/${cat}/${p.slug}`}
              className="cat-card"
              aria-label={`${p.title} galerisine git`}
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

        <div className="cat-foot">
          <Link to="/projects" className="btn btn-ghost">← Back to categories</Link>
        </div>
      </div>
    </section>
  );
}
