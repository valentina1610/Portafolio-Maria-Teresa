import { useState } from "react";
import { OBRAS } from "../data";
import Modal from "./Modal";

const CATEGORIAS = ["Cuadros", "Tote Bags", "Arte textil"];

export default function Galeria() {
  const [modalObra, setModalObra] = useState(null);
  const [categoriaActiva, setCategoriaActiva] = useState("Cuadros");

  return (
    <section id="galeria" className="galeria">
      <div className="galeria__inner is-visible">
        <div className="galeria__intro">
          <div className="galeria__eyebrow">Obras disponibles</div>
          <h2 className="galeria__title">
            <em>Galería</em>
          </h2>
        </div>

        <div className="galeria__tabs">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`galeria__tab ${categoriaActiva === cat ? "galeria__tab--active" : ""}`}
              onClick={() => setCategoriaActiva(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Renderizo todas las categorías y oculto las inactivas:
            así las imágenes quedan cacheadas y no se recargan al cambiar de tab */}
        {CATEGORIAS.map((cat) => {
          const obras = OBRAS.filter((o) => (o.categoria || "Cuadros") === cat);
          return (
            <div key={cat} hidden={cat !== categoriaActiva}>
              {obras.length > 0 ? (
                <div className="galeria__grid">
                  {obras.map((obra) => (
                    <article
                      key={obra.id}
                      className={`gallery-card palette-${obra.color}`}
                      onClick={() => setModalObra(obra)}
                    >
                      <div className="gallery-card__thumb">
                        <img
                          src={`/${obra.imagen}`}
                          alt={obra.nombre}
                          className="gallery-card__img"
                          loading="lazy"
                          decoding="async"
                          width="600"
                          height="600"
                        />
                        <div className="gallery-card__tag">{obra.tecnica}</div>
                      </div>

                      <div className="gallery-card__info">
                        <h3 className="gallery-card__name">{obra.nombre}</h3>
                        <div className="gallery-card__size">{obra.tamaño}</div>
                        <div className="gallery-card__meta">
                          <span className="gallery-card__venta">En venta</span>
                          <span className="gallery-card__action">Ver más →</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="galeria__empty">
                  <span>🎨</span>
                  <p>Próximamente...</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {modalObra && <Modal obra={modalObra} onClose={() => setModalObra(null)} />}
    </section>
  );
}