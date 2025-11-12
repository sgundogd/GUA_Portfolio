import "../app.css";
import "../styles/contact.css";

export default function Contact() {
const STUDIO = {
  name: "Istanbul Workshop",
  address: "Cemil Meriç, Alemdağ Cd No:307, 34771 Ümraniye/İstanbul",
  mapsQuery: "Cemil Meriç, Alemdağ Cd No:307, Ümraniye, İstanbul",
  phone: "+90 553 695 15 00",
  phonePlain: "905536951500",
  hours: `Mon–Sun 08:30–21:00 (TRT)`,
};

  return (
    <main className="contact-page">
      {/* Hero contact block */}
      <section className="section">
        <div className="container hero-grid">
          {/* Media pane */}
          <div className="card card-dark" style={{ overflow: "hidden" }}>
            <div className="card-media">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/contact/poster.jpg"
              >
                <source src="/hero/11.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="card-body">
              <h3 style={{ margin: 0 }}>Start a brief</h3>
              <p className="muted" style={{ margin: "6px 0 0" }}>
                Share dimensions, finishes, and a moodboard. We’ll reply within 48 hours
                with lead time and a ballpark estimate.
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

              <div className="contact-actions">
                <a className="btn btn-gold" href="mailto:sevgi.gundogdu@gundogduahsap.com">
                  Email — sevgi.gundogdu@gundogduahsap.com
                </a>
                <a
                  className="btn btn-ghost"
                  href={`https://wa.me/${STUDIO.phonePlain}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </div>


              <hr />

              <div style={{ display: "grid", gap: 6 }}>
                <div className="muted">Phone</div>
                <div>{STUDIO.phone}</div>
                <div className="muted" style={{ marginTop: 10 }}>Office Hours</div>
                <div>{STUDIO.hours}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Address + Map (tek lokasyon) */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="studios-title">
            <span className="eyebrow">Studio</span>
            <h2>Visit us</h2>
            <p className="muted" style={{ marginTop: 0 }}>
              Istanbul workshop details and map.
            </p>
          </div>

          <div className="card card-dark studio-card">
            {/* Address / meta */}
            <div className="card-body">
              <h3 style={{ marginTop: 0 }}>{STUDIO.name}</h3>
              <p className="muted" style={{ marginTop: 6 }}>{STUDIO.address}</p>

              <div style={{ marginTop: 12 }}>
                <div className="muted">Phone</div>
                <div>{STUDIO.phone}</div>
              </div>

              <div style={{ marginTop: 12 }}>
                <div className="muted">Hours</div>
                <div>{STUDIO.hours}</div>
              </div>

              <div className="card-actions" style={{ marginTop: 16 }}>
                <a
                  className="btn btn-outline"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    STUDIO.mapsQuery
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Google Maps
                </a>
                <a
                  className="btn btn-brass"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    STUDIO.mapsQuery
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get directions
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="map-wrap">
              <iframe
                title={`${STUDIO.name} map`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  STUDIO.mapsQuery
                )}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
  <div className="container" style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
    <h2 style={{ fontFamily: "Playfair Display, serif", marginBottom: 10 }}>
      Get in Touch
    </h2>
    <p className="muted" style={{ marginBottom: 24 }}>
      Fill out the form and we’ll get back to you within 24 hours.
    </p>

    <form
      action="https://formspree.io/f/xzzyzbol"
      method="POST"
      className="contact-form"
    >
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit" className="btn btn-gold">Send Message</button>
    </form>
  </div>
</section>
    </main>
  );
}
