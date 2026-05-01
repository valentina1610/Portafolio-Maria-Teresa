import React from "react";

const petals = [
  { emoji: "🌸", modifier: "hero__petal--1" },
  { emoji: "🌿", modifier: "hero__petal--2" },
  { emoji: "🌈", modifier: "hero__petal--3" },
  { emoji: "🌊", modifier: "hero__petal--4" },
  { emoji: "🌸", modifier: "hero__petal--5" },
  { emoji: "🎨", modifier: "hero__petal--6" },
];

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__background" />

      {petals.map((petal, index) => (
        <span key={index} className={`hero__petal ${petal.modifier}`}>
          {petal.emoji}
        </span>
      ))}

      <div className="hero__content">
        <div className="hero__pretitle">✦ Artista Plástica · Mar del Plata ✦</div>
        <h1 className="hero__title">
          Maria Teresa
          <br />
          <span className="hero__title-highlight">Pincheira</span>
        </h1>
        <p className="hero__subtitle">Mis Pinturas</p>
        <p className="hero__text">
          Obras inspiradas en lo que te gusta y te hace sentir bien
        </p>
        <a className="hero__cta" href="#galeria">
          Ver mis obras
        </a>
      </div>
    </section>
  );
}
