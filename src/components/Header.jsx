import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  const [projOpen, setProjOpen] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeTimer = useRef(null);
  const dropdownRef = useRef(null);
  const { pathname, search } = useLocation();

  /* Cihaz tipi (hover var mı?) */
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(hover: none)");
    const apply = () => setIsTouch(!!mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  /* Scroll'a göre header opaklığı */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Route değişince kapat */
  useEffect(() => { setProjOpen(false); }, [pathname, search]);

  /* ESC ile kapat */
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setProjOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Dışarı tıklayınca kapat */
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

  /* Unmount: bekleyen kapatma timer'ını temizle */
  useEffect(() => {
    return () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  }, []);

  /* Klavye erişilebilirliği: fokus dışına çıkınca kapat */
  const onBlurDropdown = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setProjOpen(false);
  };

  /* Hover açık/kapalı (küçük gecikme ile) */
  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProjOpen(true);
  };
  const closeWithDelay = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setProjOpen(false), 120);
  };

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Go to homepage">
          <span className="brand-mark">GUA</span>
          <span className="brand-sub">Design</span>
        </Link>

        <nav className="nav" aria-label="Primary">
          {/* Projects: desktop’ta hover, touch’ta tap ile aç/kapat */}
          <div
            className="nav-item dropdown"
            ref={dropdownRef}
            onMouseEnter={() => !isTouch && openNow()}
            onMouseLeave={() => !isTouch && closeWithDelay()}
            onFocus={openNow}
            onBlur={onBlurDropdown}
          >
            <Link
              to="/projects"
              className="nav-link"
              aria-haspopup="true"
              aria-expanded={projOpen ? "true" : "false"}
              aria-controls="projects-menu"
              onClick={(e) => {
                if (isTouch) {
                  e.preventDefault();               // telefonda menü aç/kapat
                  setProjOpen((v) => !v);
                }
              }}
            >
              Projects <span className="caret">▾</span>
            </Link>

            <div
              id="projects-menu"
              className={`menu ${projOpen ? "open" : ""}`}
              role="menu"
              aria-hidden={projOpen ? "false" : "true"}
            >
              <NavLink to="/projects/vision" role="menuitem" onClick={() => setProjOpen(false)}>
                GUA Vision
              </NavLink>
              <NavLink to="/projects/hotel" role="menuitem" onClick={() => setProjOpen(false)}>
                Hotel
              </NavLink>
              <NavLink to="/projects/office" role="menuitem" onClick={() => setProjOpen(false)}>
                Office
              </NavLink>
              <NavLink to="/projects/home" role="menuitem" onClick={() => setProjOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/projects/cafe-restaurant" role="menuitem" onClick={() => setProjOpen(false)}>
                Cafe / Restaurant
              </NavLink>
            </div>
          </div>

          <NavLink to="/products">Furniture</NavLink>
          <NavLink to="/about">About</NavLink>
          <Link to="/contact" className="btn btn-outline">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
