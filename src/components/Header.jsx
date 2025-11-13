import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  const [projOpen, setProjOpen] = useState(false);   // desktop dropdown
  const [menuOpen, setMenuOpen] = useState(false);   // mobile drawer
  const [isTouch, setIsTouch] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeTimer = useRef(null);
  const dropdownRef = useRef(null);
  const { pathname, search } = useLocation();

  /* Touch/hover algısı */
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(hover: none)");
    const apply = () => setIsTouch(!!mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  /* Scroll opaklığı */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Route değişince her şeyi kapat */
  useEffect(() => {
    setProjOpen(false);
    setMenuOpen(false);
  }, [pathname, search]);

  /* ESC ile kapat */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setProjOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Desktop dropdown dış tık ile kapat */
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

  useEffect(() => {
    return () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  }, []);

  const onBlurDropdown = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setProjOpen(false);
  };
  const openNow = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setProjOpen(true); };
  const closeWithDelay = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setProjOpen(false), 120);
  };

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header-inner">
        {/* MOBILE: Hamburger */}
        <button
          className="hamburger"
          aria-label="Open menu"
          aria-expanded={menuOpen ? "true" : "false"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        {/* Logo */}
        <Link to="/" className="brand" aria-label="Go to homepage">
          <span className="brand-mark">GUA</span>
          <span className="brand-sub">Design</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="nav" aria-label="Primary">
          {/* Projects: desktop’ta hover, touch’ta tap-toggle */}
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
                if (isTouch) { e.preventDefault(); setProjOpen((v) => !v); }
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
              <NavLink to="/projects/hotel" role="menuitem" onClick={() => setProjOpen(false)}>Hotel</NavLink>
              <NavLink to="/projects/business" role="menuitem" onClick={() => setProjOpen(false)}>Business</NavLink>
              <NavLink to="/projects/home" role="menuitem" onClick={() => setProjOpen(false)}>Home</NavLink>
              <NavLink to="/projects/cafe-restaurant" role="menuitem" onClick={() => setProjOpen(false)}>Cafe / Restaurant</NavLink>
              <NavLink to="projects/vision/desert-brass-palette" role="menuitem" onClick={() => setProjOpen(false)}>GUA Vision</NavLink>
            </div>
          </div>

          <NavLink to="/products">Furniture</NavLink>
          <NavLink to="/about">About</NavLink>
          <Link to="/contact" className="btn btn-outline">Contact</Link>
        </nav>
      </div>

      {/* MOBILE DRAWER */}
      <div className={`mnav ${menuOpen ? "on" : ""}`} aria-hidden={menuOpen ? "false" : "true"}>
        <div className="mnav-body">
          <NavLink to="/projects" className="mnav-title" onClick={() => setMenuOpen(false)}>Projects</NavLink>
          <div className="mnav-sub">
            <NavLink to="/projects/hotel" onClick={() => setMenuOpen(false)}>Hotel</NavLink>
            <NavLink to="/projects/business" onClick={() => setMenuOpen(false)}>Business</NavLink>
            <NavLink to="/projects/home" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/projects/cafe-restaurant" onClick={() => setMenuOpen(false)}>Cafe / Restaurant</NavLink>
            <NavLink to="/projects/vision" onClick={() => setMenuOpen(false)}>GUA Vision</NavLink>
          </div>

          <NavLink to="/products" onClick={() => setMenuOpen(false)}>Furniture</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <Link to="/contact" className="btn btn-outline" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </div>
      {menuOpen && <button className="mnav-backdrop" aria-label="Close menu" onClick={() => setMenuOpen(false)} />}
    </header>
  );
}
