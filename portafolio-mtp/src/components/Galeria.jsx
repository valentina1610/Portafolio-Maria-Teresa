import { useState } from "react";
import { OBRAS } from "../data";
import Modal from "./Modal";
import { useInView } from "../hooks/useInView";

export default function Galeria() {
  const [ref, visible] = useInView();
  const [modalObra, setModalObra] = useState(null);

  return (
    <section id="galeria" className="galeria">
      <div className={`galeria__inner ${visible ? "is-visible" : ""}`} ref={ref}>
        <div className="galeria__intro">
          <div className="galeria__eyebrow">Obras disponibles</div>
          <h2 className="galeria__title">
            <em>Galería</em>
          </h2>
        </div>

        <div className="galeria__grid">
          {OBRAS.map((obra) => (
            <article
              key={obra.id}
              className={`gallery-card palette-${obra.color}`}
              onClick={() => setModalObra(obra)}
            >
              <div className="gallery-card__thumb">
                <span className="gallery-card__emoji">{obra.emoji}</span>
                <div className="gallery-card__tag">{obra.tecnica}</div>
              </div>

              <div className="gallery-card__info">
                <h3 className="gallery-card__name">{obra.nombre}</h3>
                <div className="gallery-card__size">{obra.tamaño}</div>
                <div className="gallery-card__meta">
                  <span className="gallery-card__price">{obra.precio.toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS",
                    maximumFractionDigits: 0,
                  })}</span>
                  <span className="gallery-card__action">Ver más →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {modalObra && <Modal obra={modalObra} onClose={() => setModalObra(null)} />}
    </section>
  );
}
