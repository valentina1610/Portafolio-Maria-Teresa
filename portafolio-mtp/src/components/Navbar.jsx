import React, { useState } from "react";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#sobre" },
  { label: "Clases", href: "#clases" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav className={scrolled ? "navbar navbar--scrolled" : "navbar"}>
        <span className="navbar__brand">MTP</span>

        {/* Links desktop */}
        <div className="navbar__links">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburguesa mobile */}
        <button
          className={`navbar__hamburger ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Menú mobile desplegable */}
      <div className={`navbar__mobile ${menuOpen ? "is-open" : ""}`}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="navbar__mobile-link"
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}