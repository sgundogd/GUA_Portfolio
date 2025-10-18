import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [projOpen, setProjOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">GUA</span>
          <span className="brand-sub">Design</span>
        </Link>

        <nav className="nav">
          {/* Projects dropdown: hem tıklanabilir hem stabil menü */}
          <div
            className="nav-item dropdown"
            onMouseEnter={() => setProjOpen(true)}
            onMouseLeave={() => setProjOpen(false)}
          >
            {/* BURASI TIKLANABİLİR */}
            <Link to="/projects" className="nav-link">
              Projects <span className="caret">▾</span>
            </Link>

            <div className={`menu ${projOpen ? "open" : ""}`}>
              <Link to="/projects?cat=hotel">Hotel</Link>
              <Link to="/projects?cat=office">Office</Link>
              <Link to="/projects?cat=home">Home</Link>
              <Link to="/projects?cat=cafe-restaurant">Cafe / Restaurant</Link>
            </div>
          </div>

          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact" className="btn btn-outline">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
