import { useState } from "react";
import "../app.css";

export default function Contact() {
  // FIX: plain JS state (no TS generic)
  const [office, setOffice] = useState("dubai");

  const offices = {
    dubai: {
      name: "Dubai Studio",
      address: "Dubai Design District (d3), Dubai, UAE",
      mapsQuery: "Dubai Design District, Dubai, UAE",
      phone: "+971 50 000 00 00",
      hours: "Mon–Fri 10:00–18:00 (GST)",
    },
    istanbul: {
      name: "Istanbul Workshop",
      address: "Maslak, Sariyer, Istanbul, Türkiye",
      mapsQuery: "Maslak, Sariyer, Istanbul, Türkiye",
      phone: "+90 555 555 55 55",
      hours: "Mon–Fri 10:00–18:00 (TRT)",
    },
  };

  const o = offices[office];

  return (
    <main>
      {/* Hero contact block */}
      <section className="section">
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr .95fr",
            gap: 24,
          }}
        >
          {/* Media pane */}
          <div className="card card-dark" style={{ overflow: "hidden" }}>
            <div className="card-media" style={{ aspectRatio: "16/9" }}>
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/contact/poster.jpg"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                <source src="/hero/11.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="card-body">
              <h3 style={{ margin: 0 }}>Start a brief</h3>
              <p className="muted" style={{ margin: "6px 0 0" }}>
                Share dimensions, finishes, and a moodboard. We’ll reply within 48 hours with
                lead time and a ballpark estimate.
              </p>
            </div>
          </div>

          {/* Contact info */}
          <div className="card">
            <div className="card-body" style={{ paddingBottom: 6 }}>
              <span className="eyebrow">Contact</span>
              <h2 style={{ fontFamily: "Playfair Display, serif", margin: "6px 0 10px" }}>
                Work with GUA
              </h2>
              <p className="muted" style={{ marginTop: 0 }}>
                Email a drawing or moodboard, or reach us on WhatsApp for quick questions.
              </p>

              <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
                <a className="btn btn-gold" href="mailto:hello@guadesign.com">
                  Email us — hello@guadesign.com
                </a>
                <a
                  className="btn btn-ghost"
                  href="https://wa.me/905555555555"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </div>

              <div style={{ marginTop: 18 }}>
                <h3 style={{ margin: "10px 0 8px" }}>File formats</h3>
                <p className="muted" style={{ marginTop: 0 }}>
                  PDF, DWG, DXF, SketchUp, 3DM, or a simple image/PDF with dimensions is fine.
                </p>
              </div>

              <hr style={{ borderColor: "rgba(255,255,255,.08)", margin: "14px 0" }} />

              <div style={{ display: "grid", gap: 6 }}>
                <div className="muted">Phone</div>
                <div>{o.phone}</div>
                <div className="muted" style={{ marginTop: 10 }}>
                  Office Hours
                </div>
                <div>{o.hours}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Address + Map */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="section-title" style={{ textAlign: "left", marginBottom: 16 }}>
            <span className="eyebrow">Studios</span>
            <h2 style={{ fontFamily: "Playfair Display, serif", margin: "6px 0 10px" }}>
              Visit us
            </h2>
            <p className="muted" style={{ marginTop: 0 }}>
              Select a location to view details and map.
            </p>
          </div>

          <div className="catbar" style={{ marginBottom: 14 }}>
            <button
              className={`pill ${office === "dubai" ? "active" : ""}`}
              onClick={() => setOffice("dubai")}
            >
              Dubai
            </button>
            <button
              className={`pill ${office === "istanbul" ? "active" : ""}`}
              onClick={() => setOffice("istanbul")}
            >
              Istanbul
            </button>
          </div>

          <div
            className="card card-dark"
            style={{
              display: "grid",
              gridTemplateColumns: ".9fr 1.1fr",
              gap: 18,
              overflow: "hidden",
            }}
          >
            {/* Address / meta */}
            <div className="card-body">
              <h3 style={{ marginTop: 0 }}>{o.name}</h3>
              <p className="muted" style={{ marginTop: 6 }}>{o.address}</p>

              <div style={{ marginTop: 12 }}>
                <div className="muted">Phone</div>
                <div>{o.phone}</div>
              </div>

              <div style={{ marginTop: 12 }}>
                <div className="muted">Hours</div>
                <div>{o.hours}</div>
              </div>

              <div className="card-actions" style={{ marginTop: 16 }}>
                <a
                  className="btn btn-outline"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    o.mapsQuery
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Google Maps
                </a>
                <a
                  className="btn btn-brass"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    o.mapsQuery
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get directions
                </a>
              </div>
            </div>

            {/* Responsive map */}
            <div style={{ position: "relative", minHeight: 320 }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  overflow: "hidden",
                }}
              >
                <iframe
                  title={`${o.name} map`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    o.mapsQuery
                  )}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(40%) contrast(1.05)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
