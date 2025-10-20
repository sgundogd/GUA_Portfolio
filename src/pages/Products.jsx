import React, { useMemo, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../app.css";

/* --- Demo veriler (görselleri public/products/ içine koy) --- */
const ALL_PRODUCTS = [
  {
    slug: "alaaddin-lounge-chair",
    title: "Alaaddin Lounge Chair",
    category: "seating",
    finishes: ["wood", "brass", "leather"],
    img: "/products/5.png",
    blurb: "Low-profile lounge with brushed-brass accents.",
  },
  {
    slug: "pablo-chair",
    title: "Pablo Chair",
    category: "seating",
    finishes: ["wood", "leather"],
    img: "/products/4.png",
    blurb: "Architectural seat with sculpted walnut frame.",
  },
  {
    slug: "mossi-side-table",
    title: "Mossi Side Table",
    category: "tables",
    finishes: ["stone", "brass"],
    img: "/products/3.png",
    blurb: "Onyx top with hand-polished brass base.",
  },
  {
    slug: "oxa-dining",
    title: "Oxa Dining",
    category: "tables",
    finishes: ["wood", "stone"],
    img: "/products/2.png",
    blurb: "Monolithic dining with marble inlay details.",
  },
  {
    slug: "kaia-console",
    title: "Kaia Console",
    category: "storage",
    finishes: ["wood", "brass", "stone"],
    img: "/products/1.png",
    blurb: "Slim console in oak with brass trims.",
  },
  {
    slug: "silva-dresser",
    title: "Silva Dresser",
    category: "storage",
    finishes: ["wood"],
    img: "/products/6.png",
    blurb: "Fluted fronts and solid oak carcass.",
  },
];

const CATEGORIES = [
  { key: "seating", label: "Seating" },
  { key: "tables", label: "Tables" },
  { key: "storage", label: "Storage" },
];

const FINISHES = [
  { key: "wood", label: "Wood" },
  { key: "stone", label: "Stone" },
  { key: "brass", label: "Brass" },
  { key: "leather", label: "Leather" },
];

export default function Products() {
  const { search } = useLocation();
  const navigate = useNavigate();

  // URL parametreleri (örn. /products?cat=seating&f=wood,brass&q=chair&sort=alpha)
  const urlCat  = new URLSearchParams(search).get("cat")  || "all";
  const urlFin  = new URLSearchParams(search).get("f")    || ""; // "wood,brass"
  const urlQ    = new URLSearchParams(search).get("q")    || "";
  const urlSort = new URLSearchParams(search).get("sort") || "featured";

  const [openSpec, setOpenSpec] = useState(null); // slug

  const activeFinishes = useMemo(
    () => (urlFin ? urlFin.split(",").filter(Boolean) : []),
    [urlFin]
  );

  const filtered = useMemo(() => {
    let items = [...ALL_PRODUCTS];

    if (urlCat !== "all") {
      items = items.filter((p) => p.category === urlCat);
    }
    if (activeFinishes.length) {
      items = items.filter((p) => activeFinishes.every((f) => p.finishes.includes(f)));
    }
    if (urlQ) {
      const q = urlQ.toLowerCase();
      items = items.filter(
        (p) => p.title.toLowerCase().includes(q) || p.blurb.toLowerCase().includes(q)
      );
    }
    if (urlSort === "alpha") {
      items.sort((a, b) => a.title.localeCompare(b.title));
    }
    // featured = default sıralama
    return items;
  }, [urlCat, activeFinishes, urlQ, urlSort]);

  function updateParam(next) {
    const params = new URLSearchParams(search);
    for (const [k, v] of Object.entries(next)) {
      if (v === null || v === undefined || v === "" || (Array.isArray(v) && v.length === 0)) {
        params.delete(k);
      } else {
        params.set(k, v);
      }
    }
    navigate(`/products?${params.toString()}`, { replace: false });
  }

  function toggleFinish(finKey) {
    const set = new Set(activeFinishes);
    if (set.has(finKey)) set.delete(finKey);
    else set.add(finKey);
    updateParam({ f: Array.from(set).join(",") });
  }

  return (
    <main className="section">
      {/* Intro */}
      <div className="container" style={{ textAlign: "center", marginBottom: 28 }}>
        <span className="eyebrow">Collection</span>
        <h1
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(32px,4.5vw,48px)",
            margin: "8px 0 12px",
          }}
        >
          Signature Products
        </h1>
        <p className="muted" style={{ maxWidth: 720, margin: "0 auto" }}>
          Tailored to your dimensions and finishes. Browse by category or filter by material; open specs to start your brief.
        </p>
      </div>

      {/* Filter bar */}
      <section className="container product-controls">
        {/* Categories */}
        <div className="catbar">
          <button
            className={`pill ${urlCat === "all" ? "active" : ""}`}
            onClick={() => updateParam({ cat: "all" })}
          >
            All
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              className={`pill ${urlCat === c.key ? "active" : ""}`}
              onClick={() => updateParam({ cat: c.key })}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Right group: search + sort */}
        <div className="controls-right">
          <div className="search">
            <input
              type="search"
              placeholder="Search products…"
              value={urlQ}
              onChange={(e) => updateParam({ q: e.target.value })}
            />
          </div>
          <select
            className="sort"
            value={urlSort}
            onChange={(e) => updateParam({ sort: e.target.value })}
          >
            <option value="featured">Sort: Featured</option>
            <option value="alpha">Sort: A–Z</option>
          </select>
        </div>
      </section>

      {/* Material filters */}
      <section className="container" style={{ marginTop: 10, marginBottom: 12 }}>
        <div className="materials">
          {FINISHES.map((f) => (
            <button
              key={f.key}
              className={`chip ${activeFinishes.includes(f.key) ? "on" : ""}`}
              onClick={() => toggleFinish(f.key)}
              title={f.label}
            >
              <span className={`dot ${f.key}`} />
              {f.label}
            </button>
          ))}
          {activeFinishes.length > 0 && (
            <button className="chip clear" onClick={() => updateParam({ f: "" })}>
              Clear
            </button>
          )}
        </div>
      </section>

      {/* Grid */}
      <section className="container">
        {filtered.length === 0 ? (
          <div className="empty muted">No products found. Try removing a filter.</div>
        ) : (
          <div className="grid">
            {filtered.map((p) => (
              <div key={p.slug} className="card">
                <div className="card-media">
                  <img src={p.img} alt={p.title} />
                </div>
                <div className="card-body">
                  <h3>{p.title}</h3>
                  <div className="finish-row">
                    {p.finishes.map((f) => (
                      <span key={f} className={`dot ${f}`} title={f} />
                    ))}
                    <span className="muted" style={{ marginLeft: 8 }}>
                      {p.blurb}
                    </span>
                  </div>
                  <div className="card-actions">
                    <button className="btn btn-outline" onClick={() => setOpenSpec(p.slug)}>
                      View spec
                    </button>
                    <Link className="btn btn-brass" to={`/contact?product=${p.slug}`}>
                      Request quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Spec Modal (centered) */}
      {openSpec && (
        <SpecDrawer
          product={ALL_PRODUCTS.find((x) => x.slug === openSpec)}
          onClose={() => setOpenSpec(null)}
        />
      )}

      {/* Bottom CTA */}
      <div className="promise" style={{ marginTop: 64 }}>
        <div className="container promise-inner">
          <div>
            <h3>Need a custom size or finish?</h3>
            <p className="muted">
              Share dimensions, materials, and reference photos. We’ll propose lead time & cost.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

/* --- SPEC MODAL (centered) --- */
function SpecDrawer({ product, onClose }) {
  if (!product) return null;

  // Body scroll kilidi
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <div className="drawer-overlay drawer-overlay--center" onClick={onClose}>
      <div className="drawer drawer--center" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-head">
          <h3 style={{ margin: 0 }}>{product.title}</h3>
          <button className="icon-btn" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="drawer-body">
          <div className="drawer-media">
            <img src={product.img} alt={product.title} />
          </div>
          <div className="drawer-spec">
            <ul className="spec-list">
              <li><strong>Category:</strong> {product.category}</li>
              <li><strong>Finishes:</strong> {product.finishes.join(", ")}</li>
              <li><strong>Construction:</strong> Solid wood frame, engineered joints, brass hardware</li>
              <li><strong>Lead time:</strong> 6–8 weeks</li>
              <li><strong>Shipping:</strong> GCC & Europe, white-glove available</li>
            </ul>

            <div className="drawer-actions">
              <Link className="btn btn-gold" to={`/contact?product=${product.slug}`}>
                Start your brief
              </Link>
              <a className="btn btn-ghost" href="/lookbook.pdf" target="_blank" rel="noreferrer">
                Download lookbook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
