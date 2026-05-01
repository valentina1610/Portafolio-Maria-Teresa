import { useState, useEffect, useRef } from "react";

/* ─── PALETTE ────────────────────────────────────────────────────────── */
const PALETTE = {
  rose:    { light: "#fce4ec", mid: "#e91e63", dark: "#880e4f" },
  amber:   { light: "#fff8e1", mid: "#ff8f00", dark: "#e65100" },
  teal:    { light: "#e0f2f1", mid: "#00897b", dark: "#004d40" },
  violet:  { light: "#ede7f6", mid: "#7b1fa2", dark: "#4a148c" },
  sky:     { light: "#e1f5fe", mid: "#0288d1", dark: "#01579b" },
  sage:    { light: "#f1f8e9", mid: "#558b2f", dark: "#1b5e20" },
};

/* ─── GALLERY DATA ────────────────────────────────────────────────────── */
const OBRAS = [
  {
    id: 1,
    nombre: "Vals de las Flores",
    tecnica: "Óleo",
    tamaño: "1.00 x 70 cm",
    precio: 500000,
    color: "rose",
    emoji: "🌸",
    descripcion: "Una danza silenciosa entre pétalos y luz. La obra evoca el movimiento de flores al viento, con capas de óleo que crean profundidad y textura.",
  },
  {
    id: 2,
    nombre: "Gratitud Verde",
    tecnica: "Acrílico",
    tamaño: "80 x 60 cm",
    precio: 320000,
    color: "sage",
    emoji: "🌿",
    descripcion: "Inspirada en el jardín propio, esta pieza celebra la vida en sus tonos más naturales y esperanzadores.",
  },
  {
    id: 3,
    nombre: "Cielo de Octubre",
    tecnica: "Acuarela",
    tamaño: "50 x 70 cm",
    precio: 210000,
    color: "sky",
    emoji: "🌊",
    descripcion: "La translucidez de la acuarela captura la calma de un cielo de otoño, donde el tiempo parece detenerse.",
  },
  {
    id: 4,
    nombre: "Festín de Color",
    tecnica: "Técnica Mixta",
    tamaño: "90 x 90 cm",
    precio: 480000,
    color: "amber",
    emoji: "🎨",
    descripcion: "Celebración pura a través de la mezcla de materiales. Cada trazo es una exclamación de alegría.",
  },
  {
    id: 5,
    nombre: "Jardín Interior",
    tecnica: "Óleo",
    tamaño: "60 x 80 cm",
    precio: 380000,
    color: "violet",
    emoji: "💜",
    descripcion: "Un espacio íntimo donde los colores del jardín se convierten en emoción pura y contemplación.",
  },
  {
    id: 6,
    nombre: "Amanecer en Calma",
    tecnica: "Acrílico",
    tamaño: "70 x 50 cm",
    precio: 290000,
    color: "teal",
    emoji: "🌅",
    descripcion: "La serenidad del amanecer traducida en capas de acrílico. Un recordatorio de que cada día trae renovación.",
  },
];

/* ─── UTILS ───────────────────────────────────────────────────────────── */
const fmtPrecio = (n) =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(n);

