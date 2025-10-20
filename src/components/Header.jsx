import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const [projOpen, setProjOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { pathname, search } = useLocation();

  // Route değişince menüyü kapat
  useEffect(() => { setProjOpen(false); }, [pathname, search]);

  // ESC ile kapat
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setProjOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Dışarı tıkla kapat
  useEffect(() => {
    if (!projOpen) return;
    const onDoc = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProjOpen(false);
      }
    };
    document.addEventListener("pointerdown", onDoc);
    return () => document.removeEventListener("pointerdown", onDoc);
  }, [projOpen]);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Go to homepage">
          <span className="brand-mark">GUA</span>
          <span className="brand-sub">Design</span>
        </Link>

        <nav className="nav">
          {/* Projects: hem tıklanabilir hem açılır menü */}
          <div
            className="nav-item dropdown"
            ref={dropdownRef}
            onMouseEnter={() => setProjOpen(true)}
            onMouseLeave={() => setProjOpen(false)}
          >
            <Link
              to="/projects"
              className="nav-link"
              aria-haspopup="true"
              aria-expanded={projOpen ? "true" : "false"}
              onClick={(e) => {
                // Mobilde ikinci kez tıklandığında sadece menüyü aç/kapatmak istersen:
                // if (window.matchMedia("(hover: none)").matches) {
                //   e.preventDefault();
                //   setProjOpen((v) => !v);
                // }
                setProjOpen((v) => !v);
              }}
            >
              Projects <span className="caret">▾</span>
            </Link>

            <div className={`menu ${projOpen ? "open" : ""}`} role="menu">
              <NavLink to="/projects?cat=hotel" role="menuitem" onClick={() => setProjOpen(false)}>
                Hotel
              </NavLink>
              <NavLink to="/projects?cat=office" role="menuitem" onClick={() => setProjOpen(false)}>
                Office
              </NavLink>
              <NavLink to="/projects?cat=home" role="menuitem" onClick={() => setProjOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/projects?cat=cafe-restaurant" role="menuitem" onClick={() => setProjOpen(false)}>
                Cafe / Restaurant
              </NavLink>
            </div>
          </div>

          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About</NavLink>
          <Link to="/contact" className="btn btn-outline">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
