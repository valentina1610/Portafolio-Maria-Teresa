import React from "react";
import { useInView } from "../hooks/useInView";

const teresaFoto = "/teresafoto.jpg";

const tecnicas = ["Acrílico", "Óleo", "Acuarela", "Técnica Mixta"];

export default function Sobre() {
  const [ref, visible] = useInView();

  return (
    <section id="sobre" className="sobre">
      <div className="sobre__glow" />
      <div className={`sobre__inner ${visible ? "is-visible" : ""}`} ref={ref}>

        {/* Columna izquierda: foto */}
        <div className="sobre__card">
          <div className="sobre__photo-wrap">
            <img
              src={teresaFoto}
              alt="Maria Teresa Pincheira — Artista Visual"
              className="sobre__photo"
            />
          </div>
          {/* Badge flotante con años */}
          <div className="sobre__years">
            <span className="sobre__years-number">+12</span>
            <span className="sobre__years-label">años creando</span>
          </div>
        </div>

        {/* Columna derecha: texto */}
        <div className="sobre__text-block">
          <div className="sobre__eyebrow">Sobre la artista</div>
          <h2 className="sobre__title">
            Arte que nace
            <br />
            <em>del corazón</em>
          </h2>
          <p className="sobre__paragraph">
            Desde 2013, Maria Teresa Pincheira transforma emociones en color. Su obra es una
            celebración de la vida: la gratitud, la alegría, el jardín propio. Cada pintura invita
            a detenerse, respirar y sentir.
          </p>
          <p className="sobre__paragraph">
            Su inspiración surge de lo cotidiano visto con ojos atentos: una flor que abre, la luz
            de la tarde, los verdes del jardín. Todo eso se convierte en obra que acompaña y alegra.
          </p>
          <div className="sobre__techniques">
            <span className="sobre__techniques-label">Técnicas</span>
            <div className="sobre__techniques-list">
              {tecnicas.map((t) => (
                <span key={t} className="sobre__technique">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}