/* ─── COMPONENTS ──────────────────────────────────────────────────────── */

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* Navbar */
function Navbar({ scrolled }) {
  const links = [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre mí", href: "#sobre" },
    { label: "Clases", href: "#clases" },
    { label: "Galería", href: "#galeria" },
    { label: "Contacto", href: "#contacto" },
  ];
  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200,180,210,0.25)" : "none",
        transition: "all 0.4s ease",
        padding: "0 2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64,
      }}
    >
      <span style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 22, fontWeight: 600,
        background: "linear-gradient(135deg, #c2185b 0%, #7b1fa2 50%, #0288d1 100%)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        letterSpacing: "0.03em",
      }}>
        MTP
      </span>
      <div style={{ display: "flex", gap: "1.8rem" }}>
        {links.map(l => (
          <a key={l.label} href={l.href} style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase",
            color: scrolled ? "#4a4a5a" : "#fff",
            textDecoration: "none",
            transition: "opacity 0.2s",
            opacity: 0.85,
          }}
          onMouseOver={e => e.target.style.opacity = 1}
          onMouseOut={e => e.target.style.opacity = 0.85}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

/* Hero */
function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",
    }}>
      {/* Animated watercolor background */}
      <div style={{
        position: "absolute", inset: 0,
        background: `
          radial-gradient(ellipse 80% 60% at 20% 30%, rgba(252,228,236,0.85) 0%, transparent 60%),
          radial-gradient(ellipse 70% 70% at 80% 20%, rgba(225,245,254,0.75) 0%, transparent 55%),
          radial-gradient(ellipse 60% 80% at 70% 80%, rgba(237,231,246,0.8) 0%, transparent 60%),
          radial-gradient(ellipse 50% 50% at 10% 80%, rgba(225,245,254,0.5) 0%, transparent 50%),
          radial-gradient(ellipse 90% 40% at 50% 50%, rgba(255,248,225,0.4) 0%, transparent 70%),
          #fdf6f9
        `,
        animation: "breathe 12s ease-in-out infinite",
      }} />

      {/* Decorative petals */}
      {["🌸","🌿","🌈","🌊","🌸","🎨"].map((e, i) => (
        <span key={i} style={{
          position: "absolute",
          fontSize: 28 + (i % 3) * 10,
          opacity: 0.12,
          top: `${10 + i * 14}%`,
          left: i % 2 === 0 ? `${5 + i * 5}%` : `${75 - i * 4}%`,
          transform: `rotate(${i * 30}deg)`,
          animation: `floatPetal ${6 + i}s ease-in-out infinite alternate`,
          animationDelay: `${i * 0.8}s`,
          userSelect: "none",
          pointerEvents: "none",
        }}>{e}</span>
      ))}

      <div style={{ position: "relative", zIndex: 1, padding: "0 1.5rem", maxWidth: 680 }}>
        {/* Pre-title line */}
        <div style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase",
          color: "#c2185b", marginBottom: "1.2rem",
          opacity: 0.9,
        }}>
          ✦ Artista Plástica · Mar del Plata ✦
        </div>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(3rem, 8vw, 6rem)",
          fontWeight: 300,
          lineHeight: 1.05,
          letterSpacing: "-0.01em",
          color: "#2d1a3a",
          margin: "0 0 0.5rem",
        }}>
          Maria Teresa
          <br />
          <span style={{
            fontStyle: "italic",
            background: "linear-gradient(135deg, #c2185b 0%, #7b1fa2 60%, #0288d1 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Pincheira
          </span>
        </h1>

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)",
          fontWeight: 400,
          fontStyle: "italic",
          color: "#7b1fa2",
          margin: "0 0 1rem",
          letterSpacing: "0.02em",
        }}>
          Mis Pinturas
        </p>

        <p style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
          color: "#5a4060",
          lineHeight: 1.7,
          margin: "0 auto 2.5rem",
          maxWidth: 460,
          fontWeight: 300,
        }}>
          Obras inspiradas en lo que te gusta y te hace sentir bien
        </p>

        <a href="#galeria" style={{
          display: "inline-block",
          fontFamily: "'Lato', sans-serif",
          fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase",
          color: "#fff",
          background: "linear-gradient(135deg, #c2185b 0%, #7b1fa2 100%)",
          padding: "14px 42px",
          borderRadius: 40,
          textDecoration: "none",
          boxShadow: "0 8px 30px rgba(194,24,91,0.28)",
          transition: "transform 0.2s, box-shadow 0.2s",
          fontWeight: 400,
        }}
        onMouseOver={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(194,24,91,0.36)"; }}
        onMouseOut={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(194,24,91,0.28)"; }}
        >
          Ver mis obras
        </a>
      </div>


    </section>
  );
}

