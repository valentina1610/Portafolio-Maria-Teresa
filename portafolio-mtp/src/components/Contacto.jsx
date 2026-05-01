import React from "react";

const links = [
  {
    icon: "📱",
    label: "WhatsApp",
    value: "+54 223 680-1648",
    href: "https://wa.me/542236801648?text=Hola%20Maria%20Teresa!",
    color: "#25D366",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "mtpincheira@hotmail.com",
    href: "mailto:mtpincheira@hotmail.com",
    color: "#0288d1",
  },
  {
    icon: "📸",
    label: "Instagram",
    value: "@Mariateresa_pinta",
    href: "https://instagram.com/Mariateresa_pinta",
    color: "#c2185b",
  },
];

export default function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <div className="contacto__inner">
        <div className="contacto__eyebrow">Hablemos</div>
        <h2 className="contacto__title">
          <em>Contacto</em>
        </h2>
        <p className="contacto__text">
          ¿Te interesa una obra, encargar un cuadro o información sobre las clases?
          ¡Escribime!
        </p>

        <div className="contacto__list">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`contact-card contact-card--${item.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <span className="contact-card__icon">{item.icon}</span>
              <div className="contact-card__content">
                <span className="contact-card__label">{item.label}</span>
                <span className="contact-card__value">{item.value}</span>
              </div>
              <span className="contact-card__arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
