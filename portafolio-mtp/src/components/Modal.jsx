import { useEffect } from "react";

export default function Modal({ obra, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className={`modal palette-${obra.color}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagen de la obra */}
        <div className="modal__visual">
          <img
            src={`/${obra.imagen}`}
            alt={obra.nombre}
            className="modal__img"
          />
          <button className="modal__close" onClick={onClose}>✕</button>
        </div>

        {/* Info */}
        <div className="modal__info">
          <h3 className="modal__heading">{obra.nombre}</h3>
          <p className="modal__description">{obra.descripcion}</p>

          <div className="modal__details">
            <div className="modal__detail">
              <span className="modal__detail-label">Técnica</span>
              <span className="modal__detail-value">{obra.tecnica}</span>
            </div>
            <div className="modal__detail">
              <span className="modal__detail-label">Tamaño</span>
              <span className="modal__detail-value">{obra.tamaño}</span>
            </div>
          </div>

          <div className="modal__footer">
            <span className="modal__venta">En venta</span>
            <a
              href={`https://wa.me/542236801648?text=Hola%20Maria%20Teresa!%20Me%20interesa%20la%20obra%20%22${encodeURIComponent(obra.nombre)}%22`}
              target="_blank"
              rel="noopener noreferrer"
              className="modal__button"
            >
              Consultar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}