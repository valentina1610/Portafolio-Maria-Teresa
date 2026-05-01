import React from "react";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#sobre" },
  { label: "Clases", href: "#clases" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar({ scrolled }) {
  return (
    <nav className={scrolled ? "navbar navbar--scrolled" : "navbar"}>
      <span className="navbar__brand">MTP</span>
      <div className="navbar__links">
        {links.map((link) => (
          <a key={link.label} href={link.href} className="navbar__link">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
