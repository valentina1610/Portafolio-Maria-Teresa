import React, { useState } from "react";
import { useInView } from "../hooks/useInView";

const beneficios = [
  { icon: "🕐", label: "2 horas y media de clase" },
  { icon: "🎨", label: "Todas las técnicas" },
  { icon: "📍", label: "Clases presenciales" },
  { icon: "✨", label: "Grupos reducidos" },
];

const tecnicas = ["Óleo", "Acrílico", "Acuarela", "Dibujo", "Arte textil"];

export default function Clases() {
  const [ref, visible] = useInView();
  const [tecnicasOpen, setTecnicasOpen] = useState(false);

  return (
    <section id="clases" className="clases">
      <div className={`clases__content ${visible ? "is-visible" : ""}`} ref={ref}>
        <div className="clases__eyebrow">Clases de pintura</div>
        <h2 className="clases__title">
          Clases con
          <br />
          <em>Maria Teresa</em>
        </h2>
        <p className="clases__text">
          Aprendé a expresarte a través del color y la forma en un espacio cálido,
          creativo y sin presiones. Para principiantes y artistas en desarrollo.
        </p>

        <div className="clases__benefits">
          {beneficios.map((beneficio) => {
            const esTecnicas = beneficio.label === "Todas las técnicas";
            return (
              <div
                key={beneficio.label}
                className={`benefit-card ${esTecnicas ? "benefit-card--clickable" : ""}`}
                onClick={esTecnicas ? () => setTecnicasOpen(!tecnicasOpen) : undefined}
              >
                <span className="benefit-card__icon">{beneficio.icon}</span>
                <span className="benefit-card__label">{beneficio.label}</span>
                {esTecnicas && (
                  <span className="benefit-card__arrow">
                    {tecnicasOpen ? "▲" : "▼"}
                  </span>
                )}

                {/* Dropdown */}
                {esTecnicas && tecnicasOpen && (
                  <div className="tecnicas-dropdown">
                    {tecnicas.map((t) => (
                      <span key={t} className="tecnicas-dropdown__item">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <a
          href="https://wa.me/542236801648?text=Hola%20Maria%20Teresa!%20Me%20gustar%C3%ADa%20consultar%20por%20las%20clases%20de%20pintura"
          target="_blank"
          rel="noopener noreferrer"
          className="clases__cta"
        >
          Consultar por clases
        </a>
      </div>
    </section>
  );
}