/* Sobre la artista */
function Sobre() {
  const [ref, visible] = useInView();
  const tecnicas = ["Acrílico", "Óleo", "Acuarela", "Técnica Mixta"];
  return (
    <section id="sobre" ref={ref} style={{
      padding: "6rem 2rem",
      background: "linear-gradient(160deg, #fdf6f9 0%, #f3e8ff 50%, #e8f4fd 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: -60, right: -60, width: 300, height: 300,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(225,245,254,0.6) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 880, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem",
        alignItems: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        {/* Left: decorative canvas */}
        <div style={{ position: "relative" }}>
          <div style={{
            aspectRatio: "3/4",
            borderRadius: 24,
            background: "linear-gradient(145deg, #fce4ec 0%, #e1bee7 30%, #b3e5fc 70%, #e8f5e9 100%)",
            position: "relative", overflow: "hidden",
            boxShadow: "0 20px 60px rgba(123,31,162,0.12), 0 4px 16px rgba(0,0,0,0.06)",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column", gap: 8,
            }}>
              <span style={{ fontSize: 72, opacity: 0.7 }}>🎨</span>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 15, fontStyle: "italic", color: "#7b1fa2", opacity: 0.7,
              }}>
                Pintando desde 2013
              </span>
            </div>
          </div>
          {/* Floating year badge */}
          <div style={{
            position: "absolute", bottom: -18, left: -18,
            background: "#fff",
            borderRadius: 16,
            padding: "12px 20px",
            boxShadow: "0 8px 32px rgba(123,31,162,0.14)",
            display: "flex", flexDirection: "column", alignItems: "center",
          }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 32, fontWeight: 600,
              background: "linear-gradient(135deg, #c2185b, #7b1fa2)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              lineHeight: 1,
            }}>+12</span>
            <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 11, color: "#9e9e9e", letterSpacing: "0.1em" }}>años creando</span>
          </div>
        </div>

        {/* Right: text */}
        <div>
          <div style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
            color: "#c2185b", marginBottom: "1rem",
          }}>Sobre la artista</div>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            fontWeight: 400,
            color: "#2d1a3a",
            margin: "0 0 1.4rem",
            lineHeight: 1.2,
          }}>
            Arte que nace<br />
            <em style={{ color: "#7b1fa2" }}>del corazón</em>
          </h2>

          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "1rem", lineHeight: 1.85,
            color: "#5a4060", margin: "0 0 1.6rem",
            fontWeight: 300,
          }}>
            Desde 2013, Maria Teresa Pincheira transforma emociones en color. Su obra es una
            celebración de la vida: la gratitud, la alegría, el jardín propio. Cada pintura invita
            a detenerse, respirar y sentir.
          </p>

          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "1rem", lineHeight: 1.85,
            color: "#5a4060", margin: "0 0 2rem",
            fontWeight: 300,
          }}>
            Su inspiración surge de lo cotidiano visto con ojos atentos: una flor que abre, la luz
            de la tarde, los verdes del jardín. Todo eso se convierte en obra que acompaña y alegra.
          </p>

          <div>
            <div style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#9e9e9e", marginBottom: "0.8rem",
            }}>Técnicas</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {tecnicas.map(t => (
                <span key={t} style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 12, letterSpacing: "0.05em",
                  color: "#7b1fa2",
                  border: "1px solid rgba(123,31,162,0.3)",
                  borderRadius: 24,
                  padding: "5px 14px",
                  background: "rgba(237,231,246,0.5)",
                }}>
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

/* Clases */
function Clases() {
  const [ref, visible] = useInView();
  const beneficios = [
    { icon: "🕐", label: "3 horas de clase" },
    { icon: "🎨", label: "Todas las técnicas" },
    { icon: "📍", label: "Clases presenciales" },
    { icon: "✨", label: "Grupos pequeños" },
  ];
  return (
    <section id="clases" ref={ref} style={{
      padding: "6rem 2rem",
      background: "#fff",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 60% 50% at 90% 50%, rgba(252,228,236,0.35) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 720, margin: "0 auto",
        textAlign: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        <div style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
          color: "#c2185b", marginBottom: "1rem",
        }}>Aprendé a pintar</div>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 400,
          color: "#2d1a3a",
          margin: "0 0 1.2rem",
          lineHeight: 1.2,
        }}>
          Clases con<br />
          <em style={{ color: "#7b1fa2" }}>Maria Teresa</em>
        </h2>

        <p style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: "1.05rem", color: "#5a4060",
          lineHeight: 1.75, margin: "0 auto 3rem",
          maxWidth: 500, fontWeight: 300,
        }}>
          Aprendé a expresarte a través del color y la forma en un espacio cálido,
          creativo y sin presiones. Para principiantes y artistas en desarrollo.
        </p>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16,
          marginBottom: "2.5rem", maxWidth: 500, margin: "0 auto 2.5rem",
        }}>
          {beneficios.map(b => (
            <div key={b.label} style={{
              background: "linear-gradient(135deg, rgba(252,228,236,0.5) 0%, rgba(237,231,246,0.5) 100%)",
              borderRadius: 16,
              padding: "1.2rem 1rem",
              border: "1px solid rgba(194,24,91,0.1)",
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <span style={{ fontSize: 22 }}>{b.icon}</span>
              <span style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: 13, color: "#4a1a5a", fontWeight: 400,
              }}>{b.label}</span>
            </div>
          ))}
        </div>

        <a
          href="https://wa.me/542236801648?text=Hola%20Maria%20Teresa!%20Me%20gustaría%20consultar%20por%20las%20clases%20de%20pintura"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            fontFamily: "'Lato', sans-serif",
            fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase",
            color: "#fff",
            background: "linear-gradient(135deg, #7b1fa2 0%, #0288d1 100%)",
            padding: "14px 44px",
            borderRadius: 40,
            textDecoration: "none",
            boxShadow: "0 8px 28px rgba(123,31,162,0.28)",
            transition: "transform 0.2s, box-shadow 0.2s",
            fontWeight: 400,
          }}
          onMouseOver={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(123,31,162,0.38)"; }}
          onMouseOut={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(123,31,162,0.28)"; }}
        >
          Consultar por clases
        </a>
      </div>
    </section>
  );
}

