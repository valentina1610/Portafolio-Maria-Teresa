import { useEffect } from "react";
import { fmtPrecio } from "../data";

export default function Modal({ obra, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className={`modal palette-${obra.color}`} onClick={(event) => event.stopPropagation()}>
        <div className="modal__visual">
          <span className="modal__emoji">{obra.emoji}</span>
          <button className="modal__close" onClick={onClose}>
            ✕
          </button>
        </div>

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
            <div>
              <span className="modal__detail-label">Precio</span>
              <div className="modal__price">{fmtPrecio(obra.precio)}</div>
            </div>
            <a
              href={`https://wa.me/542236801648?text=Hola%20Maria%20Teresa!%20Me%20interesa%20la%20obra%20%22${encodeURIComponent(
                obra.nombre
              )}%22`}
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
