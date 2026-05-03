import React from "react";
import { useInView } from "../hooks/useInView";

const links = [
  {
    label: "WhatsApp",
    value: "+54 223 680-1648",
    href: "https://wa.me/542236801648?text=Hola%20Maria%20Teresa!",
    modifier: "whatsapp",
  },
  {
    label: "Gmail",
    value: "maytepincheira@gmail.com",
    href: "mailto:maytepincheira@gmail.com",
    modifier: "email",
  },
  {
    label: "Instagram",
    value: "@mariateresa_pinta",
    href: "https://instagram.com/Mariateresa_pinta",
    modifier: "instagram",
  },
];

export default function Contacto() {
  const [ref, visible] = useInView();

  return (
    <section id="contacto" className="contacto">
      <div
        ref={ref}
        className={`contacto__inner ${visible ? "is-visible" : ""}`}
      >
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
              className={`contact-card contact-card--${item.modifier}`}
            >
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