/* Modal */
function Modal({ obra, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [onClose]);

  const pal = PALETTE[obra.color];

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(30,10,40,0.65)",
        backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1.5rem",
        animation: "fadeIn 0.25s ease",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 24,
          width: "100%", maxWidth: 520,
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.24)",
          animation: "slideUp 0.3s ease",
        }}
      >
        {/* Artwork visual */}
        <div style={{
          height: 240,
          background: `linear-gradient(145deg, ${pal.light} 0%, ${pal.mid}22 60%, ${pal.dark}15 100%)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative",
        }}>
          <span style={{ fontSize: 90, opacity: 0.65 }}>{obra.emoji}</span>
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: 12, right: 12,
              background: "rgba(255,255,255,0.8)", border: "none",
              borderRadius: "50%", width: 32, height: 32,
              cursor: "pointer", fontSize: 16, lineHeight: "32px",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >✕</button>
        </div>

        {/* Info */}
        <div style={{ padding: "1.8rem 2rem 2rem" }}>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.9rem", fontWeight: 500,
            color: "#2d1a3a", margin: "0 0 0.5rem",
          }}>{obra.nombre}</h3>

          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "0.95rem", color: "#6a5a7a",
            lineHeight: 1.7, margin: "0 0 1.4rem",
            fontWeight: 300,
          }}>
            {obra.descripcion}
          </p>

          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: 12, marginBottom: "1.6rem",
          }}>
            {[
              { label: "Técnica", val: obra.tecnica },
              { label: "Tamaño", val: obra.tamaño },
            ].map(i => (
              <div key={i.label} style={{
                background: `${pal.light}`,
                borderRadius: 12, padding: "10px 14px",
              }}>
                <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9e9e9e", marginBottom: 2 }}>{i.label}</div>
                <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, color: "#2d1a3a", fontWeight: 500 }}>{i.val}</div>
              </div>
            ))}
          </div>

          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <div>
              <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9e9e9e" }}>Precio</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.6rem", fontWeight: 600,
                background: `linear-gradient(135deg, ${pal.mid} 0%, ${pal.dark} 100%)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>{fmtPrecio(obra.precio)}</div>
            </div>
            <a
              href={`https://wa.me/542236801648?text=Hola%20Maria%20Teresa!%20Me%20interesa%20la%20obra%20%22${encodeURIComponent(obra.nombre)}%22`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase",
                color: "#fff",
                background: `linear-gradient(135deg, ${pal.mid} 0%, ${pal.dark} 100%)`,
                padding: "11px 26px",
                borderRadius: 30,
                textDecoration: "none",
                fontWeight: 400,
              }}
            >
              Consultar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Galería */
function Galeria() {
  const [ref, visible] = useInView();
  const [modalObra, setModalObra] = useState(null);

  return (
    <section id="galeria" style={{
      padding: "6rem 2rem",
      background: "linear-gradient(160deg, #f8f0ff 0%, #fff 40%, #f0f8ff 100%)",
    }}>
      <div ref={ref} style={{
        maxWidth: 960, margin: "0 auto",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
            color: "#c2185b", marginBottom: "0.8rem",
          }}>Obras disponibles</div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 400,
            color: "#2d1a3a", margin: 0,
          }}>
            <em>Galería</em>
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
          gap: 24,
        }}>
          {OBRAS.map((obra, idx) => {
            const pal = PALETTE[obra.color];
            return (
              <div
                key={obra.id}
                onClick={() => setModalObra(obra)}
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  cursor: "pointer",
                  background: "#fff",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                  border: "1px solid rgba(200,180,220,0.2)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  animationDelay: `${idx * 0.1}s`,
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = `0 16px 48px ${pal.mid}30`;
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.07)";
                }}
              >
                {/* Artwork thumb */}
                <div style={{
                  height: 200,
                  background: `linear-gradient(145deg, ${pal.light} 0%, ${pal.mid}18 100%)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative",
                }}>
                  <span style={{ fontSize: 64, opacity: 0.6 }}>{obra.emoji}</span>
                  <div style={{
                    position: "absolute", top: 12, right: 12,
                    background: "rgba(255,255,255,0.85)",
                    borderRadius: 20,
                    padding: "3px 10px",
                    fontFamily: "'Lato', sans-serif",
                    fontSize: 10, letterSpacing: "0.08em",
                    color: pal.dark,
                  }}>
                    {obra.tecnica}
                  </div>
                </div>

                {/* Card info */}
                <div style={{ padding: "1.1rem 1.3rem 1.3rem" }}>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.25rem", fontWeight: 500,
                    color: "#2d1a3a", margin: "0 0 0.3rem",
                  }}>{obra.nombre}</h3>
                  <div style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: 12, color: "#9e9e9e", marginBottom: "0.8rem",
                  }}>{obra.tamaño}</div>
                  <div style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                  }}>
                    <span style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.2rem", fontWeight: 600,
                      color: pal.mid,
                    }}>{fmtPrecio(obra.precio)}</span>
                    <span style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: 11, color: pal.mid,
                      letterSpacing: "0.08em",
                    }}>Ver más →</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {modalObra && <Modal obra={modalObra} onClose={() => setModalObra(null)} />}
    </section>
  );
}

/* Contacto */
function Contacto() {
  const [ref, visible] = useInView();
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

  return (
    <section id="contacto" style={{
      padding: "6rem 2rem",
      background: "linear-gradient(160deg, #e8f4fd 0%, #f3e8ff 50%, #fce4ec 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", bottom: -80, left: -80, width: 320, height: 320,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(194,24,91,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div ref={ref} style={{
        maxWidth: 640, margin: "0 auto",
        textAlign: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        <div style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
          color: "#c2185b", marginBottom: "0.8rem",
        }}>Hablemos</div>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 400,
          color: "#2d1a3a", margin: "0 0 1rem",
        }}>
          <em>Contacto</em>
        </h2>

        <p style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: "1rem", color: "#5a4060",
          lineHeight: 1.75, margin: "0 auto 3rem",
          maxWidth: 400, fontWeight: 300,
        }}>
          ¿Te interesa una obra, encargar un cuadro o información sobre las clases?
          ¡Escribime!
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 16,
                background: "#fff",
                borderRadius: 16, padding: "1.1rem 1.5rem",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                border: "1px solid rgba(200,180,220,0.2)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseOver={e => { e.currentTarget.style.transform = "translateX(4px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)"; }}
              onMouseOut={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}
            >
              <span style={{ fontSize: 24, minWidth: 32 }}>{l.icon}</span>
              <div style={{ textAlign: "left" }}>
                <div style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "#9e9e9e", marginBottom: 2,
                }}>{l.label}</div>
                <div style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "1rem", color: l.color, fontWeight: 400,
                }}>{l.value}</div>
              </div>
              <span style={{ marginLeft: "auto", color: "#d0c0e0", fontSize: 18 }}>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Footer */
function Footer() {
  return (
    <footer style={{
      padding: "2rem",
      textAlign: "center",
      background: "#2d1a3a",
    }}>
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.1rem", fontStyle: "italic",
        color: "rgba(255,255,255,0.45)", margin: 0,
      }}>
        Maria Teresa Pincheira · Arte con alma · 2026
      </p>
    </footer>
  );
}

/* ─── CSS ANIMATIONS ──────────────────────────────────────────────────── */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Lato:wght@300;400;700&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { background: #fdf6f9; }

    @keyframes breathe {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.92; transform: scale(1.015); }
    }
    @keyframes floatPetal {
      0% { transform: translateY(0) rotate(0deg); }
      100% { transform: translateY(-18px) rotate(15deg); }
    }
    @keyframes scrollBounce {
      0%, 100% { transform: translateX(-50%) translateY(0); }
      50% { transform: translateX(-50%) translateY(6px); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Responsive */
    @media (max-width: 700px) {
      nav a { display: none; }
      section > div[style*="grid-template-columns: 1fr 1fr"] {
        grid-template-columns: 1fr !important;
      }
    }
  `}</style>
);

/* ─── APP ─────────────────────────────────────────────────────────────── */
export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Sobre />
        <Clases />
        <Galeria />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}